import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import twilio from 'twilio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());

const NOTIFY_EMAIL = 'zacktowing123@gmail.com';
const NOTIFY_PHONE_NUMBERS = ['+19453330543', '+19454445446'];

// ---- Email transport (SMTP) ----
function getMailTransport() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

// ---- Twilio client (SMS) ----
function getTwilioClient() {
  if (!process.env.TWILIO_ACCOUNT_SID || !process.env.TWILIO_AUTH_TOKEN) {
    return null;
  }
  return twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
}

function buildLeadSummary(lead) {
  const lines = [
    `New lead: ${lead.source}`,
    `Name: ${lead.name || 'N/A'}`,
    `Phone: ${lead.phone || 'N/A'}`,
  ];
  if (lead.location) lines.push(`Location: ${lead.location}`);
  if (lead.service) lines.push(`Service: ${lead.service}`);
  if (lead.notes) lines.push(`Notes: ${lead.notes}`);
  lines.push(`Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT`);
  return lines.join('\n');
}

app.post('/api/notify', async (req, res) => {
  const lead = req.body || {};
  const summary = buildLeadSummary(lead);
  const results = { email: 'skipped', sms: [] };

  // Send email
  try {
    const transport = getMailTransport();
    if (transport) {
      await transport.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: NOTIFY_EMAIL,
        subject: `🚨 ${lead.source || 'New Lead'} — ${lead.name || 'Unknown'} (${lead.phone || 'no phone'})`,
        text: summary,
      });
      results.email = 'sent';
    } else {
      console.warn('[notify] SMTP not configured — skipping email send.');
    }
  } catch (err) {
    console.error('[notify] Email send failed:', err.message);
    results.email = 'failed';
  }

  // Send SMS to both numbers
  try {
    const client = getTwilioClient();
    if (client && process.env.TWILIO_FROM_NUMBER) {
      for (const to of NOTIFY_PHONE_NUMBERS) {
        try {
          await client.messages.create({
            body: summary,
            from: process.env.TWILIO_FROM_NUMBER,
            to,
          });
          results.sms.push({ to, status: 'sent' });
        } catch (err) {
          console.error(`[notify] SMS to ${to} failed:`, err.message);
          results.sms.push({ to, status: 'failed' });
        }
      }
    } else {
      console.warn('[notify] Twilio not configured — skipping SMS send.');
    }
  } catch (err) {
    console.error('[notify] SMS block failed:', err.message);
  }

  // Never block the user-facing success screen on notification delivery
  res.json({ ok: true, results });
});

// Serve the built frontend in production
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 8787;
app.listen(PORT, () => {
  console.log(`Zacks Towing server running on port ${PORT}`);
});

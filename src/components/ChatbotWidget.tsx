import React, { useState } from 'react';
import { MessageSquare, X, Send, Phone, Bot, User, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, SERVICES, SERVICE_CITIES } from '../data/towingData';
import { ChatMessage } from '../types';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'bot',
      text: `Hello! I am Zacks Towing AI Assistant. Stranded or need an instant quote? How can I help you right now?`,
      options: [
        { label: 'Check Estimated Arrival (ETA)', action: 'eta' },
        { label: 'View Pricing Estimates', action: 'pricing' },
        { label: 'Service Areas Covered', action: 'areas' },
        { label: 'Payment Methods', action: 'payment' },
        { label: 'Talk to Owner Ali Now', action: 'call' }
      ],
      timestamp: 'Just now'
    }
  ]);

  const [input, setInput] = useState('');

  const handleOptionClick = (action: string, label: string) => {
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: label,
      timestamp: 'Just now'
    };

    let botResponseText = '';
    let nextOptions = [
      { label: 'Check Service Areas', action: 'areas' },
      { label: 'Get Pricing Estimate', action: 'pricing' },
      { label: 'Call Ali Immediately', action: 'call' }
    ];

    if (action === 'eta') {
      botResponseText = `Our average response time across Dallas, Plano, Prosper, Celina, Allen, Richardson, and Van Alstyne is 15 to 25 minutes! Call Ali at ${BUSINESS_INFO.phoneDisplay} to lock in your driver's exact GPS location pin.`;
    } else if (action === 'pricing') {
      botResponseText = `Our local roadside service calls start at $45 to $75 (Battery Jump Starts $45, Lockouts $50, Flat Tire Swaps $55, Local Towing $75). We guarantee 100% upfront quotes with no hidden fees!`;
    } else if (action === 'areas') {
      botResponseText = `We cover ALL over North Texas including Dallas County, Collin County, and Grayson County (Dallas, Van Alstyne, Plano, Prosper, Celina, Allen, Fairview, Lucas, Richardson, Wimberly Place).`;
    } else if (action === 'payment') {
      botResponseText = `We accept Cash, Debit/Credit Cards (Visa, MasterCard, Amex), Apple Pay, Google Pay, Zelle, and Venmo right at the truck!`;
    } else if (action === 'call') {
      botResponseText = `Connecting you directly with owner Ali... Dial ${BUSINESS_INFO.phoneDisplay} or message on WhatsApp for immediate dispatch!`;
    } else {
      botResponseText = `Thanks for reaching out! You can call Ali 24/7 at ${BUSINESS_INFO.phoneDisplay} or WhatsApp us for instant dispatch.`;
    }

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: botResponseText,
      options: nextOptions,
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  const handleSendCustom = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    setInput('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: 'Just now'
    };

    const lower = userText.toLowerCase();
    let botReply = `Thanks! For fastest assistance or dispatch, please call Ali directly at ${BUSINESS_INFO.phoneDisplay} or message us on WhatsApp.`;

    if (lower.includes('cost') || lower.includes('price') || lower.includes('how much')) {
      botReply = `Local towing starts at $75, Jump starts $45, Lockouts $50, Flat tire changes $55. Call ${BUSINESS_INFO.phoneDisplay} for an exact locked quote!`;
    } else if (lower.includes('time') || lower.includes('eta') || lower.includes('where')) {
      botReply = `We arrive in 15 to 20 minutes across Dallas, Plano, Prosper, Allen, Celina, Van Alstyne & North Texas!`;
    } else if (lower.includes('lock') || lower.includes('key')) {
      botReply = `We offer 24/7 non-destructive car door lockout unlocking and on-site transponder key making! Call ${BUSINESS_INFO.phoneDisplay}.`;
    }

    const botMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'bot',
      text: botReply,
      options: [
        { label: 'Call Ali Now', action: 'call' },
        { label: 'WhatsApp Dispatch', action: 'call' }
      ],
      timestamp: 'Just now'
    };

    setMessages((prev) => [...prev, userMsg, botMsg]);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 left-5 z-30 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 transition-transform hover:scale-110"
          aria-label="Open AI Roadside Chat Assistant"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6 fill-current" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 border-2 border-white rounded-full animate-ping"></span>
          </div>
          <span className="hidden sm:inline font-extrabold text-xs">24/7 Roadside Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 left-4 sm:left-6 z-50 max-w-sm w-[92vw] bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[480px]">
          
          {/* Header */}
          <div className="bg-slate-900 text-white p-4 flex items-center justify-between border-b border-amber-500/30">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xs">
                ZT&T
              </div>
              <div>
                <h3 className="font-display font-extrabold text-sm text-white flex items-center gap-1.5">
                  Zacks Roadside AI
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </h3>
                <span className="text-[10px] font-bold text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ali Online • 15 Min Dispatch
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/70">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`p-3 rounded-2xl max-w-[85%] text-xs font-medium leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-amber-500 text-slate-950 font-bold rounded-tr-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none shadow-2xs'
                  }`}
                >
                  {m.text}
                </div>

                {/* Quick Option Buttons */}
                {m.options && m.options.length > 0 && (
                  <div className="mt-2 space-y-1.5 w-full">
                    {m.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        onClick={() => handleOptionClick(opt.action, opt.label)}
                        className="w-full text-left bg-white hover:bg-amber-50 border border-slate-200 hover:border-amber-400 text-slate-800 text-[11px] font-extrabold px-3 py-2 rounded-xl transition-colors shadow-2xs block"
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Escalation CTA Bar */}
          <div className="bg-amber-100 p-2 text-center border-t border-amber-200 flex items-center justify-between px-3">
            <span className="text-[11px] font-black text-slate-800">Need immediate tow?</span>
            <a
              href={BUSINESS_INFO.phoneTel}
              className="bg-slate-950 text-amber-400 hover:bg-slate-900 text-[11px] font-black px-3 py-1 rounded-lg flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              Call {BUSINESS_INFO.phoneDisplay}
            </a>
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendCustom} className="p-2.5 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              placeholder="Type your roadside question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-500 text-slate-950 p-2 rounded-xl hover:bg-amber-600 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
};

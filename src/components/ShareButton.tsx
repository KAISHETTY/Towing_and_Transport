import React, { useState } from 'react';
import { Share2, Check, Copy, MessageSquare, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../data/towingData';

export const ShareButton: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const shareText = `Zacks Towing & Transportation - 24/7 Roadside Assistance & Towing in North Texas (15 min ETA). Call Ali at (945) 444-5446!`;
  const shareUrl = window.location.href;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setShowOptions(!showOptions)}
        className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs px-3.5 py-2 rounded-xl transition-colors"
      >
        <Share2 className="w-3.5 h-3.5" />
        <span>Share Site With Stranded Friend</span>
      </button>

      {showOptions && (
        <div className="absolute bottom-full left-0 mb-2 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-30 space-y-2 animate-fadeIn">
          <div className="text-[11px] font-black uppercase text-slate-400 tracking-wider">
            Forward Roadside Help
          </div>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-bold text-slate-800 p-2 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500 fill-current" />
            Share via WhatsApp
          </a>

          <a
            href={`sms:?body=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
            className="flex items-center gap-2 text-xs font-bold text-slate-800 p-2 hover:bg-sky-50 hover:text-sky-700 rounded-xl transition-colors"
          >
            <Send className="w-4 h-4 text-sky-500" />
            Send via SMS
          </a>

          <button
            onClick={handleCopy}
            className="w-full text-left flex items-center gap-2 text-xs font-bold text-slate-800 p-2 hover:bg-amber-50 hover:text-amber-700 rounded-xl transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-amber-500" />}
            {copied ? 'Copied Link!' : 'Copy Link'}
          </button>
        </div>
      )}
    </div>
  );
};

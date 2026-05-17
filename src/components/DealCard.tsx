/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect } from 'react';
import { 
  FireIcon, 
  GiftIcon, 
  Clock01Icon, 
  UserGroupIcon, 
  Copy01Icon, 
  Tick01Icon,
  ArrowRight01Icon
} from 'hugeicons-react';

interface DealCardProps {
  firmName: string;
  discount: string;
  logo: string;
  tagline?: string;
  expiresIn: number; // seconds
  claimedCount: number;
  promoCode: string;
  link: string;
  isHot?: boolean;
}

export default function DealCard({
  firmName,
  discount,
  logo,
  tagline,
  expiresIn,
  claimedCount,
  promoCode,
  link,
  isHot = false
}: DealCardProps) {
  const [timeLeft, setTimeLeft] = useState(expiresIn);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleClaim = async () => {
    // Copy code
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);

    // Track click
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firm: firmName, type: 'CLAIM_CLICK', code: promoCode })
      });
    } catch (err) {
      console.error('Tracking failed', err);
    }

    // Open link
    window.open(link, '_blank');
  };

  return (
    <div className="relative p-5 md:p-6 rounded-[20px] flex flex-col gap-5 overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-500 bg-[#09090b] shadow-2xl">
      
      {/* Top-Left Glowing Glass Effect */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/30 blur-[60px] group-hover:bg-accent/40 transition-colors duration-500 pointer-events-none z-0"></div>
      
      {/* Subtle top border highlight (Glass Rim Reflection) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

      {/* Header Area */}
      <div className="flex items-start justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-[14px] bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 shadow-inner shrink-0">
            <img src={logo} alt={firmName} className="w-8 h-8 object-contain drop-shadow-md" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-muted/80 text-[9px] uppercase font-bold tracking-widest mb-0.5">Futures Firm</p>
            <h3 className="text-white font-bold text-base leading-tight">{firmName}</h3>
          </div>
        </div>
        
        {isHot && (
          <div className="bg-orange-500/10 text-orange-400 text-[10px] font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1.5 border border-orange-500/20 shadow-[0_0_10px_rgba(249,115,22,0.1)]">
            <FireIcon size={12} /> Hot Deal
          </div>
        )}
      </div>

      {/* Discount & Tagline */}
      <div className="relative z-10 mt-1">
        <h2 className="text-4xl md:text-5xl font-black text-accent tracking-tighter drop-shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)]">
          {discount}<span className="text-xl md:text-2xl ml-1 text-accent/80 tracking-tight">OFF</span>
        </h2>
        {tagline && (
          <div className="mt-2.5 bg-accent/10 text-accent text-[11px] font-semibold px-2.5 py-1.5 rounded-xl inline-flex items-center gap-1.5 border border-accent/20">
             <GiftIcon size={12} /> {tagline}
          </div>
        )}
      </div>

      {/* Stats & Countdown */}
      <div className="space-y-4 relative z-10 mt-2">
        <div className="flex items-center justify-between text-xs">
           <div className="flex items-center gap-2 text-muted font-medium">
             <Clock01Icon size={14} /> Expires in
           </div>
           <div className="text-white font-mono font-bold tracking-widest">{formatTime(timeLeft)}</div>
        </div>
        
        <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
          <div className="bg-accent h-full shadow-[0_0_8px_var(--accent)] rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted font-medium">
          <UserGroupIcon size={14} /> <span className="text-white font-bold">{claimedCount.toLocaleString()}</span> traders claimed this
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto pt-2 space-y-3 relative z-10">
        <div className="flex items-center justify-between bg-black/50 border border-white/10 rounded-xl p-3 group/code hover:border-accent/30 transition-colors">
           <span className="text-muted text-[10px] font-bold uppercase tracking-widest">Use Code:</span>
           <div className="flex items-center gap-2.5">
              <span className="text-accent font-mono font-bold tracking-widest text-base">{promoCode}</span>
              <button 
                onClick={() => {
                   navigator.clipboard.writeText(promoCode);
                   setCopied(true);
                   setTimeout(() => setCopied(false), 2000);
                }}
                className="text-muted hover:text-white bg-white/5 p-1.5 rounded-md transition-all active:scale-95 border border-white/5 hover:border-white/20"
              >
                {copied ? <Tick01Icon size={16} className="text-green-400" /> : <Copy01Icon size={16} />}
              </button>
           </div>
        </div>

        <button 
          onClick={handleClaim}
          className="w-full py-3 bg-accent hover:bg-accent/90 text-black font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]"
        >
          Claim Deal <ArrowRight01Icon size={18} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

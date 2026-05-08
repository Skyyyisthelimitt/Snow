'use client';

import React, { useState, useEffect } from 'react';

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
    <div className="glass glass-hover p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group border border-white/5 hover:border-accent/30 transition-all duration-500">
      {isHot && (
        <div className="absolute top-4 left-4 bg-orange-500/10 text-orange-400 text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1 border border-orange-500/20">
          <span>🔥</span> Hot Deal
        </div>
      )}

      <div className="flex items-center gap-4 mt-4">
        <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden border border-white/10">
          <img src={logo} alt={firmName} className="w-8 h-8 object-contain" />
        </div>
        <div>
          <p className="text-muted text-[10px] uppercase font-bold tracking-wider">Futures Firm</p>
          <h3 className="text-white font-bold text-lg">{firmName}</h3>
        </div>
      </div>

      <div className="my-2">
        <h2 className="text-5xl font-black text-accent tracking-tighter">{discount}<span className="text-xl ml-1">OFF</span></h2>
        {tagline && (
          <div className="mt-2 bg-accent/10 text-accent text-[11px] font-bold px-3 py-1.5 rounded-lg inline-flex items-center gap-2 border border-accent/20">
             <span>🎁</span> {tagline}
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-[11px]">
           <div className="flex items-center gap-2 text-muted">
             <span>🕒</span> Expires in
           </div>
           <div className="text-white font-mono font-bold">{formatTime(timeLeft)}</div>
        </div>
        
        <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
          <div className="bg-accent h-full shadow-[0_0_8px_var(--accent)]" style={{ width: '65%' }}></div>
        </div>

        <div className="flex items-center gap-2 text-[11px] text-muted">
          <span>👥</span> <span className="text-white font-bold">{claimedCount.toLocaleString()}</span> traders claimed this
        </div>
      </div>

      <div className="mt-2 space-y-3">
        <div className="flex items-center justify-between bg-black/40 border border-white/10 rounded-xl p-3">
           <span className="text-muted text-[11px] font-medium uppercase">Use Code:</span>
           <div className="flex items-center gap-2">
              <span className="text-accent font-mono font-bold tracking-widest">{promoCode}</span>
              <button 
                onClick={() => {
                   navigator.clipboard.writeText(promoCode);
                   setCopied(true);
                   setTimeout(() => setCopied(false), 2000);
                }}
                className="text-muted hover:text-white transition-colors"
              >
                {copied ? '✅' : '📋'}
              </button>
           </div>
        </div>

        <button 
          onClick={handleClaim}
          className="w-full py-4 bg-accent hover:bg-accent/90 text-black font-black rounded-xl transition-all duration-300 transform group-hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2"
        >
          Claim Deal <span>→</span>
        </button>
      </div>
    </div>
  );
}

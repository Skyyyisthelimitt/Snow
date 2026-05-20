'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Copy01Icon, 
  Tick01Icon,
  ArrowRight01Icon
} from 'hugeicons-react';

interface BlueprintDealCardProps {
  firmName: string;
  discount: string;
  logo: string;
  description: string;
  expiresIn: number;
  claimedCount: number;
  promoCode: string;
  link: string;
  isHot?: boolean;
  isFeatured?: boolean;
}

export default function BlueprintDealCard({
  firmName,
  discount,
  logo,
  promoCode,
  link,
  isFeatured = false
}: BlueprintDealCardProps) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={`group relative border border-dashed transition-all duration-500 bg-[#0A0C10] p-2.5 flex flex-col 
      ${isFeatured ? "border-accent/40 shadow-[0_0_25px_rgba(var(--accent-rgb),0.15)] z-20 group-hover:border-accent/10" : "border-accent/20 group-hover:border-accent/5"} 
      hover:animate-[blink_0.15s_ease-in-out_3]`}>
      
      {/* Best Deal Badge - Emerald Matrix (Success Alert) */}
      {isFeatured && (
        <div className="absolute top-3 right-2 min-w-[80px] h-6 flex items-center justify-center bg-black border border-[#00FF88]/40 rounded-sm z-40 shadow-[0_0_20px_rgba(0,255,136,0.15)] group-hover:border-[#00FF88]/80 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-[#00FF88]/5 animate-pulse"></div>
          <p className="relative text-[#00FF88] font-black text-[10px] uppercase tracking-[0.15em] leading-none">Best Deal</p>
        </div>
      )}

      {/* Solid Corner Markers (Appear on Hover) */}
      <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"></div>
      <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"></div>
      <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"></div>
      <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"></div>

      {/* Top Section (Invoicely Style Inset) */}
      <div className="relative w-full aspect-[21/9] bg-[#050608] rounded-md border border-accent/10 flex flex-col items-center justify-center p-3 overflow-hidden group-hover:border-accent/30 transition-colors">
        
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[40px]"></div>
        
        {/* Subtle Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle, var(--accent) 1px, transparent 1px)', backgroundSize: '16px 16px' }}>
        </div>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pt-4">
          {/* Top-Left PFP and Name Container */}
          <div className="absolute top-3 left-3 flex items-center gap-3 z-20">
             {/* PFP with Glow Effect */}
             <div className="relative group/pfp">
                <div className="absolute -inset-1 bg-accent/20 rounded-lg blur-sm opacity-0 group-hover/pfp:opacity-100 transition-opacity duration-300"></div>
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-background/50">
                   <Image 
                      src={logo} 
                      alt={firmName}
                      fill
                      sizes="(max-width: 768px) 48px, 56px"
                      className="object-cover"
                   />
                </div>
             </div>
             <span className="text-white font-black text-lg tracking-tight uppercase">{firmName}</span>
          </div>

          <h2 className="text-[32px] font-black text-white tracking-tight group-hover:text-accent transition-colors leading-none">
            {discount.toUpperCase().includes('OFF') ? discount : `${discount} OFF`}
          </h2>
          
          {/* Absolutely Positioned Code Box (Forced to bottom) - Perfectly Balanced Centering */}
          <div className="absolute bottom-4 min-w-[140px] h-7 flex items-center justify-center bg-accent/5 border border-dashed border-accent/30 rounded group-hover:border-accent/60 transition-all">
             <div className="flex items-center gap-2">
                <span className="text-muted/60 text-[13px] font-bold uppercase tracking-wide">Code:</span>
                <div className="flex items-center gap-2">
                   <span className="text-accent font-mono font-bold text-xl uppercase">{promoCode}</span>
                   <button 
                     onClick={(e) => {
                        e.stopPropagation();
                        navigator.clipboard.writeText(promoCode);
                        setCopied(true);
                        setTimeout(() => setCopied(false), 2000);
                     }}
                     className="text-muted/50 hover:text-white transition-colors flex items-center"
                   >
                     {copied ? <Tick01Icon size={18} className="text-green-400" /> : <Copy01Icon size={18} />}
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Action Footer - Upgraded Button with Slide Animation */}
      <div className="mt-auto pt-2">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative w-full h-10 bg-black border border-accent/30 hover:border-accent rounded-sm flex items-center justify-center overflow-hidden transition-all duration-300"
        >
          {/* Animated Background Slide */}
          <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out"></div>
          
          {/* Button Text */}
          <span className="relative z-10 flex items-center gap-2 text-accent group-hover/btn:text-black font-bold text-xs uppercase tracking-[0.2em] transition-colors duration-300">
            Claim Deal <ArrowRight01Icon size={14} strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </div>
  );
}

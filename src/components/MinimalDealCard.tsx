'use client';

import React from 'react';
import { 
  StarIcon,
  ArrowRight01Icon
} from 'hugeicons-react';

interface MinimalDealCardProps {
  firmName: string;
  discount: string;
  logo: string;
  rating: number;
  reviews: number;
  platforms: string[];
  features: string[];
  promoCode: string;
  link: string;
}

export default function MinimalDealCard({
  firmName,
  discount,
  logo,
  rating,
  reviews,
  platforms,
  features,
  promoCode,
  link
}: MinimalDealCardProps) {
  return (
    <div className="bg-[#111111] border border-white/5 rounded-2xl p-5 flex flex-col gap-4 hover:border-white/10 transition-all group">
      
      {/* Header: Logo, Name, and Discount */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center p-1.5 border border-white/5">
            <img src={logo} alt={firmName} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-white font-bold text-sm leading-tight">{firmName}</h3>
            <div className="flex items-center gap-1 mt-0.5">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <StarIcon 
                    key={i} 
                    size={10} 
                    variant="solid" 
                    className={i < Math.floor(rating) ? "text-green-500" : "text-white/10"} 
                  />
                ))}
              </div>
              <span className="text-[10px] text-muted font-medium">{rating} ({reviews})</span>
            </div>
          </div>
        </div>
        <div className="bg-green-500/10 border border-green-500/20 px-2 py-1 rounded-md">
          <span className="text-green-500 font-black text-xs uppercase">{discount} OFF</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="space-y-1.5">
        <p className="text-muted text-[11px] font-medium leading-tight">
          {platforms.join(', ')} • {features.join(' • ')}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-2">
           <div className="bg-green-500/5 text-green-500 text-[9px] font-bold px-2 py-1 rounded border border-green-500/10">
             all evaluations -{discount}
           </div>
        </div>
      </div>

      {/* Footer: Code and Link */}
      <div className="mt-auto pt-2 flex items-center justify-between border-t border-white/5">
        <div className="text-muted font-medium text-xs">
          Code: <span className="text-white font-bold tracking-wider">{promoCode}</span>
        </div>
        <a 
          href={link} 
          className="flex items-center gap-1.5 text-green-500 font-bold text-xs hover:gap-2 transition-all"
        >
          View Deal <ArrowRight01Icon size={14} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { Tweet } from 'react-tweet';
import { ArrowRight01Icon } from 'hugeicons-react';

interface GiveawayCardProps {
  tweetId: string;
  joinLink?: string; // Optional, defaults to the tweet url
}

export default function GiveawayCard({ tweetId, joinLink }: GiveawayCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const href = joinLink || `https://x.com/i/status/${tweetId}`;

  return (
    <div className="relative p-5 md:p-6 rounded-[20px] flex flex-col gap-3 overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-500 bg-[#09090b] shadow-2xl w-full">
      
      {/* Dynamic CSS Overrides - 100% immune to local browser CSS caching! */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Hide ONLY the empty info bar, empty card details, replies button, and timestamp clutter */
        .react-tweet-theme [class*='tweet-info'],
        .react-tweet-theme [class*='tweet-replies'],
        .react-tweet-theme [class*='CardDetails'],
        .react-tweet-theme [class*='card-details'],
        .react-tweet-theme time {
          display: none !important;
          height: 0px !important;
          margin: 0px !important;
          padding: 0px !important;
          border: none !important;
        }
        /* Strip horizontal divider lines completely */
        .react-tweet-theme [class*='tweet-actions'] {
          border-top: none !important;
          border-bottom: none !important;
          margin-top: 4px !important;
          margin-bottom: 4px !important;
          padding: 0 !important;
        }
        .react-tweet-theme [class*='tweet-body'] {
          margin-bottom: 0px !important;
        }
        .react-tweet-theme [class*='tweet-card'],
        .react-tweet-theme [class*='CardContainer'],
        .react-tweet-theme [class*='quoted-tweet'] {
          border: none !important;
          margin-top: 12px !important;
          margin-bottom: 0px !important;
        }
        .react-tweet-theme {
          margin: 0 !important;
          width: 100% !important;
          --tweet-bg-color: transparent !important;
          --tweet-border: none !important;
        }
        .react-tweet-theme article {
          margin: 0 !important;
          padding-bottom: 0px !important;
        }
      `}} />
      
      {/* Top-Left Glowing Glass Effect */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent/30 blur-[60px] group-hover:bg-accent/40 transition-colors duration-500 pointer-events-none z-0"></div>
      
      {/* Subtle top border highlight (Glass Rim Reflection) */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
      
      {/* Tweet Preview Area - Seamlessly integrated & stripped of Twitter bloat */}
      <div 
        data-theme="dark" 
        className="relative z-10 w-full flex justify-center items-start 
          [&>.react-tweet-theme]:!m-0 
          [&>.react-tweet-theme]:w-full 
          [&_article_article]:!hidden 
          [&_footer]:!hidden 
          [&_time]:!hidden
          [&_article>a]:!hidden
          [&_img]:!max-h-[220px] 
          [&_img]:!object-cover 
          [&_[class*='media']]:!max-h-[220px] 
          [&_[class*='media']]:!rounded-xl
          [&_p]:!text-sm 
          [&_p]:!leading-relaxed"
        style={{ zoom: 0.85 }}
      >
        <Tweet id={tweetId} />
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-1">
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: '100%',
            paddingTop: '12px',
            paddingBottom: '12px',
            backgroundColor: isHovered ? '#1ea2e6' : '#26B5FF',
            color: '#000000',
            fontWeight: '900',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            borderRadius: '12px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            boxShadow: isHovered ? '0 0 25px rgba(38,181,255,0.4)' : '0 0 20px rgba(38,181,255,0.25)',
            cursor: 'pointer',
            textDecoration: 'none'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Join Giveaway <ArrowRight01Icon size={18} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}

import React from 'react';
import { EmbeddedTweet } from 'react-tweet';
import { getTweet } from 'react-tweet/api';
import { ArrowRight01Icon } from 'hugeicons-react';

interface GiveawayCardProps {
  tweetId: string;
  joinLink?: string; // Optional, defaults to the tweet url
  customTitle?: string;
  customDescription?: string;
  customImage?: string;
}

/** 
 * Safely loads a tweet, returning null for NSFW, deleted, tombstoned, or any
 * other unavailable state. Deeply sanitizes the tweet object to prevent
 * react-tweet from crashing on malformed entities (like empty objects).
 */
async function safeGetTweet(id: string): Promise<any> {
  try {
    const tweet = await getTweet(id);
    if (!tweet || typeof tweet !== 'object' || !('id_str' in tweet)) return null;
    
    // Deep sanitize entities to prevent react-tweet rendering crashes
    const sanitizeEntities = (t: any) => {
      if (!t || typeof t !== 'object') return;
      if (!t.entities || typeof t.entities !== 'object') t.entities = {};
      const e = t.entities;
      
      // react-tweet blindly iterates over these, so they MUST be arrays
      if (!Array.isArray(e.hashtags)) e.hashtags = [];
      if (!Array.isArray(e.urls)) e.urls = [];
      if (!Array.isArray(e.user_mentions)) e.user_mentions = [];
      if (!Array.isArray(e.symbols)) e.symbols = [];
      
      // react-tweet checks `if (e.media)` and then accesses `e.media[0]`. 
      // If e.media is `[]`, it crashes. So we must delete it if empty.
      if (e.media && (!Array.isArray(e.media) || e.media.length === 0)) delete e.media;
      
      if (t.photos && !Array.isArray(t.photos)) delete t.photos;
      if (t.mediaDetails && !Array.isArray(t.mediaDetails)) delete t.mediaDetails;
    };

    sanitizeEntities(tweet);
    if (tweet.quoted_tweet) {
      sanitizeEntities(tweet.quoted_tweet);
    }

    return tweet;
  } catch {
    return null;
  }
}

export default async function GiveawayCard({ tweetId, joinLink, customTitle, customDescription, customImage }: GiveawayCardProps) {
  // Safely extract tweet ID in case the user input a full URL or it's empty
  const cleanTweetId = (() => {
    if (!tweetId) return '';
    if (/^\d+$/.test(tweetId)) return tweetId;
    const match = tweetId.match(/(?:x\.com|twitter\.com)\/.*\/status\/(\d+)/);
    return match ? match[1] : '';
  })();

  const href = joinLink || (cleanTweetId ? `https://x.com/i/status/${cleanTweetId}` : '#');

  const tweet = cleanTweetId ? await safeGetTweet(cleanTweetId) : null;

  return (
    <div className="relative p-5 pb-5 md:p-6 md:pb-6 rounded-[20px] flex flex-col gap-4 overflow-hidden group border border-white/5 hover:border-white/10 transition-all duration-500 bg-[#09090b] shadow-2xl w-full">
      
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
        {cleanTweetId && tweet ? (
          <EmbeddedTweet tweet={tweet} />
        ) : (customTitle || customDescription || customImage) ? (
          <div className="w-full flex flex-col items-center justify-start border border-white/10 rounded-xl bg-white/5 overflow-hidden">
            {customImage && (
              <div className="w-full h-[140px] overflow-hidden border-b border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={customImage} alt={customTitle || "Giveaway"} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="p-4 w-full text-left flex flex-col gap-2">
              <span className="text-white font-bold text-sm tracking-tight leading-tight">
                {customTitle || "Special Giveaway"}
              </span>
              {customDescription && (
                <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
                  {customDescription}
                </p>
              )}
            </div>
          </div>
        ) : cleanTweetId ? (
          <div className="w-full h-[220px] flex flex-col items-center justify-center text-white/50 text-sm border border-white/10 rounded-xl bg-white/5">
            <span className="text-white/80 font-bold mb-2">Giveaway Unavailable</span>
            <span className="text-xs text-white/40">This post may have been deleted or the ID is invalid.</span>
          </div>
        ) : (
          <div className="w-full h-[220px] flex items-center justify-center text-white/50 text-sm border border-white/10 rounded-xl bg-white/5">
            No valid Tweet ID provided
          </div>
        )}
      </div>

      {/* Action Button */}
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: '#000000' }}
        className="relative z-10 w-full h-[42px] bg-[#26B5FF] hover:bg-[#1ea2e6] font-black text-[11px] uppercase tracking-[0.15em] rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(38,181,255,0.25)] hover:shadow-[0_0_30px_rgba(38,181,255,0.45)] cursor-pointer no-underline"
      >
        JOIN GIVEAWAY 
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </a>
    </div>
  );
}

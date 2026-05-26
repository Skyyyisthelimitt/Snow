import React from 'react';
import { EmbeddedTweet, TweetNotFound } from 'react-tweet';
import { getTweet } from 'react-tweet/api';
import { ArrowRight01Icon } from 'hugeicons-react';

interface GiveawayCardProps {
  tweetId: string;
  joinLink?: string; // Optional, defaults to the tweet url
}

export default async function GiveawayCard({ tweetId, joinLink }: GiveawayCardProps) {
  // Safely extract tweet ID in case the user input a full URL or it's empty
  const cleanTweetId = (() => {
    if (!tweetId) return '';
    if (/^\d+$/.test(tweetId)) return tweetId;
    const match = tweetId.match(/(?:x\.com|twitter\.com)\/.*\/status\/(\d+)/);
    return match ? match[1] : '';
  })();

  const href = joinLink || (cleanTweetId ? `https://x.com/i/status/${cleanTweetId}` : '#');

  let tweet;
  try {
    if (cleanTweetId) {
      tweet = await getTweet(cleanTweetId).catch(() => undefined);
    }
  } catch (err) {
    console.error('Failed to load tweet:', cleanTweetId);
  }

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
        {cleanTweetId && tweet ? (
          <EmbeddedTweet tweet={tweet} />
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
      <div className="relative z-10 mt-1">
        <a 
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-[#26B5FF] hover:bg-[#1ea2e6] text-black font-black text-[11px] uppercase tracking-[0.15em] rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(38,181,255,0.25)] hover:shadow-[0_0_25px_rgba(38,181,255,0.4)] cursor-pointer no-underline"
        >
          Join Giveaway <ArrowRight01Icon size={18} strokeWidth={2.5} />
        </a>
      </div>
    </div>
  );
}

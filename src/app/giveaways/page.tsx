'use client';

import Navbar from '@/components/Navbar';
import React, { useState } from 'react';

export default function GiveawaysPage() {
  const [email, setEmail] = useState('');
  const [discord, setDiscord] = useState('');
  const [joined, setJoined] = useState(false);

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
    // In a real app, send to Supabase/API
  };

  return (
    <main className="min-h-screen pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      <Navbar />
      
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.9]">
          Active <span className="text-accent glow-text">Giveaways</span>
        </h1>
        <p className="text-muted max-w-2xl mx-auto text-lg">
          We partner with the world's best prop firms to give away free funded accounts every week.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Featured Giveaway Card */}
        <div className="glass p-8 rounded-3xl relative overflow-hidden border border-white/10 group">
          <div className="absolute top-0 right-0 p-6">
             <div className="bg-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Featured</div>
          </div>
          
          <div className="flex items-center gap-6 mb-8">
             <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                <img src="https://api.dicebear.com/7.x/shapes/svg?seed=tradeify" className="w-12 h-12" alt="Tradeify" />
             </div>
             <div>
               <h2 className="text-3xl font-black text-white">Tradeify $50K Challenge</h2>
               <p className="text-muted">Sponsored by Tradeify Crypto</p>
             </div>
          </div>

          <div className="space-y-6 mb-8">
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 glass flex items-center justify-center rounded-full text-accent font-bold">1</div>
                <div>
                   <p className="text-white font-bold text-sm">Follow @SNOWX on X</p>
                   <p className="text-muted text-xs">Verification required</p>
                </div>
                <button className="ml-auto glass px-4 py-1.5 rounded-full text-xs hover:bg-white/10 transition-all">Follow ↗</button>
             </div>
             <div className="flex items-center gap-4">
                <div className="w-10 h-10 glass flex items-center justify-center rounded-full text-accent font-bold">2</div>
                <div>
                   <p className="text-white font-bold text-sm">Join the Discord</p>
                   <p className="text-muted text-xs">Community perks</p>
                </div>
                <button className="ml-auto glass px-4 py-1.5 rounded-full text-xs hover:bg-white/10 transition-all">Join ↗</button>
             </div>
          </div>

          <button className="w-full py-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white font-bold transition-all flex items-center justify-center gap-2">
             Verify Social Actions <span>🔒</span>
          </button>
        </div>

        {/* Independent Giveaway Form */}
        <div className="glass p-8 rounded-3xl border border-accent/20 bg-accent/5 relative">
           <h2 className="text-3xl font-black text-white mb-2">Independent Giveaway</h2>
           <p className="text-muted text-sm mb-8">Enter your details for a chance to win a $10K Eval Account. No social media required.</p>

           {!joined ? (
             <form onSubmit={handleJoin} className="space-y-4">
               <div>
                 <label className="text-[10px] uppercase font-black text-muted mb-2 block tracking-widest">Email Address</label>
                 <input 
                   type="email" 
                   required
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-accent/50 outline-none transition-all"
                   placeholder="trader@example.com"
                 />
               </div>
               <div>
                 <label className="text-[10px] uppercase font-black text-muted mb-2 block tracking-widest">Discord ID</label>
                 <input 
                   type="text" 
                   required
                   value={discord}
                   onChange={(e) => setDiscord(e.target.value)}
                   className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white focus:border-accent/50 outline-none transition-all"
                   placeholder="username#0000"
                 />
               </div>
               <button className="w-full py-5 bg-accent text-black font-black rounded-2xl transition-all hover:scale-[1.02] active:scale-95 shadow-[0_0_20px_var(--accent-glow)] mt-4">
                  Enter Giveaway <span>🔥</span>
               </button>
             </form>
           ) : (
             <div className="py-12 text-center animate-fade-in">
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/30">
                   <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-2xl font-black text-white mb-2">You're in!</h3>
                <p className="text-muted">Keep an eye on your email for the winner announcement.</p>
                <button onClick={() => setJoined(false)} className="mt-8 text-accent text-sm font-bold">Enter another email?</button>
             </div>
           )}
        </div>
      </div>

      <section className="mt-24">
         <h2 className="text-3xl font-black text-white mb-12 text-center underline decoration-accent/30 underline-offset-8">Follow Our Socials</h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Twitter', 'Discord', 'TikTok', 'Instagram'].map((social) => (
              <a key={social} href="#" className="glass p-6 rounded-2xl flex flex-col items-center gap-3 hover:border-accent/40 hover:bg-white/5 transition-all group">
                 <div className="text-3xl group-hover:scale-110 transition-transform">
                   {social === 'Twitter' && '𝕏'}
                   {social === 'Discord' && '👾'}
                   {social === 'TikTok' && '🎵'}
                   {social === 'Instagram' && '📸'}
                 </div>
                 <span className="text-xs font-bold text-muted uppercase tracking-widest">{social}</span>
              </a>
            ))}
         </div>
      </section>
    </main>
  );
}

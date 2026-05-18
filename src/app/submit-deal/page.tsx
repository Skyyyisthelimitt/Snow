'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';
import Footer from '@/components/Footer';
import { 
  ArrowRight01Icon, 
  Mail01Icon, 
  SparklesIcon, 
  CheckmarkCircle02Icon
} from 'hugeicons-react';

export default function SubmitDealPage() {
  const [formData, setFormData] = useState({
    firmName: '',
    link: '',
    discount: '',
    commission: '',
    retainer: '',
    deliverables: '',
    contactEmail: '',
    contactTelegram: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/deals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.success) {
        setSuccess(true);
        setFormData({
          firmName: '',
          link: '',
          discount: '',
          commission: '',
          retainer: '',
          deliverables: '',
          contactEmail: '',
          contactTelegram: ''
        });
      }
    } catch (error) {
      console.error('Error submitting deal:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background relative overflow-y-auto overflow-x-hidden flex flex-col">
      <Navbar />

      {/* Background Glow */}
      <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      {/* Hero Header */}
      <div className="relative w-full flex flex-col items-center justify-start z-10" style={{ paddingTop: '100px' }}>
        
        {/* PixelBlast Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
          style={{
            maskImage: 'radial-gradient(ellipse 120% 100% at 50% 20%, transparent 10%, black 30%, black 90%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 120% 100% at 50% 20%, transparent 10%, black 30%, black 90%, transparent 100%)'
          }}
        >
          <PixelBlast
            variant="square"
            pixelSize={4}
            color="#B3D4FF"
            patternScale={2}
            patternDensity={1}
            pixelSizeJitter={0}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={false}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.5}
            edgeFade={0.25}
            transparent
          />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 animate-fade-in w-full max-w-4xl" style={{ marginBottom: '24px' }}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight text-center w-full">
            Partner with <span className="text-accent glow-text">SnowPropDeals</span>
          </h1>
          <p className="text-muted max-w-lg text-sm md:text-base text-center mx-auto">
            Feature your proprietary trading firm and submit an exclusive partnership deal proposal directly to our team.
          </p>
        </div>

        {/* Dual-Column Main Content */}
        <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Form (Shadcn Structure with Snow Brand Theme Colors) */}
            <div className="lg:col-span-7 min-w-0 w-full bg-[#131922] border border-[#B3D4FF]/10 rounded-[16px] shadow-[0_8px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-[#26B5FF]/20 transition-all duration-500">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl pointer-events-none group-hover:bg-accent/10 transition-colors duration-500"></div>

              <div className="flex flex-col flex-1 justify-between" style={{ padding: '32px' }}>

              {success ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-16 animate-fade-in">
                  <div className="w-16 h-16 bg-accent/10 border border-accent/20 rounded-full flex items-center justify-center text-accent mb-6 animate-pulse">
                    <CheckmarkCircle02Icon size={32} strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Proposal Submitted!</h3>
                  <p className="text-[#8B9BB4] text-sm max-w-sm mb-8">
                    Your partnership proposal has been sent directly to Snow. We will review the terms and get in touch with you shortly.
                  </p>
                  <button 
                    onClick={() => setSuccess(false)}
                    className="bg-[#26B5FF] hover:bg-[#26B5FF]/90 text-[#0D1117] px-8 py-3 rounded-lg text-xs font-black transition-all active:scale-[0.98] cursor-pointer border-none"
                  >
                    Submit Another Proposal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-2 mb-2">
                    <SparklesIcon className="text-accent animate-pulse" size={16} />
                    <span className="text-xs uppercase font-black tracking-widest text-accent">SUBMIT PARTNERSHIP PROPOSAL</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/90 mb-2.5">Prop Firm Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Atlas Futures"
                        value={formData.firmName}
                        onChange={(e) => setFormData({...formData, firmName: e.target.value})}
                        className="h-10 w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200"
                        style={{ paddingLeft: '10px', paddingRight: '20px' }}
                      />
                      <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">Your proprietary firm name.</p>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/90 mb-2.5">Official Website / Ref URL</label>
                      <input 
                        type="url" 
                        required
                        placeholder="e.g. https://atlasfutures.com"
                        value={formData.link}
                        onChange={(e) => setFormData({...formData, link: e.target.value})}
                        className="h-10 w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200"
                        style={{ paddingLeft: '10px', paddingRight: '20px' }}
                      />
                      <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">Landing page for affiliate referrals.</p>
                    </div>
                  </div>

                  <div className="flex flex-col w-1/2">
                    <label className="text-xs font-semibold text-white/90 mb-2.5">Exclusive Community Offer / Discount</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. 50% OFF Launch Promo"
                      value={formData.discount}
                      onChange={(e) => setFormData({...formData, discount: e.target.value})}
                      className="h-10 w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200"
                      style={{ paddingLeft: '10px', paddingRight: '20px' }}
                    />
                    <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">What exclusive perk does the Snow community receive?</p>
                  </div>

                  <div className="h-[1px] bg-[#B3D4FF]/10 my-1"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/90 mb-2.5">Proposed Commission Rate (%)</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. 15% on code usage"
                        value={formData.commission}
                        onChange={(e) => setFormData({...formData, commission: e.target.value})}
                        className="h-10 w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200"
                        style={{ paddingLeft: '10px', paddingRight: '20px' }}
                      />
                      <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">Proposed B2B commission structure.</p>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/90 mb-2.5">Proposed Retainer / Flat Fee ($)</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. $200 flat fee or N/A"
                        value={formData.retainer}
                        onChange={(e) => setFormData({...formData, retainer: e.target.value})}
                        className="h-10 w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200"
                        style={{ paddingLeft: '10px', paddingRight: '20px' }}
                      />
                      <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">Upfront marketing promotional retainer.</p>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label className="text-xs font-semibold text-white/90 mb-2.5">Expected Deliverables / Promotion Support</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="e.g. Quote tweet waitlist video, Discord announcement, and pushing waitlist."
                      value={formData.deliverables}
                      onChange={(e) => setFormData({...formData, deliverables: e.target.value})}
                      className="min-h-[80px] w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200 resize-none leading-relaxed"
                      style={{ paddingLeft: '10px', paddingRight: '20px', paddingTop: '12px', paddingBottom: '12px' }}
                    />
                    <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">Detail what promotional campaigns you expect from Snow.</p>
                  </div>

                  <div className="h-[1px] bg-[#B3D4FF]/10 my-1"></div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/90 mb-2.5">Your Business Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="e.g. partners@propfirm.com"
                        value={formData.contactEmail}
                        onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                        className="h-10 w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200"
                        style={{ paddingLeft: '10px', paddingRight: '20px' }}
                      />
                      <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">Primary B2B email contact.</p>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/90 mb-2.5">Telegram/Discord Handle</label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. @PipsCabal"
                        value={formData.contactTelegram}
                        onChange={(e) => setFormData({...formData, contactTelegram: e.target.value})}
                        className="h-10 w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200"
                        style={{ paddingLeft: '10px', paddingRight: '20px' }}
                      />
                      <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">Preferred direct contact channel.</p>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full mt-2 h-12 bg-accent hover:bg-accent/90 text-black font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(38,181,255,0.2)] border-none disabled:opacity-50 cursor-pointer"
                  >
                    {loading ? 'Verifying Proposal...' : (
                      <>
                        Submit Partnership Offer <ArrowRight01Icon size={18} strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </form>
              )}
              </div>
            </div>

            {/* Right Column: Socials Connect & Partnership Benefits */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Glow Connect Card */}
              <div className="bg-[#131922] border border-[#B3D4FF]/10 rounded-[24px] p-6 md:p-8 flex flex-col gap-6 shadow-2xl relative overflow-hidden group hover:border-[#26B5FF]/20 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
                
                <div>
                  <h3 className="text-xl font-black text-white mb-2">Connect Directly</h3>
                  <p className="text-muted text-xs leading-relaxed">
                    Prefer direct chat to hash out custom splits, retainer packages, or community perks? Reach out directly via our official accounts.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  {/* Discord */}
                  <a 
                    href="https://discord.gg/QHWsCk4SPe" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-4 bg-[#5865F2]/5 hover:bg-[#5865F2]/10 border border-[#5865F2]/15 hover:border-[#5865F2]/30 rounded-xl transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center text-[#5865F2]">
                        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .083-.026c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Join Discord</p>
                        <p className="text-[10px] text-white/40">Real-time support & community</p>
                      </div>
                    </div>
                    <ArrowRight01Icon size={16} className="text-white/30 group-hover/item:text-white transition-colors group-hover/item:translate-x-1 duration-300" />
                  </a>

                  {/* Twitter / X */}
                  <a 
                    href="https://x.com/snowxtrades" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Direct Message on X</p>
                        <p className="text-[10px] text-white/40">DM @snowxtrades</p>
                      </div>
                    </div>
                    <ArrowRight01Icon size={16} className="text-white/30 group-hover/item:text-white transition-colors group-hover/item:translate-x-1 duration-300" />
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:Tradersnow@icloud.com" 
                    className="flex items-center justify-between p-4 bg-accent/5 hover:bg-accent/10 border border-accent/15 hover:border-accent/30 rounded-xl transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                        <Mail01Icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">Send Partnership Email</p>
                        <p className="text-[10px] text-white/40">Tradersnow@icloud.com</p>
                      </div>
                    </div>
                    <ArrowRight01Icon size={16} className="text-white/30 group-hover/item:text-white transition-colors group-hover/item:translate-x-1 duration-300" />
                  </a>
                </div>
              </div>

              {/* Benefits Card */}
              <div className="bg-[#131922] border border-[#B3D4FF]/10 rounded-[24px] p-6 md:p-8 flex flex-col gap-4 shadow-2xl relative overflow-hidden group hover:border-[#26B5FF]/20 transition-all duration-500">
                <h3 className="text-lg font-black text-white">Why Feature with Us?</h3>
                <ul className="space-y-4 text-xs text-white/50">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span><strong>Highly Targeted Audience:</strong> Your prop firm is seen directly by active futures and prop traders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span><strong>Real-time Conversion Stats:</strong> Check your click and traffic stats anytime through our admin interface.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span><strong>Community Discord Pushes:</strong> Premium partners receive direct announcements in our trading community.</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

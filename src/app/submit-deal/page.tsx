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
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[50%] h-[30%] bg-accent/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

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

        <div className="relative z-10 flex flex-col items-center text-center px-4 animate-fade-in w-full max-w-4xl" style={{ marginBottom: '48px' }}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight text-center w-full">
            Partner with <span className="text-accent glow-text">SnowPropDeals</span>
          </h1>
          <p className="text-muted max-w-lg text-sm md:text-base text-center mx-auto">
            Feature your proprietary trading firm and submit an exclusive partnership deal proposal directly to our team.
          </p>
        </div>

        {/* Form Main Content */}
        <div
          style={{ marginBottom: success ? '228px' : '128px' }}
          className={`relative z-10 w-full mx-auto transition-all duration-500 ${success ? 'max-w-2xl px-6 md:px-8' : 'max-w-3xl px-6 md:px-12'}`}
        >

          {/* Form Card (Shadcn Structure with Snow Brand Theme Colors) */}
          <div className={`min-w-0 w-full flex flex-col bg-[#131922] border border-[#B3D4FF]/10 rounded-[16px] shadow-[0_8px_40px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:border-[#26B5FF]/20 transition-all duration-500 ${success ? 'min-h-[580px]' : 'min-h-[680px]'}`}>

            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl pointer-events-none group-hover:bg-accent/10 transition-colors duration-500"></div>

            <div className="flex flex-col flex-1 justify-between" style={{ padding: '32px' }}>

              {success ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center py-6 animate-fade-in relative">

                  {/* Unified Card Center Wrapper */}
                  <div className="flex flex-col items-center w-full max-w-md shrink-0">

                    {/* Header Group */}
                    <div className="flex flex-col items-center shrink-0" style={{ marginTop: '-24px', marginBottom: '40px' }}>
                      <h3 className="text-4xl font-black text-white tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        Proposal Submitted!
                      </h3>

                      <p className="text-[#8B9BB4] text-sm leading-relaxed">
                        Your partnership proposal has been secure-staged and sent directly to Snow B2B moderation. We will review your proposed deliverables and get in touch shortly.
                      </p>
                    </div>

                    {/* Clean Borderless Process Timeline */}
                    <div className="w-full text-left relative mb-0 shrink-0" style={{ paddingLeft: '36px' }}>
                      {/* Glowing vertical line track - stops exactly at center of third bullet (bottom-[60px]) */}
                      <div className="absolute top-2.5 bottom-[60px] w-[2px] bg-gradient-to-b from-accent via-accent/30 to-white/5" style={{ left: '12px' }}></div>

                      <div className="flex flex-col gap-10">
                        {/* Step 1 */}
                        <div className="relative flex flex-col gap-1">
                          <div className="absolute top-[5px] w-3.5 h-3.5 rounded-full bg-accent border-4 border-[#131922] shadow-[0_0_8px_rgba(38,181,255,0.8)] z-10" style={{ left: '-30px' }}></div>
                          <span className="text-base font-black text-white">Proposal Staged</span>
                          <span className="text-sm text-white/60">Offers stored securely in B2B queue.</span>
                        </div>

                        {/* Step 2 */}
                        <div className="relative flex flex-col gap-1">
                          <div className="absolute top-[5px] w-3.5 h-3.5 rounded-full bg-accent border-4 border-[#131922] animate-pulse z-10" style={{ left: '-30px' }}></div>
                          <span className="text-base font-black text-white flex items-center gap-2">
                            Moderation Review <span className="text-[10px] bg-accent/15 text-accent font-black tracking-wider px-2.5 py-0.5 rounded-sm border border-accent/25 uppercase">In Progress</span>
                          </span>
                          <span className="text-sm text-white/60">Snow admins evaluating deliverables and rates.</span>
                        </div>

                        {/* Step 3 */}
                        <div className="relative flex flex-col gap-1">
                          <div className="absolute top-[5px] w-3.5 h-3.5 rounded-full bg-white/10 border-4 border-[#131922] z-10" style={{ left: '-30px' }}></div>
                          <span className="text-base font-black text-white/30">Direct Contact</span>
                          <span className="text-sm text-white/25">Our partnerships manager will reach out via business email or handle.</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSuccess(false)}
                      style={{ marginTop: '48px' }}
                      className="w-full max-w-sm h-12 shrink-0 bg-accent hover:bg-accent/90 text-black font-black text-xs uppercase tracking-widest rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(38,181,255,0.2)] border-none cursor-pointer"
                    >
                      Submit Another Proposal <ArrowRight01Icon size={18} strokeWidth={2.5} />
                    </button>
                  </div>
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
                        placeholder="e.g. Futures Firm"
                        value={formData.firmName}
                        onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, discount: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, commission: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, retainer: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, deliverables: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                        className="h-10 w-full rounded-md border border-[#B3D4FF]/10 bg-[#0D1117] text-sm text-white placeholder-[#8B9BB4]/30 focus:border-[#26B5FF] focus:ring-1 focus:ring-[#26B5FF] outline-none transition-all duration-200"
                        style={{ paddingLeft: '10px', paddingRight: '20px' }}
                      />
                      <p className="text-[11px] text-[#8B9BB4]/60 mt-1.5 leading-normal">Primary B2B email contact.</p>
                    </div>

                    <div className="flex flex-col">
                      <label className="text-xs font-semibold text-white/90 mb-2.5">X/Discord Handle</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. @PipsCabal"
                        value={formData.contactTelegram}
                        onChange={(e) => setFormData({ ...formData, contactTelegram: e.target.value })}
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
        </div>
      </div>

      <Footer />
    </main>
  );
}

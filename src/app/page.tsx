import Image from 'next/image';
import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';
import { Shield01Icon, UserGroupIcon, GlobalIcon } from "hugeicons-react";
import BlueprintDealCard from '@/components/BlueprintDealCard';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const partners = [
  { name: 'Alpha Futures', logo: '/alphafutures-latest.svg' },
  { name: 'Next Gen', logo: '/nextgen-latest.svg' },
  { name: 'Redline', logo: '/redline.png', scale: 'scale-[1.4]' },
  { name: 'Tradeify', logo: '/tradeify-latest.svg' },
  { name: 'Trading Family', logo: '/tradingfamily.svg', scale: 'scale-[0.95]' },
  { name: 'Ylos', logo: '/ylos-latest.svg' },
  { name: 'YRM Prop', logo: '/yrmprop-latest.svg' }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-y-auto overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] min-h-[700px] flex flex-col items-center justify-center">
        <div 
          className="absolute inset-0 z-0 pointer-events-auto"
          style={{
            maskImage: 'radial-gradient(ellipse 90% 90% at 50% 45%, transparent 20%, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 50% 45%, transparent 20%, black 60%, transparent 100%)'
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

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-fade-in pointer-events-none mt-12 md:mt-0">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-fade-in leading-[1.1]">
            Strategic Discounts for the <br/>
            <span className="text-accent glow-text">Futures Market</span>
          </h1>
          <div className="h-12 md:h-4 w-full"></div>
          <h2 className="mb-4 text-xs md:text-sm font-light uppercase tracking-[0.3em] md:tracking-[0.5em] text-accent drop-shadow-[0_0_10px_var(--accent)]">
            SNW — Strategic Network of Wealth
          </h2>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light mt-4">
            Access elite proprietary trading firm discounts, real-time market insights, and a community built for serious traders.
          </p>
        </div>
      </div>

      <div className="h-12 w-full"></div>

      {/* Partner Logo Carousel */}
      <div className="w-full py-20 bg-background relative z-10 flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full max-w-4xl mx-auto px-6 mb-16">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/20"></div>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] md:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/40 text-center drop-shadow-sm">
            Trusted by top proprietary trading firms
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/20"></div>
        </div>
        
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-[1400px] overflow-hidden relative">
            <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--background) 0%, transparent 10%, transparent 90%, var(--background) 100%)' }}></div>
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              <div className="flex shrink-0 items-center">
                {partners.map((partner, i) => (
                  <div key={`set1-${i}`} className="flex items-center">
                    <div className="relative h-16 w-40 md:h-20 md:w-56 opacity-50 brightness-0 invert hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 cursor-pointer mx-8">
                      <Image 
                        src={partner.logo} 
                        alt={partner.name} 
                        fill 
                        priority
                        sizes="(max-width: 768px) 160px, 224px"
                        className={`object-contain transition-transform duration-300 ${partner.scale || ''}`}
                      />
                    </div>
                    <div className="w-[1px] h-10 bg-white/10 shrink-0 hidden md:block"></div>
                  </div>
                ))}
              </div>
              <div className="flex shrink-0 items-center">
                {partners.map((partner, i) => (
                  <div key={`set2-${i}`} className="flex items-center">
                    <div className="relative h-20 w-48 md:h-24 md:w-64 opacity-50 brightness-0 invert hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 cursor-pointer mx-10">
                      <Image 
                        src={partner.logo} 
                        alt={partner.name} 
                        fill 
                        priority
                        sizes="(max-width: 768px) 192px, 256px"
                        className={`object-contain transition-transform duration-300 ${partner.scale || ''}`}
                      />
                    </div>
                    <div className="w-[1px] h-10 bg-white/10 shrink-0 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blueprint Floor: Massive Section Separation */}
      <div className="w-full flex justify-center py-20 relative z-10">
        <div className="w-full max-w-[1200px] h-[1px] border-t border-dashed border-white/10"></div>
      </div>
      
      {/* Active Deals Section */}
      <section className="w-full flex justify-center px-4 md:px-8 pb-40 relative z-10">
        <div className="w-full max-w-[1200px] flex flex-col items-center">
          
          {/* LESSENED SPACING ABOVE HEADER */}
          <div className="h-15 w-full" aria-hidden="true"></div>

          <div className="flex flex-col items-center text-center gap-4 mb-32 relative w-full">
              <h2 className="text-3xl md:text-4xl font-black tracking-[0.2em] uppercase">
                <span className="text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)' }}>Active</span>
                <span className="ml-3 text-accent" style={{ textShadow: '0 0 15px rgba(0,183,255,0.5), 0 0 30px rgba(0,183,255,0.2)' }}>Deals</span>
              </h2>
              <div className="flex items-center gap-6 w-full max-w-[1200px] mt-2">
                <div className="flex-1 h-[1px] bg-gradient-to-l from-white/20 to-transparent"></div>
                <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">
                  Verified Prop Firm Discounts
                </p>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
          </div>
          
          {/* PHYSICAL SPACER BELOW DISCOUNTS LINE */}
          <div className="h-7 w-full" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative w-full">
            <BlueprintDealCard 
              firmName="Alpha Futures"
              discount="40%"
              logo="/alphafuturespfp.jpg"
              description="Alpha Futures is a simple and easy to use prop firm ~ Proudly Powered by SNW"
              expiresIn={212400}
              claimedCount={847}
              promoCode="SNOW"
              link="https://app.alpha-futures.com/signup/SNOW/"
              isHot={true}
              isFeatured={true}
            />
            <BlueprintDealCard 
              firmName="YRM Prop"
              discount="25%"
              logo="/yrmpfp.jpg"
              description="Join a global community of traders with YRM Prop's transparent funding models."
              expiresIn={259200}
              claimedCount={389}
              promoCode="SNOW"
              link="https://yrmprop.com/ref/snow"
              isFeatured={true}
            />
            <BlueprintDealCard 
              firmName="Tradeify"
              discount="30%"
              logo="/tradeifypfp.jpg"
              description="Tradeify offers elite futures trading challenges with instant payouts."
              expiresIn={262800}
              claimedCount={1240}
              promoCode="SNOW"
              link="https://tradeify.co/?ref=SNOWX"
              isHot={true}
              isFeatured={true}
            />
            <BlueprintDealCard 
              firmName="YLOS"
              discount="25%"
              logo="/ylospfp.jpg"
              description="Join a global community of traders with YLOS's transparent funding models."
              expiresIn={259200}
              claimedCount={389}
              promoCode="SNOW"
              link="https://www.ylostrading.com?affiliate=SNOW"
              isFeatured={false}
            />
            <BlueprintDealCard 
              firmName="NexGen"
              discount="35%"
              logo="/nexgenpfp.jpg"
              description="NexGen provides advanced trading tools and professional funding for elite traders."
              expiresIn={194400}
              claimedCount={612}
              promoCode="SNOW"
              link="https://nexgenprotraderfunding.com/?linkId=lp_263534&sourceId=snow&tenantId=protraderfunding"
              isFeatured={false}
            />
            <BlueprintDealCard 
              firmName="Redline"
              discount="20%"
              logo="/redlinepfp.jpg"
              description="Fast-track your trading career with Redline's industry-leading evaluation accounts."
              expiresIn={151200}
              claimedCount={423}
              promoCode="SNOW"
              link="https://www.redlinefuturesfunding.com/register?ref=SNOW"
              isFeatured={false}
            />
            <BlueprintDealCard 
              firmName="Funded Futures Family"
              discount="15%"
              logo="/fffpfp.jpg"
              description="Join the family with FFF's comprehensive trader funding and support ecosystem."
              expiresIn={432000}
              claimedCount={210}
              promoCode="SNOW"
              link="https://app.fundedfuturesfamily.com/affiliation/?ref_code=531e82e5-0f05-4e9f-8f3a-bb70bd6b7431"
              isHot={false}
              isFeatured={false}
            />
          </div>
        </div>
      </section>

      {/* LESSENED SPACING TO PREVENT OVERLAP */}
      <div className="h-20 w-full" aria-hidden="true"></div>

      {/* SECTION 03: PROTOCOL GUIDE */}
      <section className="relative py-20 bg-transparent flex flex-col items-center">
        <div className="max-w-[1300px] w-full mx-auto px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="text-3xl md:text-4xl font-black tracking-[0.2em] uppercase leading-none">
              <span className="text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)' }}>THE SNOW</span> <span className="text-accent" style={{ textShadow: '0 0 15px rgba(0,183,255,0.5), 0 0 30px rgba(0,183,255,0.2)' }}>PROTOCOL</span>
            </h2>
            <div className="h-4 w-full" aria-hidden="true"></div>
            <div className="flex items-center gap-6 w-full max-w-[1200px] mb-10 mx-auto">
              <div className="flex-1 h-[1px] bg-gradient-to-l from-white/20 to-transparent"></div>
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">
                PROTOCOL GUIDE
              </p>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
          </div>

          {/* PHYSICAL SPACING BELOW HEADER */}
          <div className="h-10 w-full" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1300px]">
            {[
              { step: "01", title: "SCAN DEALS", desc: "Browse our manually verified list of prop firm discounts and exclusive giveaways.", icon: Shield01Icon },
              { step: "02", title: "SECURE ACCESS", desc: "Use our unique codes or join the community to unlock private capital opportunities.", icon: UserGroupIcon },
              { step: "03", title: "SCALE CAPITAL", desc: "Execute your strategy with more leverage while saving on entry costs.", icon: GlobalIcon }
            ].map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center cursor-default p-8">
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-accent opacity-0 group-hover:opacity-100 transition-all duration-300 z-50"></div>

                <div className="relative z-10 flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-1">
                  <h4 className="text-2xl md:text-3xl font-black text-white mb-6 tracking-widest flex items-center transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(255,255,255,0.3),_0_0_20px_rgba(255,255,255,0.1)]">
                    <span className="text-accent text-sm md:text-lg font-bold tracking-[0.1em] mr-4 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:[text-shadow:0_0_15px_rgba(0,183,255,0.5),_0_0_30px_rgba(0,183,255,0.2)]">
                      /{item.step}
                    </span>
                    {item.title}
                  </h4>
                  <p className="text-base md:text-lg text-white/40 leading-relaxed font-medium max-w-[320px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFINED SPACING ABOVE FAQ */}
      <div className="h-20 w-full" aria-hidden="true"></div>

      {/* SECTION 04: FAQ SECTION (Two-Column Cards) */}
      <section id="faq" className="relative py-40 pb-80 bg-transparent flex flex-col items-center overflow-hidden">
        <div className="max-w-[1200px] w-full mx-auto px-6 flex flex-col items-center">
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 w-full items-start">
            {/* LEFT SIDE: TITLES */}
            <div className="lg:col-span-2 flex flex-col items-start text-left">
              <h2 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-8">
                <span className="text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)' }}>SYSTEM</span> <br/>
                <span className="text-accent" style={{ textShadow: '0 0 15px rgba(0,183,255,0.5), 0 0 30px rgba(0,183,255,0.2)' }}>FAQ</span>
              </h2>
              <p className="text-lg text-white/40 leading-relaxed font-medium max-w-sm italic">
                Can&apos;t find what you&apos;re looking for? <br/>
                Check out our documentation or contact support.
              </p>
            </div>

            {/* RIGHT SIDE: ACCORDION CARDS */}
            <div className="lg:col-span-3">
              <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                {[
                  { q: "What is a futures prop trading firm?", a: "A futures prop trading firm provides capital to traders who want to trade futures markets such as ES, NQ, CL, and other contracts. Instead of using your own capital, you trade a funded account provided by the firm. In return, you follow predefined risk rules and share a percentage of the profits." },
                  { q: "How do futures prop firm challenges work?", a: "Most futures prop firms require traders to complete an evaluation challenge. You must reach a profit target without breaching drawdown limits, daily loss limits, or consistency rules. If you pass, you receive a funded futures trading account. Some firms also offer instant funding models with no evaluation phase." },
                  { q: "What profit split do futures prop firms offer?", a: "Profit splits at futures prop firms typically range between 70% and 90% in the trader's favour. Some firms offer 100% on initial withdrawals before moving to a structured split. Always review payout frequency, withdrawal thresholds, and consistency rules alongside the headline percentage." },
                  { q: "How much does a futures prop firm challenge cost?", a: "The cost of a futures prop firm challenge varies depending on account size and structure. Evaluation fees can range from lower monthly subscriptions to higher one-time payments. Some firms also charge activation fees after passing. Using verified futures prop firm discount codes can reduce the initial cost." }
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10 mb-8 transition-all duration-500 overflow-hidden group">
                    <AccordionTrigger className="py-8 hover:no-underline text-xl font-bold transition-all duration-300">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/40 leading-relaxed pb-8 pt-6 text-lg">
                      <div className="animate-in fade-in slide-in-from-top-2 duration-500">
                        {faq.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

        </div>
      </section>
      {/* PHYSICAL SPACER ABOVE THE FOOTER LINE */}
      <div className="h-10 w-full" aria-hidden="true"></div>

      {/* EXPERT FOOTER */}
      <footer className="bg-background border-t border-white/[0.06] w-full pb-10 flex flex-col items-center overflow-hidden">
        {/* PHYSICAL SPACER BELOW THE TOP LINE */}
        <div className="h-10 w-full" aria-hidden="true"></div>
        
        <div className="max-w-[1200px] w-full mx-auto px-6 flex flex-col items-center">
          
          {/* MIDDLE ROW: BRAND & LINKS */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 w-full items-start mb-16 mt-10">
            
            {/* BRAND COLUMN */}
            <div className="lg:col-span-4 flex flex-col items-start gap-8">
              <div className="flex items-center gap-4 mt-10">
                <Image 
                  src="/snw.svg" 
                  alt="SNOW" 
                  width={60} 
                  height={60} 
                  priority
                  style={{ height: 'auto' }}
                  className="object-contain" 
                />
                <div className="flex items-center tracking-tight font-black text-2xl">
                  <span className="text-white" style={{ textShadow: '0 0 10px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.1)' }}>Snow</span>
                  <span className="text-secondary" style={{ textShadow: '0 0 15px rgba(179, 212, 255, 0.5), 0 0 30px rgba(179, 212, 255, 0.2)' }}>PropDeals</span>
                </div>
              </div>
              <p className="text-white/40 text-[15px] leading-relaxed pr-4">
                SnowPropDeals is the online platform that brings together verified prop firm data. Sign up now for free to take advantage of the benefits.
              </p>

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-6 mt-4 mb-8">
                {/* X */}
                <a 
                  href="https://x.com/snowxtrades" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/40 hover:text-white transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.733-8.835L1.254 2.25H8.08l4.259 5.631L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
                </a>
                {/* Discord */}
                <a 
                  href="https://discord.gg/QHWsCk4SPe" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/40 hover:text-[#5865F2] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(88,101,242,0.5)]"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .083-.026c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                </a>
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/snowxtrades" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/40 hover:text-[#E4405F] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(228,64,95,0.5)]"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@snowfx__" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-white/40 hover:text-[#00F2EA] transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(0,242,234,0.5)]"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93v7.2c0 1.96-.5 3.96-1.72 5.48-1.24 1.55-3.13 2.5-5.13 2.63-2.05.14-4.16-.36-5.78-1.58-1.6-1.2-2.63-3.1-2.84-5.06-.2-1.92.2-3.92 1.25-5.54 1.05-1.62 2.75-2.73 4.65-3.08 1.9-.34 3.9.06 5.53 1.05v4.22c-1.1-.64-2.4-.92-3.66-.75-1.25.17-2.38.8-3.14 1.77-.76.97-1.07 2.27-.86 3.5.21 1.22.95 2.32 1.95 2.97 1 .65 2.26.85 3.42.6 1.15-.25 2.14-1.03 2.68-2.07.54-1.04.66-2.26.33-3.37-.18-.6-.48-1.17-.88-1.65V.02z"/></svg>
                </a>
              </div>
            </div>

            {/* LINKS COLUMNS */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* EXPLORE */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold text-base">Explore</h4>
                <ul className="flex flex-col gap-5 text-white/40 text-[15px]">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#deals" className="hover:text-white transition-colors">Prop Deals</a></li>
                  <li><a href="#deals" className="hover:text-white transition-colors">Discount Codes</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Reviews</a></li>
                </ul>
              </div>

              {/* RESOURCES */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold text-base">Resources</h4>
                <ul className="flex flex-col gap-5 text-white/40 text-[15px]">
                  <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
                  <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Submit a Review</a></li>
                </ul>
              </div>

              {/* PARTNERS */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold text-base">Partners</h4>
                <ul className="flex flex-col gap-5 text-white/40 text-[15px]">
                  <li><a href="#" className="hover:text-white transition-colors">Become a partner</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Prop Firm Login</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">API Integration</a></li>
                </ul>
              </div>

              {/* COMPANY */}
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold text-base">Company</h4>
                <ul className="flex flex-col gap-5 text-white/40 text-[15px]">
                  <li><a href="#" className="hover:text-white transition-colors">About SnowPropDeals</a></li>
                  <li><a href="mailto:Tradersnow@icloud.com" className="hover:text-white transition-colors">Contact Us</a></li>
                  <li><a href="https://discord.gg/QHWsCk4SPe" className="hover:text-white transition-colors">Discord Community</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* PHYSICAL SPACER ABOVE THE LINE */}
          <div className="h-10 w-full" aria-hidden="true"></div>

          {/* DISCLOSURE SECTION */}
          <div className="w-full flex flex-col gap-10 pb-12 border-t border-white/[0.06] mb-12">
            {/* PHYSICAL SPACER BELOW THE LINE */}
            <div className="h-1 w-full" aria-hidden="true"></div>
            
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-[15px]">Affiliate Disclosure</h4>
              <p className="text-white/50 text-[13px] leading-relaxed">
                SnowPropDeals is an independent comparison and review platform. We may receive compensation from the proprietary trading firms featured on this website when you click on links and/or purchase evaluation accounts using our promotional codes. This compensation may impact how and where products appear on this site. All reviews and comparisons are based on our honest analysis and user feedback.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-bold text-[15px]">Risk Disclaimer</h4>
              <p className="text-white/50 text-[13px] leading-relaxed">
                Trading futures, forex, and options involves substantial risk of loss and is not suitable for all investors. You should carefully consider whether trading is suitable for you in light of your circumstances, knowledge, and financial resources. You may lose all or more of your initial investment. Past performance is not indicative of future results. The information provided is for educational purposes only and should not be considered investment advice. Always conduct your own research before choosing a prop firm.
              </p>
            </div>
          </div>

          {/* PHYSICAL SPACER ABOVE COPYRIGHT */}
          <div className="h-10 w-full" aria-hidden="true"></div>

          {/* BOTTOM STRIP */}
          <div className="w-full flex flex-col items-center justify-center text-white/40 text-xs text-center">
            <p>&copy; {new Date().getFullYear()} SnowPropDeals. All rights reserved.</p>
          </div>

          {/* PHYSICAL SPACER BELOW COPYRIGHT */}
          <div className="h-10 w-full" aria-hidden="true"></div>

        </div>
      </footer>
    </main>
  );
}

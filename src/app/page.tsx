import Image from 'next/image';
import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';
import { 
  Shield01Icon,
  UserGroupIcon,
  GlobalIcon
} from "hugeicons-react";
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

          {/* PHYSICAL SPACING BELOW HEADER */}
          <div className="h-3 w-full" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative w-full">
            <BlueprintDealCard 
              firmName="Alpha Futures"
              discount="40%"
              logo="/alphafuturespfp.jpg"
              description="Alpha Futures is a simple and easy to use prop firm ~ Proudly Powered by SNW"
              expiresIn={212400}
              claimedCount={847}
              promoCode="SNOW"
              link="https://alpha-futures.com/"
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
              link="https://yrmprop.com/"
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
              link="https://tradeify.co/"
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
              link="https://yrmprop.com/"
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
              link="https://nexgenprotraderfunding.com/"
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
              link="https://www.redlinefuturesfunding.com/"
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
              link="https://www.fundedfuturesfamily.com/"
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
                STRATEGIC EXECUTION FLOW
              </p>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
            </div>
          </div>

          {/* PHYSICAL SPACING BELOW HEADER */}
          <div className="h-17 w-full" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1300px]">
            {[
              { step: "01", title: "SCAN DEALS", desc: "Browse our manually verified list of prop firm discounts and exclusive giveaways.", icon: Shield01Icon },
              { step: "02", title: "SECURE ACCESS", desc: "Use our unique codes or join the community to unlock private capital opportunities.", icon: UserGroupIcon },
              { step: "03", title: "SCALE CAPITAL", desc: "Execute your strategy with more leverage while saving on entry costs.", icon: GlobalIcon }
            ].map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center cursor-default p-8">
                {/* Solid Corner Markers (Appear on Hover) */}
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
                  { q: "What is SNOW and how does it benefit traders?", a: "SNOW is a curated ecosystem providing verified prop firm discounts, exclusive community giveaways, and institutional-grade trading tools." },
                  { q: "How are the prop firm discounts verified?", a: "Every partner firm goes through a rigorous vetting process. We verify payout history, support response times, and trading conditions." },
                  { q: "Can I get a custom deal for my community?", a: "Yes. Large communities or professional trading floors can contact our Discord support for custom tier-1 partnership opportunities." },
                  { q: "What is the Alpha Network?", a: "The Alpha Network is our private Discord environment where members get instant notifications for flash sales and private giveaways." }
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

      {/* MASSIVE SPACING BEFORE FOOTER */}
      <div className="h-60 w-full" aria-hidden="true"></div>

      {/* FOOTER */}
      <footer className="relative pt-60 pb-12 bg-background border-t border-white/5 flex justify-center w-full">
        <div className="max-w-[1200px] w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 mb-24 w-full">
            {/* BRAND SECTION */}
            <div className="flex flex-col items-start gap-6">
              <h3 className="text-3xl font-black text-white italic tracking-tighter">SNOW</h3>
              <p className="text-white/40 text-sm leading-relaxed max-w-[240px]">
                The industry standard for verified prop firm data. Helping traders scale through precision.
              </p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 transition-all group">
                  <UserGroupIcon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/40 transition-all group">
                  <GlobalIcon size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* NAVIGATION COLUMNS */}
            <div className="flex flex-col gap-6 md:items-center">
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Ecosystem</h4>
                <ul className="flex flex-col gap-4 text-white/40 text-sm font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Prop Deals</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Alpha Network</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Giveaways</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:items-center">
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Support</h4>
                <ul className="flex flex-col gap-4 text-white/40 text-sm font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Discord Help</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:items-end">
              <div className="flex flex-col gap-6">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px]">Legal</h4>
                <ul className="flex flex-col gap-4 text-white/40 text-sm font-medium">
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Risk Disclosure</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* BOTTOM STRIP */}
          <div className="pt-12 border-t border-white/5 flex flex-col items-center text-center">
            <p className="text-white/20 text-xs font-bold tracking-[0.2em] uppercase">
              &copy; {new Date().getFullYear()} SNOW PROTOCOL. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

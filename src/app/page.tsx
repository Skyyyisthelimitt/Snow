import Image from 'next/image';
import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';
import { 
  Shield01Icon,
  UserGroupIcon,
  GlobalIcon
} from "hugeicons-react";
import BlueprintDealCard from '@/components/BlueprintDealCard';

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
                <span className="text-white/90">Active</span>
                <span className="ml-3 text-accent drop-shadow-[0_0_10px_rgba(var(--accent-rgb),0.4)]">Deals</span>
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
              firmName="Funded Futures Family"
              discount="15%"
              logo="/tradingfamily.svg"
              description="Join the family with FFF's comprehensive trader funding and support ecosystem."
              expiresIn={432000}
              claimedCount={210}
              promoCode="SNOW"
              link="https://www.fundedfuturesfamily.com/"
              isHot={false}
              isFeatured={true}
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
              firmName="YRM Prop"
              discount="25%"
              logo="/yrmpfp.jpg"
              description="Join a global community of traders with YRM Prop's transparent funding models."
              expiresIn={259200}
              claimedCount={389}
              promoCode="SNOW"
              link="https://yrmprop.com/"
              isFeatured={false}
            />
          </div>
        </div>
      </section>

      {/* LESSENED SPACING TO PREVENT OVERLAP */}
      <div className="h-20 w-full" aria-hidden="true"></div>

      {/* SECTION 03: PROTOCOL GUIDE */}
      <section className="relative py-20 bg-transparent flex flex-col items-center">
        <div className="max-w-[1400px] w-full mx-auto px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center w-full">
            <h2 className="text-3xl md:text-4xl font-black tracking-[0.2em] uppercase leading-none">
              THE SNOW <span className="text-accent">PROTOCOL</span>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full max-w-[1200px]">
            {[
              { step: "01", title: "SCAN DEALS", desc: "Browse our manually verified list of prop firm discounts and exclusive giveaways.", icon: Shield01Icon },
              { step: "02", title: "SECURE ACCESS", desc: "Use our unique codes or join the community to unlock private capital opportunities.", icon: UserGroupIcon },
              { step: "03", title: "SCALE CAPITAL", desc: "Execute your strategy with more leverage while saving on entry costs.", icon: GlobalIcon }
            ].map((item, idx) => (
              <div key={idx} className="group relative flex flex-col items-center text-center">
                <div className="absolute -top-12 text-8xl font-black text-white/[0.05] italic tracking-tighter select-none">{item.step}</div>
                <div className="relative z-10 pt-8 flex flex-col items-center">
                  <h4 className="text-xl font-bold text-white mb-4 tracking-widest">{item.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-medium max-w-[280px]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLEAN SPACING ABOVE FAQ */}
      <div className="h-14 w-full" aria-hidden="true"></div>

      {/* SECTION 04: TERMINAL FAQ */}
      <section className="relative py-40 bg-transparent flex flex-col items-center">
        <div className="max-w-[800px] w-full mx-auto px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic">SYSTEM FAQ</h2>
            <div className="w-12 h-[2px] bg-accent/30 mt-6 mx-auto"></div>
          </div>

          <div className="space-y-6 w-full">
            {[
              { q: "Is SNOW free to use?", a: "Yes. Our platform and basic Discord access are 100% free for all traders." },
              { q: "How often are deals updated?", a: "Our team manually verifies and updates the deal terminal every 24 hours." },
              { q: "How do I join the giveaways?", a: "Most giveaways are hosted in our Discord. Join using the banner below to enter." },
              { q: "Are the prop firms verified?", a: "We only partner with established, reputable prop firms with proven payout histories." }
            ].map((faq, idx) => (
              <div key={idx} className="group relative bg-white/[0.02] border border-white/5 p-8 rounded-2xl hover:bg-white/[0.04] transition-all duration-300">
                <h5 className="text-white/80 font-bold mb-3 flex items-center gap-4">
                  <span className="text-accent/50 text-[10px] font-mono">[{idx + 1}]</span> {faq.q}
                </h5>
                <p className="text-[15px] text-white/30 pl-10 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05: DISCORD CTA BANNER */}
      <section className="relative py-40 px-6 overflow-hidden flex flex-col items-center">
        <div className="max-w-[1400px] w-full mx-auto">
          <div className="relative bg-accent rounded-[2.5rem] p-12 md:p-24 overflow-hidden group shadow-[0_0_50px_rgba(var(--accent-rgb),0.15)]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
              <div className="text-left max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-black text-black tracking-tighter leading-[0.9] mb-8 italic uppercase">
                  JOIN THE <br /> ALPHA NETWORK
                </h2>
                <p className="text-black/60 text-xl font-bold mb-10 leading-relaxed max-w-lg">
                  Get instant notifications for flash sales, exclusive community giveaways, and 24/7 support.
                </p>
                <button className="bg-black text-accent px-12 py-6 rounded-full font-black text-xl hover:scale-105 hover:bg-[#111] active:scale-95 transition-all duration-300 flex items-center gap-4 uppercase italic shadow-2xl">
                  Connect to Discord <Shield01Icon size={24} />
                </button>
              </div>
              <div className="relative hidden lg:block">
                <div className="w-96 h-96 rounded-full border-[24px] border-black/5 flex items-center justify-center animate-spin-slow">
                  <UserGroupIcon size={140} className="text-black/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-black rounded-[2rem] rotate-12 flex items-center justify-center shadow-2xl group-hover:rotate-0 transition-transform duration-700">
                    <Shield01Icon size={80} className="text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-32 bg-[#020203] border-t border-white/5 flex flex-col items-center">
        <div className="max-w-[1400px] w-full mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-3xl font-black text-white italic tracking-tighter mb-8">SNOW</h3>
              <p className="text-white/30 text-[15px] max-w-md leading-relaxed mb-10">
                The industry standard for verified prop firm data. Helping traders scale through precision and community-driven alpha.
              </p>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/40 transition-all cursor-pointer group"><UserGroupIcon size={24} className="group-hover:scale-110 transition-transform" /></div>
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-accent hover:border-accent/40 transition-all cursor-pointer group"><GlobalIcon size={24} className="group-hover:scale-110 transition-transform" /></div>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mb-10">Navigation</h4>
              <ul className="space-y-5 text-sm font-bold text-white/40">
                <li className="hover:text-accent transition-colors cursor-pointer">Prop Deals</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Giveaways</li>
                <li className="hover:text-accent transition-colors cursor-pointer">Protocol</li>
                <li className="hover:text-accent transition-colors cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] mb-10">Terminal Status</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[11px] font-mono text-green-500/80">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  SYSTEMS_OPERATIONAL
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-white/20">
                  <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                  NETWORK_LOAD: 12.4%
                </div>
                <div className="flex items-center gap-3 text-[11px] font-mono text-white/20">
                  <div className="w-2 h-2 bg-white/20 rounded-full"></div>
                  REGION: GLOBAL_HUB
                </div>
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
            <p className="text-[10px] font-mono text-white/10 uppercase tracking-[0.3em]">© 2024 SNOW_DATA_SYSTEMS // ALL_RIGHTS_RESERVED</p>
            <div className="flex gap-10 text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
              <span className="hover:text-white transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Spacer for Scrolling */}
      <div className="h-[400px] w-full invisible"></div>
    </main>
  );
}

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';
import DealCard from '@/components/DealCard';
import BlueprintDealCard from '@/components/BlueprintDealCard';
import MinimalDealCard from '@/components/MinimalDealCard';

const partners = [
  { name: 'Alpha Futures', logo: '/alphafutures-latest.svg' },
  { name: 'Next Gen', logo: '/nextgen-latest.svg' },
  { name: 'Redline', logo: '/redline.png', scale: 'scale-[1.4]' },
  { name: 'Tradeify', logo: '/tradeify-latest.svg' },
  { name: 'Trading Family', logo: '/tradingfamily.svg', scale: 'scale-[0.95]' },
  { name: 'Ylos', logo: '/ylos-latest.svg' },
  { name: 'YRM Prop', logo: '/yrmprop-latest.svg' }
];

const deals = [
  {
    firmName: 'Alpha Futures',
    discount: '40%',
    logo: '/alphafutures-latest.svg',
    tagline: 'Get 1 FREE account on payout',
    expiresIn: 212400, // 59 hours
    claimedCount: 1140,
    promoCode: 'SNW',
    link: '#',
    isHot: true
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-y-auto overflow-x-hidden pb-[800px]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[85vh] min-h-[700px] flex flex-col items-center justify-center">
        
        {/* Interactive Pixel Blast Background */}
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
            color="#B3D4FF" // Matched to your Snow Deals secondary icy blue color
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

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 animate-fade-in pointer-events-none mt-12 md:mt-0">
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-fade-in leading-[1.1]">
            Strategic Discounts for the <br/>
            <span className="text-accent glow-text">Futures Market</span>
          </h1>
          
          {/* Massive Explicit Spacer to push SNW down */}
          <div className="h-12 md:h-4 w-full"></div>

          {/* Cinematic Sub-Title */}
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
        
        {/* Enhanced Section Label */}
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full max-w-4xl mx-auto px-6 mb-16">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/20"></div>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] md:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/40 text-center drop-shadow-sm">
            Trusted by top proprietary trading firms
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/20"></div>
        </div>
        
        {/* Carousel Container */}
        <div className="w-full flex justify-center px-4">
          <div className="w-full max-w-[1400px] overflow-hidden relative">
            {/* Fading Edges */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--background) 0%, transparent 10%, transparent 90%, var(--background) 100%)' }}></div>
          
          {/* Scrolling Track */}
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {/* First Set */}
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
                  {/* Subtle vertical separator */}
                  <div className="w-[1px] h-10 bg-white/10 shrink-0 hidden md:block"></div>
                </div>
              ))}
            </div>
            {/* Duplicate Set for Seamless Loop */}
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
                  {/* Subtle vertical separator */}
                  <div className="w-[1px] h-10 bg-white/10 shrink-0 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>

      {/* Blueprint Floor: Massive Section Separation */}
      <div className="w-full flex justify-center py-40 relative z-10">
        <div className="w-full max-w-[1200px] h-[1px] border-t border-dashed border-white/10"></div>
      </div>
      
      <div className="h-24 w-full"></div>

      {/* Active Deals Section */}
      <section className="w-full flex justify-center px-4 md:px-8 pb-24 relative z-10">
        <div className="w-full max-w-[1200px] flex flex-col">
          
          {/* Elegant Section Header - Refined & Balanced */}
          <div className="flex flex-col items-center text-center gap-4 mb-24 relative">
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-black tracking-[0.2em] uppercase">
                  <span className="text-white/90">Active</span>
                  <span className="ml-3 text-accent drop-shadow-[0_0_10px_rgba(var(--accent-rgb),0.4)]">Deals</span>
                </h2>
              </div>

              {/* Minimal Section Sub-label - Aligned to Grid Edges */}
              <div className="flex items-center gap-6 w-full max-w-[1200px] mt-2">
                <div className="flex-1 h-[1px] bg-gradient-to-l from-white/20 to-transparent"></div>
                <p className="text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] whitespace-nowrap">
                  Verified Prop Firm Discounts
                </p>
                <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent"></div>
              </div>
          </div>

          {/* FORCE SPACE BLOCK */}
          <div className="block h-4 w-full" aria-hidden="true"></div>

          {/* Deals Grid - Elite Unified Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
            
            <BlueprintDealCard 
              firmName="Alpha Futures"
              discount="40%"
              logo="/alphafuturespfp.jpg"
              description="Alpha Futures is a simple and easy to use prop firm ~ Proudly Powered by SNW"
              expiresIn={212400}
              claimedCount={847}
              promoCode="SNOW"
              link="#"
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
              link="#"
              isHot={true}
              isFeatured={true}
            />

            <BlueprintDealCard 
              firmName="Ylos"
              discount="15%"
              logo="/ylospfp.jpg"
              description="Experience seamless trading with Ylos evaluation accounts."
              expiresIn={432000}
              claimedCount={210}
              promoCode="SNOW"
              link="#"
              isHot={false}
              isFeatured={true}
            />
          </div>
        </div>
      </section>

      {/* Massive Footer Spacer for visibility */}
      <div className="h-[600px] w-full invisible"></div>

    </main>
  );
}

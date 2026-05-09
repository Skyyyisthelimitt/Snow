import Image from 'next/image';
import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';

const partners = [
  { name: 'Alpha Futures', logo: '/alphafutures.svg', scale: 'scale-[1.4]' },
  { name: 'Next Gen', logo: '/nextgen.png' },
  { name: 'Redline', logo: '/redline.png', scale: 'scale-[1.4]' },
  { name: 'Tradeify', logo: '/tradeify.svg' },
  { name: 'Trading Family', logo: '/tradingfamily.svg' },
  { name: 'Ylos', logo: '/ylos.webp' }
];

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative w-full h-[75vh] min-h-[600px] flex flex-col items-center justify-center">
        
        {/* Interactive Pixel Blast Background */}
        <div className="absolute inset-0 z-0 pointer-events-auto [mask-image:linear-gradient(to_bottom,white_60%,transparent_100%)]">
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

        {/* Hero Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mt-16 max-w-5xl mx-auto pointer-events-none">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight animate-fade-in leading-[1.1]">
            Strategic Discounts for the <br/>
            <span className="text-accent glow-text">Futures Market</span>
          </h1>
        </div>

      </div>

      {/* Partner Logo Carousel */}
      <div className="w-full pt-32 pb-20 bg-background relative z-10 flex flex-col items-center">
        
        {/* Enhanced Section Label */}
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full max-w-4xl mx-auto px-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/10 to-white/20"></div>
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] md:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/40 text-center drop-shadow-sm">
            Trusted by top proprietary trading firms
          </p>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/10 to-white/20"></div>
        </div>

        {/* Massive Explicit Spacer */}
        <div className="h-16 md:h-11 w-full"></div>
        
        {/* Carousel Container */}
        <div className="w-full max-w-6xl mx-auto overflow-hidden relative">
          {/* Fading Edges */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)' }}></div>
          
          {/* Scrolling Track */}
          <div className="flex w-[200%] animate-marquee">
            {/* First Set */}
            <div className="flex w-1/2 justify-around items-center">
              {partners.map((partner, i) => (
                <div key={`set1-${i}`} className="flex items-center">
                  <div className="relative h-12 w-32 md:h-14 md:w-44 opacity-50 brightness-0 invert hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 cursor-pointer mx-8">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      fill 
                      sizes="(max-width: 768px) 128px, 176px"
                      className={`object-contain transition-transform duration-300 ${partner.scale || ''}`}
                    />
                  </div>
                  {/* Subtle vertical separator */}
                  <div className="w-[1px] h-8 bg-white/10 shrink-0 hidden md:block"></div>
                </div>
              ))}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex w-1/2 justify-around items-center">
              {partners.map((partner, i) => (
                <div key={`set2-${i}`} className="flex items-center">
                  <div className="relative h-12 w-32 md:h-14 md:w-44 opacity-50 brightness-0 invert hover:brightness-100 hover:invert-0 hover:opacity-100 transition-all duration-300 cursor-pointer mx-8">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name} 
                      fill 
                      sizes="(max-width: 768px) 128px, 176px"
                      className={`object-contain transition-transform duration-300 ${partner.scale || ''}`}
                    />
                  </div>
                  {/* Subtle vertical separator */}
                  <div className="w-[1px] h-8 bg-white/10 shrink-0 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

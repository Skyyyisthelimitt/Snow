import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';

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
      <div className="w-full py-10 border-t border-white/5 bg-background relative z-10 flex flex-col items-center">
        <p className="text-sm font-medium text-muted uppercase tracking-[0.2em] mb-8 text-center">
          Trusted by top proprietary trading firms
        </p>
        
        {/* Carousel Container */}
        <div className="w-full max-w-6xl mx-auto overflow-hidden relative">
          {/* Fading Edges */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, var(--background) 0%, transparent 15%, transparent 85%, var(--background) 100%)' }}></div>
          
          {/* Scrolling Track */}
          <div className="flex w-[200%] animate-marquee">
            {/* First Set */}
            <div className="flex w-1/2 justify-around items-center">
              {['Apex Trader Funding', 'Tradeify', 'Topstep', 'MyFundedFutures', 'Bulenox'].map((partner, i) => (
                <div key={`set1-${i}`} className="text-2xl md:text-3xl font-bold text-white opacity-40 hover:opacity-100 transition-opacity cursor-default px-8 whitespace-nowrap">
                  {partner}
                </div>
              ))}
            </div>
            {/* Duplicate Set for Seamless Loop */}
            <div className="flex w-1/2 justify-around items-center">
              {['Apex Trader Funding', 'Tradeify', 'Topstep', 'MyFundedFutures', 'Bulenox'].map((partner, i) => (
                <div key={`set2-${i}`} className="text-2xl md:text-3xl font-bold text-white opacity-40 hover:opacity-100 transition-opacity cursor-default px-8 whitespace-nowrap">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}

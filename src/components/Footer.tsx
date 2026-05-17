import Image from 'next/image';

export default function Footer() {
  return (
    <>
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
    </>
  );
}

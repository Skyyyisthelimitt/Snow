/* eslint-disable @next/next/no-img-element */
'use client';

import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';
import Footer from '@/components/Footer';
import GiveawayCard from '@/components/GiveawayCard';
import TrackVisit from '@/components/TrackVisit';
import React, { useState, useEffect } from 'react';

export default function GiveawaysPage() {
  const [giveaways, setGiveaways] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGiveaways() {
      try {
        const response = await fetch('/api/giveaways', { cache: 'no-store' });
        const data = await response.json();
        if (Array.isArray(data)) {
          setGiveaways(data.filter((g: any) => g.status === 'Active'));
        }
      } catch (error) {
        console.error('Failed to fetch giveaways:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchGiveaways();
  }, []);  return (
    <main className="min-h-screen bg-background relative overflow-y-auto overflow-x-hidden flex flex-col">
      <TrackVisit />
      <Navbar />
      
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <div className="relative w-full min-h-screen flex flex-col items-center justify-start" style={{ paddingTop: '100px' }}>
        {/* PixelBlast Background */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-auto"
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

        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/20 to-background z-0 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 animate-fade-in w-full max-w-5xl pointer-events-none" style={{ marginBottom: '40px' }}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight text-center w-full">
            Active <span className="text-accent glow-text">Giveaways</span>
          </h1>
          <p className="text-muted max-w-xl text-sm md:text-base text-center mx-auto pointer-events-auto">
            We partner with the world&apos;s best prop firms to give away free funded accounts every week.
          </p>
        </div>

        {/* Giveaway Cards Grid */}
        <div className="relative z-10 w-full px-6 md:px-12 pointer-events-auto animate-fade-in mb-32 flex justify-center">
          <div className="w-full max-w-7xl flex flex-wrap justify-start items-start gap-8">
            {loading ? (
              <div className="w-full text-center py-20 text-white/50 text-lg">Loading active giveaways...</div>
            ) : giveaways.length === 0 ? (
              <div className="w-full text-center py-20 text-white/50 text-lg">No active giveaways at the moment. Check back later!</div>
            ) : (
              giveaways.map((ga: any) => (
                <div key={ga.id} className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-md">
                  <GiveawayCard tweetId={ga.tweetId} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
}

/* eslint-disable @next/next/no-img-element */
'use client';

import Navbar from '@/components/Navbar';
import PixelBlast from '@/components/PixelBlast';
import Footer from '@/components/Footer';
import React from 'react';

export default function GiveawaysPage() {

  return (
    <main className="min-h-screen bg-background relative overflow-y-auto overflow-x-hidden flex flex-col">
      <Navbar />
      
      {/* Background Glow */}
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      {/* Hero Section */}
      <div className="relative w-full h-[85vh] min-h-[700px] flex flex-col items-center justify-center">
        {/* PixelBlast Background */}
        <div className="absolute top-0 left-0 w-full h-[85vh] min-h-[700px] z-0 pointer-events-auto"
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

        {/* Main Content Wrapper */}
        {/* 
          POSITIONING GUIDE:
          Change "top-32" below to move it up or down.
          "top-16" -> Extremely high (touches navbar)
          "top-32" -> Very high
          "top-48" -> Middle-high
          "top-[30%]" -> Uses percentages
        */}
        <div className="absolute top-28 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-center px-4 animate-fade-in w-full max-w-5xl pointer-events-none">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tighter leading-tight text-center w-full">
            Active <span className="text-accent glow-text">Giveaways</span>
          </h1>
          <p className="text-muted max-w-xl text-sm md:text-base text-center mx-auto pointer-events-auto">
            We partner with the world&apos;s best prop firms to give away free funded accounts every week.
          </p>
        </div>
      </div>

      <div className="flex-1" aria-hidden="true"></div>
      
      <Footer />
    </main>
  );
}

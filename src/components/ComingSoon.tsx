'use client';

import React, { useState, useEffect } from 'react';
import PixelBlast from '@/components/PixelBlast';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

export default function ComingSoon() {
  const launchDate = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE!);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(launchDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const units = [
    { label: 'DAYS', value: timeLeft.days },
    { label: 'HOURS', value: timeLeft.hours },
    { label: 'MINUTES', value: timeLeft.minutes },
    { label: 'SECONDS', value: timeLeft.seconds },
  ];

  return (
    <main
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
      style={{ fontFamily: 'var(--font-outfit), sans-serif' }}
    >
      {/* PixelBlast Background — same config as homepage hero */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          maskImage:
            'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 10%, black 55%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 110% 100% at 50% 50%, transparent 10%, black 55%, transparent 100%)',
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

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 gap-10"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '100px',
            border: '1px solid rgba(38,181,255,0.25)',
            background: 'rgba(38,181,255,0.07)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: '#26B5FF',
              boxShadow: '0 0 8px #26B5FF',
              animation: 'pulse-dot 2s ease-in-out infinite',
            }}
          />
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
            }}
          >
            SNW — Launching Soon
          </span>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#fff',
              textShadow: '0 0 40px rgba(255,255,255,0.08)',
            }}
          >
            Strategic Network
            <br />
            <span
              style={{
                color: 'var(--accent)',
                textShadow: '0 0 30px rgba(38,181,255,0.45), 0 0 60px rgba(38,181,255,0.15)',
              }}
            >
              of Wealth
            </span>
          </h1>
          <p
            style={{
              marginTop: 12,
              fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
              color: 'rgba(179,212,255,0.55)',
              fontWeight: 400,
              maxWidth: 480,
              lineHeight: 1.7,
              letterSpacing: '0.01em',
            }}
          >
            Elite prop firm discounts, real-time market insights, and a community built for serious traders.
          </p>
        </div>

        {/* Divider */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            width: '100%',
            maxWidth: 560,
          }}
        >
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.12))' }} />
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.35em', color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase' }}>
            Launching In
          </span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.12))' }} />
        </div>

        {/* Countdown */}
        <div
          style={{
            display: 'flex',
            gap: 'clamp(12px, 3vw, 28px)',
            alignItems: 'flex-start',
          }}
        >
          {units.map((unit, i) => (
            <React.Fragment key={unit.label}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                {/* Digit block */}
                <div
                  style={{
                    position: 'relative',
                    width: 'clamp(72px, 14vw, 120px)',
                    height: 'clamp(80px, 15vw, 132px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(13,17,23,0.85)',
                    border: '1px solid rgba(38,181,255,0.18)',
                    borderRadius: 12,
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 0 0 1px rgba(255,255,255,0.04) inset, 0 8px 40px rgba(0,0,0,0.4)',
                  }}
                >
                  {/* Top shine line */}
                  <div style={{
                    position: 'absolute',
                    top: 0, left: '15%', right: '15%', height: 1,
                    background: 'linear-gradient(to right, transparent, rgba(179,212,255,0.18), transparent)',
                    borderRadius: 1,
                  }} />
                  {/* Center separator */}
                  <div style={{
                    position: 'absolute',
                    top: '50%', left: 0, right: 0, height: 1,
                    background: 'rgba(255,255,255,0.04)',
                    transform: 'translateY(-50%)',
                  }} />
                  <span
                    style={{
                      fontSize: 'clamp(2rem, 6vw, 4rem)',
                      fontWeight: 800,
                      fontVariantNumeric: 'tabular-nums',
                      letterSpacing: '-0.04em',
                      color: '#fff',
                      textShadow: '0 0 20px rgba(38,181,255,0.3)',
                      fontFamily: 'var(--font-outfit), monospace',
                    }}
                  >
                    {pad(unit.value)}
                  </span>
                  {/* Bottom glow */}
                  <div style={{
                    position: 'absolute',
                    bottom: -1, left: '20%', right: '20%', height: 2,
                    background: 'linear-gradient(to right, transparent, rgba(38,181,255,0.35), transparent)',
                    borderRadius: 2,
                  }} />
                </div>

                {/* Label */}
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: 'rgba(179,212,255,0.75)',
                    background: 'rgba(13,17,23,0.75)',
                    backdropFilter: 'blur(8px)',
                    padding: '4px 10px',
                    borderRadius: 6,
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  {unit.label}
                </span>
              </div>

              {/* Colon separator between units (not after last) */}
              {i < units.length - 1 && (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(12px, 3vw, 22px)',
                    paddingTop: 'clamp(24px, 4vw, 40px)',
                    opacity: 0.4,
                  }}
                >
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'block', boxShadow: '0 0 6px var(--accent)' }} />
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'block', boxShadow: '0 0 6px var(--accent)' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.2)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginTop: 8,
          }}
        >
          © 2026 SNW &nbsp;·&nbsp; Strategic Network of Wealth
        </p>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #26B5FF; }
          50% { opacity: 0.5; box-shadow: 0 0 3px #26B5FF; }
        }
      `}</style>
    </main>
  );
}

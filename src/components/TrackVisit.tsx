'use client';

import { useEffect } from 'react';

export default function TrackVisit() {
  useEffect(() => {
    const track = async () => {
      try {
        await fetch('/api/track', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'PAGE_VISIT', firm: 'N/A', code: 'N/A' })
        });
      } catch {
        // Silent fail
      }
    };
    track();
  }, []);

  return null;
}

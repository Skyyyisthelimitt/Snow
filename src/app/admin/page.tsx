'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import BlueprintDealCard from '@/components/BlueprintDealCard';

function Portal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? createPortal(children, document.body) : null;
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const IconOverview = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);
const IconDeals = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);
const IconGiveaways = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 12 20 22 4 22 4 12" />
    <rect x="2" y="7" width="20" height="5" />
    <line x1="12" y1="22" x2="12" y2="7" />
    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
  </svg>
);
const IconSubmissions = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);
const IconLogout = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);
const IconSearch = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconPlus = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconTrendUp = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
  </svg>
);
const IconActivity = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);
const IconLink = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

// ── Types ─────────────────────────────────────────────────────────────────────
type Tab = 'overview' | 'deals' | 'giveaways' | 'submissions';

// ── Helpers ───────────────────────────────────────────────────────────────────
function SearchInput({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder: string }) {
  return (
    <div style={{ position: 'relative', flex: 1 }}>
      <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#5c6d86', pointerEvents: 'none', display: 'flex' }}>
        <IconSearch />
      </span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%', background: '#07090f', border: '1px solid rgba(255,255,255,0.07)',
          padding: '10px 14px 10px 36px', fontSize: 12, color: '#e2e8f0',
          outline: 'none', transition: 'border-color 0.2s', borderRadius: 0,
        }}
        onFocus={e => e.target.style.borderColor = 'rgba(38,181,255,0.5)'}
        onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.07)'}
      />
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, { bg: string; color: string; border: string; shadow: string }> = {
    Active: { bg: '#0a1612', color: '#34d399', border: 'rgba(52,211,153,0.4)', shadow: 'rgba(52,211,153,0.2)' },
    Pending: { bg: '#14100a', color: '#fbbf24', border: 'rgba(251,191,36,0.4)', shadow: 'rgba(251,191,36,0.2)' },
    Expired: { bg: '#14090b', color: '#f87171', border: 'rgba(248,113,113,0.4)', shadow: 'rgba(248,113,113,0.2)' },
  };
  const s = map[status] || map.Pending;
  return (
    <span style={{
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
      boxShadow: `0 0 10px ${s.shadow}`, padding: '5px 12px',
      fontSize: 10.5, fontWeight: 900, letterSpacing: '0.1em', textTransform: 'uppercase',
      borderRadius: 4, display: 'inline-block', fontFamily: 'var(--font-outfit, sans-serif)',
    }}>
      {status}
    </span>
  );
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, accent, delta, icon }: { label: string; value: string; sub: string; accent?: boolean; delta?: string; icon: React.ReactNode }) {
  return (
    <div style={{
      background: accent ? 'linear-gradient(135deg, #0f172a 0%, #122340 100%)' : '#0c1220',
      border: `1px solid ${accent ? 'rgba(38,181,255,0.3)' : 'rgba(255,255,255,0.06)'}`,
      padding: '24px', position: 'relative', overflow: 'hidden',
      boxShadow: accent ? '0 8px 32px rgba(38,181,255,0.08)' : '0 8px 32px rgba(0,0,0,0.4)',
    }}>
      {accent && (
        <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'rgba(38,181,255,0.05)', borderRadius: '50%', filter: 'blur(20px)', pointerEvents: 'none' }} />
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
        <p style={{ fontSize: 10, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.12em' }}>{label}</p>
        <div style={{ color: accent ? '#26B5FF' : '#5c6d86', opacity: 0.7 }}>{icon}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
        <span style={{ fontSize: 32, fontWeight: 800, color: accent ? '#26B5FF' : '#fff', letterSpacing: '-0.02em', fontFamily: 'var(--font-outfit, sans-serif)' }}>{value}</span>
        {delta && (
          <span style={{ fontSize: 9, fontWeight: 900, color: '#34d399', background: 'rgba(52,211,153,0.08)', border: '1px solid rgba(52,211,153,0.2)', padding: '2px 7px', display: 'flex', alignItems: 'center', gap: 3 }}>
            <IconTrendUp /> {delta}
          </span>
        )}
      </div>
      <p style={{ fontSize: 10.5, color: '#5c6d86' }}>{sub}</p>
    </div>
  );
}

// ── Mini table shared header ──────────────────────────────────────────────────
function TableHeader({ title, sub, accentTitle, searchValue, onSearch, searchPlaceholder, actionLabel, onAction }: {
  title: string; sub: string; accentTitle?: boolean;
  searchValue: string; onSearch: (v: string) => void; searchPlaceholder: string;
  actionLabel: string; onAction?: () => void;
}) {
  return (
    <div style={{
      padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)',
      background: 'rgba(15,23,42,0.6)', display: 'flex', flexWrap: 'wrap', gap: 16,
      alignItems: 'center', justifyContent: 'space-between',
    }}>
      <div>
        <h3 style={{ fontWeight: 700, fontSize: 18, color: accentTitle ? '#26B5FF' : '#fff', letterSpacing: '-0.01em' }}>{title}</h3>
        <p style={{ fontSize: 13, color: '#8b9bb4', marginTop: 3 }}>{sub}</p>
      </div>
      <div style={{ display: 'flex', gap: 10, flex: 1, justifyContent: 'flex-end', flexWrap: 'wrap', minWidth: 0 }}>
        <div style={{ minWidth: 180, maxWidth: 240, flex: 1 }}>
          <SearchInput value={searchValue} onChange={onSearch} placeholder={searchPlaceholder} />
        </div>
        <button
          onClick={onAction}
          style={{
            background: accentTitle ? 'transparent' : '#26B5FF',
            border: accentTitle ? '1px solid rgba(38,181,255,0.35)' : 'none',
            color: accentTitle ? '#26B5FF' : '#000',
            padding: '9px 18px', fontSize: 11, fontWeight: 900, letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6,
            transition: 'all 0.2s', whiteSpace: 'nowrap',
            boxShadow: accentTitle ? 'none' : '0 4px 16px rgba(38,181,255,0.25)',
          }}
          onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '0.85'; (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.02)'; }}
          onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.opacity = '1'; (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
        >
          <IconPlus /> {actionLabel}
        </button>
      </div>
    </div>
  );
}

// ── Overview Tab ──────────────────────────────────────────────────────────────
function OverviewTab({ deals, giveaways, traffic }: { deals: any[]; giveaways: any[]; traffic: { visits: number; clicks: number } }) {
  const activeDeals = deals.filter(d => d.status === 'Active');
  const pendingDeals = deals.filter(d => d.status === 'Pending');
  const totalClicks = traffic.clicks || deals.reduce((s, d) => s + (d.claimedCount || 0), 0);
  const totalVisits = traffic.visits || 12450;
  const conversionRate = totalVisits > 0 ? ((totalClicks / totalVisits) * 100).toFixed(1) + '%' : '0.0%';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Stats Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
        <StatCard label="Total Visits" value={totalVisits.toLocaleString()} sub="Lifetime live views" delta="+1.2%" icon={<IconActivity />} />
        <StatCard label="Deal Clicks" value={totalClicks.toLocaleString()} sub="Coupon & referral clicks" delta="+2.5%" icon={<IconActivity />} />
        <StatCard label="Avg. Conversion" value={conversionRate} sub="Visit to click ratio" accent icon={<IconTrendUp />} />
        <StatCard label="Active Deals" value={String(activeDeals.length)} sub="Live right now" icon={<IconDeals />} />
        <StatCard label="Giveaways" value={String(giveaways.length)} sub="Running campaigns" icon={<IconGiveaways />} />
        <StatCard label="Pending Review" value={String(pendingDeals.length)} sub="Awaiting approval" icon={<IconSubmissions />} />
      </div>

      {/* Recent Activity */}
      <div style={{ background: '#0c1220', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <div style={{ padding: '18px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(15,23,42,0.5)' }}>
          <h3 style={{ fontWeight: 700, fontSize: 18, color: '#fff' }}>Recent Active Deals</h3>
          <p style={{ fontSize: 13, color: '#8b9bb4', marginTop: 3 }}>Latest live promotions on Snow</p>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(10,15,25,0.6)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {['Prop Firm', 'Promo Code', 'Clicks', 'Status'].map(h => (
                  <th key={h} style={{ padding: '12px 24px', fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {activeDeals.slice(0, 5).map(deal => (
                <tr key={deal.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.15s' }}
                  onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.012)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                  <td style={{ padding: '14px 24px', fontWeight: 700, fontSize: 16, color: '#fff' }}>{deal.firmName}</td>
                  <td style={{ padding: '14px 24px', fontFamily: 'monospace', color: '#26B5FF', fontWeight: 700, fontSize: 15 }}>{deal.promoCode}</td>
                  <td style={{ padding: '14px 24px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>{(deal.claimedCount || 0).toLocaleString()}</td>
                  <td style={{ padding: '14px 24px' }}><StatusBadge status="Active" /></td>
                </tr>
              ))}
              {activeDeals.length === 0 && (
                <tr><td colSpan={4} style={{ padding: '32px 24px', textAlign: 'center', color: '#5c6d86', fontSize: 13 }}>No active deals yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function DealModal({ initialData, onClose, onSave }: { initialData?: any, onClose: () => void, onSave: (deal: any) => void }) {
  const [formData, setFormData] = useState(initialData || {
    firmName: 'New Firm',
    promoCode: 'CODE50',
    discount: '50%',
    link: 'https://...',
    logo: '/alphafuturespfp.jpg',
    description: 'A brand new exclusive offer.',
    status: 'Active',
    isFeatured: false,
  });

  const handleChange = (field: string, val: any) => setFormData((p: any) => ({ ...p, [field]: val }));

  return (
    <Portal>
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
    }}>
      <div style={{
        background: '#0c1220', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12,
        width: '100%', maxWidth: 1100, margin: '0 auto', display: 'flex', flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(38,181,255,0.2)',
      }}>
        {/* Header */}
        <div style={{ padding: '24px 32px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(15,23,42,0.6)' }}>
          <div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{initialData ? 'Edit Deal' : 'Add New Deal'}</h2>
            <p style={{ fontSize: 13, color: '#8b9bb4', marginTop: 4 }}>Configure the promotional offer and preview how it looks.</p>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#8b9bb4', cursor: 'pointer', fontSize: 24, transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = '#fff')} onMouseOut={e => (e.currentTarget.style.color = '#8b9bb4')}>×</button>
        </div>
        
        {/* Body */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: 0 }}>
          {/* Form Side */}
          <div style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 24, borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Prop Firm Name</label>
                <input type="text" value={formData.firmName} onChange={e => handleChange('firmName', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Promo Code</label>
                <input type="text" value={formData.promoCode} onChange={e => handleChange('promoCode', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14, fontFamily: 'monospace' }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Discount Label</label>
                <input type="text" value={formData.discount} onChange={e => handleChange('discount', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Affiliate Link</label>
                <input type="text" value={formData.link} onChange={e => handleChange('link', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, gridColumn: 'span 2' }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Upload Logo (Image)</label>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <label style={{
                    background: 'rgba(255,255,255,0.03)', border: '1px dashed rgba(255,255,255,0.2)', padding: '12px 16px', color: '#8b9bb4', borderRadius: 6, fontSize: 14, cursor: 'pointer', textAlign: 'center', flex: 1, transition: 'all 0.2s'
                  }} onMouseOver={e => { e.currentTarget.style.borderColor = '#26B5FF'; e.currentTarget.style.color = '#fff'; }} onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = '#8b9bb4'; }}>
                    {formData.logo && formData.logo.startsWith('data:image') ? 'Image Selected (Click to change)' : 'Click to Upload Image...'}
                    <input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onload = (ev) => {
                          handleChange('logo', ev.target?.result as string);
                        };
                        reader.readAsDataURL(file);
                      }
                    }} />
                  </label>
                  {formData.logo && formData.logo.startsWith('data:image') && (
                    <div style={{ width: 44, height: 44, borderRadius: 6, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', flexShrink: 0, background: '#000' }}>
                      <img src={formData.logo} alt="Logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </div>
                  )}
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, gridColumn: 'span 2' }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Description</label>
                <textarea rows={2} value={formData.description} onChange={e => handleChange('description', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14, resize: 'none' }} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, gridColumn: 'span 2', marginTop: 8 }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontSize: 14, cursor: 'pointer' }}>
                  <input type="checkbox" checked={formData.isFeatured} onChange={e => handleChange('isFeatured', e.target.checked)} style={{ width: 18, height: 18, accentColor: '#26B5FF' }} />
                  Featured Deal (Best Deal Badge)
                </label>
              </div>
            </div>
          </div>
          
          {/* Preview Side */}
          <div style={{ padding: 32, background: 'rgba(0,0,0,0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#5c6d86', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 24 }}>Live Card Preview</p>
            <div style={{ width: '100%', zoom: 1.1 }}>
              <BlueprintDealCard 
                firmName={formData.firmName}
                discount={formData.discount}
                logo={formData.logo}
                description={formData.description}
                expiresIn={0}
                claimedCount={0}
                promoCode={formData.promoCode}
                link={formData.link}
                isFeatured={formData.isFeatured}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ padding: '20px 32px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(15,23,42,0.8)', display: 'flex', justifyContent: 'flex-end', gap: 16 }}>
          <button onClick={onClose} style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '10px 24px', fontSize: 13, fontWeight: 700, borderRadius: 6, cursor: 'pointer', transition: 'all 0.2s',
          }} onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')} onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>Cancel</button>
          
          <button onClick={() => onSave(formData)} style={{
            background: '#26B5FF', border: 'none', color: '#000', padding: '10px 32px', fontSize: 13, fontWeight: 900, borderRadius: 6, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(38,181,255,0.25)',
          }} onMouseOver={e => (e.currentTarget.style.opacity = '0.9')} onMouseOut={e => (e.currentTarget.style.opacity = '1')}>{initialData ? 'Save Changes' : 'Create Deal'}</button>
        </div>
      </div>
    </div>
    </Portal>
  );
}

// ── Deals Tab ─────────────────────────────────────────────────────────────────
function DealsTab({ deals, loading, onDelete, onRefresh }: { deals: any[]; loading: boolean; onDelete: (id: string) => void; onRefresh: () => void }) {
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingDeal, setEditingDeal] = useState<any>(null);

  const activeDeals = deals.filter(d => d.status === 'Active');
  const filtered = activeDeals.filter(d =>
    d.firmName.toLowerCase().includes(search.toLowerCase()) ||
    d.promoCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div style={{ background: '#0c1220', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <TableHeader
          title="Active Deals" sub="Manage live promotional coupons and referral codes" accentTitle
          searchValue={search} onSearch={setSearch} searchPlaceholder="Search by firm or code..."
          actionLabel="Add Deal" onAction={() => setShowAddModal(true)}
        />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(10,15,25,0.6)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {['Prop Firm', 'Ref Code', 'Total Clicks', 'Status', 'Action'].map((h, i) => (
                  <th key={h} style={{ padding: '13px 24px', fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: i === 4 ? 'right' : 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr><td colSpan={5} style={{ padding: '40px 24px', textAlign: 'center', color: '#8b9bb4', fontSize: 13 }}>Loading deals database…</td></tr>
              ) : filtered.length === 0 ? (
                <tr><td colSpan={5} style={{ padding: '40px 24px', textAlign: 'center', color: '#5c6d86', fontSize: 13 }}>No active deals found.</td></tr>
              ) : filtered.map(deal => (
                <tr key={deal.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.15s' }}
                  onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.012)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                  <td style={{ padding: '16px 24px', fontWeight: 700, fontSize: 16, color: '#fff' }}>{deal.firmName}</td>
                  <td style={{ padding: '16px 24px', fontFamily: 'monospace', color: '#26B5FF', fontWeight: 700, fontSize: 15, textTransform: 'uppercase' }}>{deal.promoCode}</td>
                  <td style={{ padding: '16px 24px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>{(deal.claimedCount || 0).toLocaleString()}</td>
                  <td style={{ padding: '16px 24px' }}><StatusBadge status="Active" /></td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => setEditingDeal(deal)}
                        style={{
                          background: 'rgba(38,181,255,0.06)', border: '1px solid rgba(38,181,255,0.3)',
                          color: '#26B5FF', padding: '7px 16px', fontSize: 11, fontWeight: 900,
                          letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(38,181,255,0.12)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(38,181,255,0.6)'; }}
                        onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(38,181,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(38,181,255,0.3)'; }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(deal.id)}
                        style={{
                          background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.3)',
                          color: '#f87171', padding: '7px 16px', fontSize: 11, fontWeight: 900,
                          letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}
                        onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.12)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239,68,68,0.6)'; }}
                        onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.06)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239,68,68,0.3)'; }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {(showAddModal || editingDeal) && (
        <DealModal 
          initialData={editingDeal}
          onClose={() => { setShowAddModal(false); setEditingDeal(null); }}
          onSave={async (deal) => {
            try {
              const action = editingDeal ? 'admin_update' : 'admin_create';
              await fetch('/api/deals', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action, deal })
              });
              onRefresh();
              setShowAddModal(false);
              setEditingDeal(null);
            } catch (error) {
              console.error('Failed to save deal:', error);
            }
          }}
        />
      )}
    </>
  );
}

function GiveawayModal({ initialData, onClose, onSave }: { initialData?: any, onClose: () => void, onSave: (ga: any) => void }) {
  const [formData, setFormData] = useState(initialData || {
    firmName: 'New Firm',
    challengeSize: '$50K Challenge',
    tweetId: '1234567890123456789',
    status: 'Active',
  });

  const handleChange = (field: string, val: any) => setFormData((p: any) => ({ ...p, [field]: val }));

  return (
    <Portal>
    <div style={{
      position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'
    }}>
      <div style={{
        background: '#0c1220', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12,
        width: '100%', maxWidth: 700, margin: '0 auto', display: 'flex', flexDirection: 'column',
        boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(38,181,255,0.2)',
      }}>
        <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(15,23,42,0.6)' }}>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{initialData ? 'Edit Giveaway' : 'Add New Giveaway'}</h2>
            <p style={{ fontSize: 13, color: '#8b9bb4', marginTop: 2 }}>Configure the X giveaway sweepstakes.</p>
          </div>
          <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: '#8b9bb4', cursor: 'pointer', fontSize: 24, transition: 'color 0.2s' }}
            onMouseOver={e => (e.currentTarget.style.color = '#fff')} onMouseOut={e => (e.currentTarget.style.color = '#8b9bb4')}>×</button>
        </div>
        
        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Prop Firm Name</label>
              <input type="text" value={formData.firmName} onChange={e => handleChange('firmName', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14 }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Challenge Size</label>
              <input type="text" value={formData.challengeSize} onChange={e => handleChange('challengeSize', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14 }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tweet ID</label>
              <input type="text" value={formData.tweetId} onChange={e => handleChange('tweetId', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14, fontFamily: 'monospace' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</label>
              <select value={formData.status} onChange={e => handleChange('status', e.target.value)} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '12px 16px', color: '#fff', borderRadius: 6, fontSize: 14, appearance: 'none', cursor: 'pointer' }}>
                <option value="Active" style={{ background: '#0c1220' }}>Active</option>
                <option value="Expired" style={{ background: '#0c1220' }}>Expired</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.05)', background: 'rgba(15,23,42,0.8)', display: 'flex', justifyContent: 'flex-end', gap: 16 }}>
          <button onClick={onClose} style={{
            background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '10px 24px', fontSize: 13, fontWeight: 700, borderRadius: 6, cursor: 'pointer', transition: 'all 0.2s',
          }} onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')} onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>Cancel</button>
          
          <button onClick={() => onSave(formData)} style={{
            background: '#26B5FF', border: 'none', color: '#000', padding: '10px 32px', fontSize: 13, fontWeight: 900, borderRadius: 6, cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'all 0.2s', boxShadow: '0 4px 16px rgba(38,181,255,0.25)',
          }} onMouseOver={e => (e.currentTarget.style.opacity = '0.9')} onMouseOut={e => (e.currentTarget.style.opacity = '1')}>{initialData ? 'Save Changes' : 'Create Giveaway'}</button>
        </div>
      </div>
    </div>
    </Portal>
  );
}

// ── Giveaways Tab ─────────────────────────────────────────────────────────────
function GiveawaysTab({ giveaways, onSave, onDelete }: { giveaways: any[]; onSave: (ga: any) => void; onDelete: (id: string) => void }) {
  const [search, setSearch] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingGiveaway, setEditingGiveaway] = useState<any>(null);
  const filtered = giveaways.filter(g =>
    g.firmName.toLowerCase().includes(search.toLowerCase()) ||
    g.challengeSize.toLowerCase().includes(search.toLowerCase()) ||
    g.tweetId.includes(search)
  );

  return (
    <>
      <div style={{ background: '#0c1220', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
        <TableHeader
          title="Active Giveaways" sub="Manage live sweepstakes and giveaway campaigns on X" accentTitle
          searchValue={search} onSearch={setSearch} searchPlaceholder="Search giveaways..."
          actionLabel="Add Giveaway" onAction={() => setShowAddModal(true)}
        />
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(10,15,25,0.6)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {['Firm / Challenge', 'Tweet ID', 'Entries (X)', 'Date Added', 'Status', 'Action'].map((h, i) => (
                  <th key={h} style={{ padding: '13px 24px', fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: i === 5 ? 'right' : 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} style={{ padding: '40px 24px', textAlign: 'center', color: '#5c6d86', fontSize: 13 }}>No giveaways found.</td></tr>
              ) : filtered.map(ga => (
                <tr key={ga.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.15s' }}
                  onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.012)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                  <td style={{ padding: '16px 24px' }}>
                    <p style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>{ga.firmName}</p>
                    <p style={{ fontSize: 13, color: '#8b9bb4', marginTop: 3 }}>{ga.challengeSize}</p>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <a href={`https://x.com/status/${ga.tweetId}`} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: 'monospace', fontSize: 14, color: '#26B5FF', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      {ga.tweetId.slice(0, 10)}… <IconLink />
                    </a>
                  </td>
                  <td style={{ padding: '16px 24px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.8)', fontSize: 15 }}>{(ga.entriesCount || 0).toLocaleString()}</td>
                  <td style={{ padding: '16px 24px', fontSize: 14, color: '#8b9bb4' }}>{ga.dateAdded}</td>
                  <td style={{ padding: '16px 24px' }}><StatusBadge status={ga.status} /></td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => setEditingGiveaway(ga)}
                        style={{
                          background: 'rgba(38,181,255,0.06)', border: '1px solid rgba(38,181,255,0.3)',
                          color: '#26B5FF', padding: '7px 16px', fontSize: 11, fontWeight: 900,
                          letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                        }}
                        onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(38,181,255,0.12)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(38,181,255,0.6)'; }}
                        onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(38,181,255,0.06)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(38,181,255,0.3)'; }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => onDelete(ga.id)}
                        style={{
                          background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.3)',
                          color: '#f87171', padding: '7px 16px', fontSize: 11, fontWeight: 900,
                          letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                        }}
                        onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.12)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239,68,68,0.6)'; }}
                        onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.06)'; (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(239,68,68,0.3)'; }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {(showAddModal || editingGiveaway) && (
        <GiveawayModal 
          initialData={editingGiveaway}
          onClose={() => { setShowAddModal(false); setEditingGiveaway(null); }}
          onSave={(ga) => {
            onSave(ga);
            setShowAddModal(false);
            setEditingGiveaway(null);
          }}
        />
      )}
    </>
  );
}



// ── Submissions Tab ───────────────────────────────────────────────────────────
function SubmissionsTab({ pending, loading, onApprove, onDelete }: { pending: any[]; loading: boolean; onApprove: (id: string) => void; onDelete: (id: string) => void }) {
  const [search, setSearch] = useState('');
  const filtered = pending.filter(d =>
    d.firmName.toLowerCase().includes(search.toLowerCase()) ||
    (d.deliverables || d.description || '').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: '#0c1220', border: '1px solid rgba(255,255,255,0.06)', overflow: 'hidden' }}>
      <TableHeader
        title="Pending Partnerships" sub="Review incoming deal applications and Telegram submissions" accentTitle
        searchValue={search} onSearch={setSearch} searchPlaceholder="Search submissions..."
        actionLabel="Add Submission"
      />
      <div style={{ overflowX: 'auto' }}>
        {loading ? (
          <div style={{ padding: '48px 24px', textAlign: 'center', color: '#8b9bb4', fontSize: 13 }}>Loading submissions queue…</div>
        ) : filtered.length === 0 ? (
          <div style={{ padding: '48px 24px', textAlign: 'center', color: '#5c6d86', fontSize: 13 }}>No submissions found.</div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(10,15,25,0.6)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                {['Firm / Deliverables', 'Community Offer', 'Financials', 'Contact', 'Actions'].map((h, i) => (
                  <th key={h} style={{ padding: '13px 24px', fontSize: 12, fontWeight: 700, color: '#8b9bb4', textTransform: 'uppercase', letterSpacing: '0.1em', textAlign: i === 4 ? 'right' : 'left' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map(deal => (
                <tr key={deal.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'background 0.15s' }}
                  onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.012)')}
                  onMouseOut={e => (e.currentTarget.style.background = 'transparent')}>
                  <td style={{ padding: '16px 24px', maxWidth: 260 }}>
                    <p style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>{deal.firmName}</p>
                    <p style={{ fontSize: 13, color: '#8b9bb4', marginTop: 4, lineHeight: 1.5, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {deal.deliverables || deal.description}
                    </p>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <span style={{ background: '#111e33', border: '1px solid rgba(255,255,255,0.07)', color: '#e2e8f0', padding: '6px 14px', fontSize: 14, fontWeight: 700 }}>{deal.discount}</span>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 13 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#5c6d86', fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Commission:</span>
                        <span style={{ color: '#26B5FF', fontFamily: 'monospace', fontWeight: 700, fontSize: 14 }}>{deal.commission || 'N/A'}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: '#5c6d86', fontSize: 10.5, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Retainer:</span>
                        <span style={{ color: 'rgba(255,255,255,0.8)', fontFamily: 'monospace', fontWeight: 600, fontSize: 14 }}>{deal.retainer || 'N/A'}</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '16px 24px' }}>
                    <p style={{ fontWeight: 700, color: 'rgba(255,255,255,0.85)', fontSize: 14 }}>{deal.contactTelegram}</p>
                    <p style={{ fontSize: 12.5, color: '#8b9bb4', marginTop: 3 }}>{deal.contactEmail}</p>
                  </td>
                  <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', alignItems: 'center' }}>
                      {deal.status === 'Approved' ? (
                        <span style={{
                          background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.4)',
                          color: '#34d399', padding: '7px 16px', fontSize: 11, fontWeight: 900,
                          letterSpacing: '0.08em', textTransform: 'uppercase',
                        }}>✓ Approved</span>
                      ) : (
                        <button
                          onClick={() => onApprove(deal.id)}
                          style={{
                            background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.4)',
                            color: '#34d399', padding: '7px 16px', fontSize: 11, fontWeight: 900,
                            letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                          }}
                          onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(52,211,153,0.12)'; }}
                          onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(52,211,153,0.06)'; }}
                        >Approve</button>
                      )}
                      <button
                        onClick={() => onDelete(deal.id)}
                        style={{
                          background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.3)',
                          color: '#f87171', padding: '7px 16px', fontSize: 11, fontWeight: 900,
                          letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
                        }}
                        onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.12)'; }}
                        onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.06)'; }}
                      >Reject</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// ── Main Dashboard ────────────────────────────────────────────────────────────
export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [giveaways, setGiveaways] = useState<any[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [traffic, setTraffic] = useState<{ visits: number; clicks: number }>({ visits: 12450, clicks: 3820 });

  const fetchDeals = async () => {
    try {
      const response = await fetch('/api/deals');
      const data = await response.json();
      setDeals(data);
    } catch (err) {
      console.error('Failed to fetch deals:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchGiveaways = async () => {
    try {
      const response = await fetch('/api/giveaways');
      const data = await response.json();
      setGiveaways(data);
    } catch (err) {
      console.error('Failed to fetch giveaways:', err);
    }
  };

  const fetchTraffic = async () => {
    try {
      const response = await fetch('/api/track');
      const data = await response.json();
      if (data && typeof data.visits === 'number' && typeof data.clicks === 'number') {
        setTraffic(data);
      }
    } catch (err) {
      console.error('Failed to fetch traffic stats:', err);
    }
  };

  useEffect(() => {
    const isAuth = sessionStorage.getItem('admin_authenticated') === 'true';
    setIsAuthenticated(isAuth);
    if (isAuth) {
      fetchDeals();
      fetchGiveaways();
      fetchTraffic();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');
    try {
      const res = await fetch('/api/admin/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        sessionStorage.setItem('admin_authenticated', 'true');
        setIsAuthenticated(true);
        fetchDeals();
        fetchGiveaways();
        fetchTraffic();
      } else {
        setAuthError(data.error || 'Access Denied: Invalid key');
      }
    } catch {
      setAuthError('Authentication failed due to connection error.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  const handleApprove = async (id: string) => {
    try {
      const res = await fetch('/api/deals', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'approve', id }) });
      const result = await res.json();
      if (result.success) fetchDeals();
    } catch (err) { console.error(err); }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch('/api/deals', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'delete', id }) });
      const result = await res.json();
      if (result.success) fetchDeals();
    } catch (err) { console.error(err); }
  };

  const handleDeleteGiveaway = async (id: string) => {
    try {
      const res = await fetch('/api/giveaways', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'delete', id }) });
      const result = await res.json();
      if (result.success) fetchGiveaways();
    } catch (err) { console.error(err); }
  };

  const handleSaveGiveaway = async (ga: any) => {
    try {
      const action = ga.id ? 'admin_update' : 'admin_create';
      const res = await fetch('/api/giveaways', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, giveaway: ga })
      });
      const result = await res.json();
      if (result.success) fetchGiveaways();
    } catch (err) { console.error(err); }
  };

  // ── Splash ──
  if (isAuthenticated === null) {
    return (
      <div style={{ minHeight: '100vh', background: '#050a12', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 11, fontWeight: 900, letterSpacing: '0.25em', color: '#26B5FF', textTransform: 'uppercase' }}>Verifying Terminal Lock…</span>
      </div>
    );
  }

  // ── Login ──
  if (!isAuthenticated) {
    return (
      <main style={{ minHeight: '100vh', background: '#050a12', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <div style={{
          width: '100%', maxWidth: 400, background: '#0c1220',
          border: '1px solid rgba(179,212,255,0.1)', padding: '48px 40px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.5)',
        }}>
          {/* Logo mark */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ width: 48, height: 48, background: 'rgba(38,181,255,0.1)', border: '1px solid rgba(38,181,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#26B5FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Admin Portal</h2>
            <p style={{ fontSize: 12, color: '#8b9bb4', marginTop: 6 }}>Restricted access. Enter your key to continue.</p>
          </div>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <input
              type="password" required
              placeholder="Enter administrator key…"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                height: 48, width: '100%', padding: '0 16px',
                background: '#07090f', border: '1px solid rgba(255,255,255,0.08)',
                color: '#fff', fontSize: 14, outline: 'none', textAlign: 'center',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(38,181,255,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
            />
            {authError && (
              <div style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', padding: '10px 14px', fontSize: 11, fontWeight: 700, color: '#f87171', textAlign: 'center' }}>
                {authError}
              </div>
            )}
            <button type="submit" disabled={authLoading} style={{
              height: 48, background: '#26B5FF', border: 'none', color: '#000',
              fontWeight: 900, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase',
              cursor: authLoading ? 'not-allowed' : 'pointer', opacity: authLoading ? 0.6 : 1,
              boxShadow: '0 0 24px rgba(38,181,255,0.25)', transition: 'all 0.2s',
            }}>
              {authLoading ? 'Verifying…' : 'Unlock Console'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  // ── Nav config ──
  const navItems: { id: Tab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'overview', label: 'Overview', icon: <IconOverview /> },
    { id: 'deals', label: 'Active Deals', icon: <IconDeals />, badge: deals.filter(d => d.status === 'Active').length },
    { id: 'giveaways', label: 'Giveaways', icon: <IconGiveaways />, badge: giveaways.length },
    { id: 'submissions', label: 'Submissions', icon: <IconSubmissions />, badge: deals.filter(d => d.status === 'Pending').length || undefined },
  ];

  const tabTitle: Record<Tab, string> = {
    overview: 'Overview',
    deals: 'Active Deals',
    giveaways: 'Giveaways',
    submissions: 'Pending Submissions',
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#070b14', color: '#fff' }}>

      {/* ── Sidebar ── */}
      <aside style={{
        width: 240, minHeight: '100vh', background: '#080d18',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', flexDirection: 'column',
        position: 'sticky', top: 0, height: '100vh', flexShrink: 0,
      }}>
        {/* Logo */}
        <div style={{ padding: '22px 24px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/snw.svg" alt="SnowPropDeals logo" style={{ width: 52, height: 52, objectFit: 'contain', flexShrink: 0 }} />
            <div>
              <p style={{ fontSize: 17, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1 }}>SnowPropDeals</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          <p style={{ fontSize: 10, fontWeight: 700, color: '#5c6d86', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 12px 12px' }}>Management</p>
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12, width: '100%',
                  padding: '13px 14px', border: 'none', cursor: 'pointer', textAlign: 'left',
                  background: isActive ? 'rgba(38,181,255,0.1)' : 'transparent',
                  borderLeft: isActive ? '2px solid #26B5FF' : '2px solid transparent',
                  color: isActive ? '#26B5FF' : '#8b9bb4',
                  fontSize: 15, fontWeight: isActive ? 700 : 500,
                  transition: 'all 0.15s', borderRadius: '0 4px 4px 0',
                  marginLeft: isActive ? 0 : 0,
                }}
                onMouseOver={e => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.04)'; (e.currentTarget as HTMLButtonElement).style.color = '#e2e8f0'; } }}
                onMouseOut={e => { if (!isActive) { (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; (e.currentTarget as HTMLButtonElement).style.color = '#8b9bb4'; } }}
              >
                <span style={{ opacity: isActive ? 1 : 0.7 }}>{item.icon}</span>
                <span style={{ flex: 1 }}>{item.label}</span>
                {item.badge !== undefined && item.badge > 0 && (
                  <span style={{
                    background: isActive ? 'rgba(38,181,255,0.2)' : 'rgba(255,255,255,0.07)',
                    color: isActive ? '#26B5FF' : '#8b9bb4',
                    fontSize: 10, fontWeight: 800, padding: '1px 7px', borderRadius: 10,
                    minWidth: 20, textAlign: 'center',
                  }}>{item.badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div style={{ padding: '12px 12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex', alignItems: 'center', gap: 8, width: '100%',
              padding: '10px 12px', background: 'transparent', border: 'none',
              color: '#5c6d86', fontSize: 12, fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.15s', borderRadius: 4, textAlign: 'left',
            }}
            onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.color = '#f87171'; (e.currentTarget as HTMLButtonElement).style.background = 'rgba(239,68,68,0.06)'; }}
            onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.color = '#5c6d86'; (e.currentTarget as HTMLButtonElement).style.background = 'transparent'; }}
          >
            <IconLogout /> Log Out
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main style={{ flex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Topbar */}
        <header style={{
          height: 96, padding: '0 32px', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(8,13,24,0.8)', backdropFilter: 'blur(12px)',
          position: 'sticky', top: 0, zIndex: 10,
        }}>
          <div>
            <h1 style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.01em' }}>{tabTitle[activeTab]}</h1>
            <p style={{ fontSize: 13, color: '#5c6d86', marginTop: 3 }}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={async () => {
                setRefreshing(true);
                await Promise.all([fetchDeals(), fetchGiveaways(), fetchTraffic()]);
                setRefreshing(false);
              }}
              style={{
                background: 'transparent', border: '1px solid rgba(255,255,255,0.08)',
                color: refreshing ? '#26B5FF' : '#8b9bb4', padding: '8px 16px', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLButtonElement).style.color = refreshing ? '#26B5FF' : '#8b9bb4'; }}
            >{refreshing ? '↻ Refreshing…' : '↻ Refresh'}</button>
            <button
              onClick={() => {
                let rows: string[] = [];
                let filename = '';
                if (activeTab === 'deals') {
                  filename = 'active-deals.csv';
                  rows = ['Firm Name,Promo Code,Clicks,Status,Featured,Description',
                    ...deals.filter(d => d.status === 'Active').map(d =>
                      `"${d.firmName}","${d.promoCode}",${d.claimedCount || 0},"${d.status}","${d.isFeatured ? 'Yes' : 'No'}","${(d.description || '').replace(/"/g, '""')}"`)];
                } else if (activeTab === 'giveaways') {
                  filename = 'giveaways.csv';
                  rows = ['Firm Name,Challenge Size,Tweet ID,Entries,Date Added,Status',
                    ...giveaways.map(g =>
                      `"${g.firmName}","${g.challengeSize}","${g.tweetId}",${g.entriesCount || 0},"${g.dateAdded}","${g.status}"`)];
                } else if (activeTab === 'submissions') {
                  filename = 'submissions.csv';
                  rows = ['Firm Name,Discount,Commission,Retainer,Contact Telegram,Contact Email,Status',
                    ...deals.filter(d => d.status === 'Pending' || d.status === 'Approved').map(d =>
                      `"${d.firmName}","${d.discount}","${d.commission || ''}","${d.retainer || ''}","${d.contactTelegram || ''}","${d.contactEmail || ''}","${d.status}"`)];
                } else {
                  filename = 'overview.csv';
                  rows = ['Firm Name,Promo Code,Clicks,Status',
                    ...deals.map(d => `"${d.firmName}","${d.promoCode}",${d.claimedCount || 0},"${d.status}"`)];
                }
                const blob = new Blob([rows.join('\n')], { type: 'text/csv' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url; a.download = filename; a.click();
                URL.revokeObjectURL(url);
              }}
              style={{
                background: 'transparent', border: '1px solid rgba(255,255,255,0.08)',
                color: '#8b9bb4', padding: '8px 16px', fontSize: 11, fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseOver={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.2)'; (e.currentTarget as HTMLButtonElement).style.color = '#fff'; }}
              onMouseOut={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.08)'; (e.currentTarget as HTMLButtonElement).style.color = '#8b9bb4'; }}
            >⬇ Export CSV</button>
          </div>
        </header>

        {/* Content */}
        <div style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
          <div style={{ animation: 'fadeIn 0.3s ease forwards' }}>
            {activeTab === 'overview' && (
              <OverviewTab deals={deals} giveaways={giveaways} traffic={traffic} />
            )}
            {activeTab === 'deals' && (
              <DealsTab deals={deals} loading={loading} onDelete={handleDelete} onRefresh={fetchDeals} />
            )}
            {activeTab === 'giveaways' && (
              <GiveawaysTab giveaways={giveaways} onSave={handleSaveGiveaway} onDelete={handleDeleteGiveaway} />
            )}
            {activeTab === 'submissions' && (
              <SubmissionsTab
                pending={deals.filter(d => d.status === 'Pending' || d.status === 'Approved')}
                loading={loading}
                onApprove={handleApprove}
                onDelete={handleDelete}
              />
            )}
          </div>
        </div>
      </main>

    </div>
  );
}

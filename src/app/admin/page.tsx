'use client';

import React, { useState } from 'react';

export default function AdminDashboard() {
  const [stats] = useState({
    visits: 12450,
    clicks: 3820,
    conversion: '30.6%'
  });

  const [deals, setDeals] = useState([
    { id: 1, firm: 'Lucid Trading', code: 'SNOWX', clicks: 1240, status: 'Active' },
    { id: 2, firm: 'Alpha Future\'s', code: 'SNOWX', clicks: 890, status: 'Active' },
    { id: 3, firm: 'Apex Funding', code: 'SNOWX', clicks: 2100, status: 'Active' },
  ]);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black">Admin <span className="text-accent">Dashboard</span></h1>
            <p className="text-muted text-sm">Welcome back, Sky. Here's your portal performance.</p>
          </div>
          <div className="flex gap-4">
             <button className="glass px-6 py-2 rounded-xl text-xs font-bold hover:bg-white/10">Export Stats</button>
             <button className="bg-accent text-black px-6 py-2 rounded-xl text-xs font-black">Add New Deal</button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
           <div className="glass p-6 rounded-2xl border border-white/10">
              <p className="text-muted text-[10px] uppercase font-black tracking-widest mb-2">Total Visits</p>
              <h2 className="text-4xl font-black">{stats.visits.toLocaleString()}</h2>
              <p className="text-accent text-[10px] mt-2">+12% from last week</p>
           </div>
           <div className="glass p-6 rounded-2xl border border-white/10">
              <p className="text-muted text-[10px] uppercase font-black tracking-widest mb-2">Deal Clicks</p>
              <h2 className="text-4xl font-black">{stats.clicks.toLocaleString()}</h2>
              <p className="text-accent text-[10px] mt-2">+5% from last week</p>
           </div>
           <div className="glass p-6 rounded-2xl border border-accent/20 bg-accent/5">
              <p className="text-muted text-[10px] uppercase font-black tracking-widest mb-2">Avg. Conversion</p>
              <h2 className="text-4xl font-black text-accent">{stats.conversion}</h2>
              <p className="text-white/40 text-[10px] mt-2">Visits to Click ratio</p>
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Deals Table */}
           <div className="lg:col-span-2 glass rounded-3xl overflow-hidden border border-white/10">
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                 <h3 className="font-bold">Active Deals</h3>
                 <span className="text-[10px] text-muted uppercase font-black">{deals.length} Firms</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-[10px] uppercase font-black text-muted">
                    <tr>
                      <th className="px-6 py-4">Prop Firm</th>
                      <th className="px-6 py-4">Ref Code</th>
                      <th className="px-6 py-4">Total Clicks</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {deals.map((deal) => (
                      <tr key={deal.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="px-6 py-4 font-bold">{deal.firm}</td>
                        <td className="px-6 py-4 text-accent font-mono">{deal.code}</td>
                        <td className="px-6 py-4">{deal.clicks.toLocaleString()}</td>
                        <td className="px-6 py-4">
                           <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] rounded-full font-bold">Active</span>
                        </td>
                        <td className="px-6 py-4">
                           <button className="text-muted hover:text-white transition-colors text-xs">Edit</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
           </div>

           {/* GA Winner Picker */}
           <div className="glass p-6 rounded-3xl border border-white/10 h-fit">
              <h3 className="font-bold mb-6">GA Winner Picker</h3>
              <div className="bg-black/40 rounded-2xl p-6 border border-white/5 mb-6 text-center">
                 <p className="text-muted text-xs mb-4">Total Entries for Tradeify $50K:</p>
                 <h4 className="text-3xl font-black mb-6">452</h4>
                 <button className="w-full py-4 bg-white/10 hover:bg-white/20 rounded-xl text-white font-bold transition-all">
                    Roll Random Winner 🎲
                 </button>
              </div>
              <div className="space-y-4">
                 <p className="text-[10px] uppercase font-black text-muted tracking-widest">Recent Winners</p>
                 {[1, 2].map((i) => (
                   <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">W</div>
                      <div>
                        <p className="text-xs font-bold text-white">trader_sky#1234</p>
                        <p className="text-[10px] text-muted">Won $10K Challenge</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

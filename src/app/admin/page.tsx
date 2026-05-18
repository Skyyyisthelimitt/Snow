'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AdminDashboard() {
  const [stats] = useState({
    visits: 12450,
    clicks: 3820,
    conversion: '30.6%'
  });

  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchDeals = async () => {
    try {
      const response = await fetch('/api/deals');
      const data = await response.json();
      setDeals(data);
    } catch (error) {
      console.error('Failed to fetch deals:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

  const activeDeals = deals.filter((d: any) => d.status === 'Active');
  const pendingDeals = deals.filter((d: any) => d.status === 'Pending');

  const handleApprove = async (id: string) => {
    try {
      const res = await fetch('/api/deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'approve', id })
      });
      const result = await res.json();
      if (result.success) {
        fetchDeals();
      }
    } catch (error) {
      console.error('Error approving deal:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch('/api/deals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', id })
      });
      const result = await res.json();
      if (result.success) {
        fetchDeals();
      }
    } catch (error) {
      console.error('Error deleting deal:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black">Admin <span className="text-accent">Dashboard</span></h1>
            <p className="text-muted text-sm">Welcome back, Sky. Here&apos;s your portal performance.</p>
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
           {/* Left Column: Active & Pending Tables */}
           <div className="lg:col-span-2 flex flex-col gap-8">
              
              {/* Active Deals Table */}
              <div className="glass rounded-3xl overflow-hidden border border-white/10">
                 <div className="p-6 border-b border-white/10 flex justify-between items-center">
                    <h3 className="font-bold">Active Deals</h3>
                    <span className="text-[10px] text-muted uppercase font-black">{activeDeals.length} Firms</span>
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
                       {loading ? (
                         <tr>
                           <td colSpan={5} className="px-6 py-8 text-center text-muted">Loading deals database...</td>
                         </tr>
                       ) : activeDeals.length === 0 ? (
                         <tr>
                           <td colSpan={5} className="px-6 py-8 text-center text-muted">No active deals found.</td>
                         </tr>
                       ) : activeDeals.map((deal) => (
                         <tr key={deal.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                           <td className="px-6 py-4 font-bold">{deal.firmName}</td>
                           <td className="px-6 py-4 text-accent font-mono">{deal.promoCode}</td>
                           <td className="px-6 py-4">{(deal.claimedCount || 0).toLocaleString()}</td>
                           <td className="px-6 py-4">
                              <span className="px-2 py-1 bg-accent/10 text-accent text-[10px] rounded-full font-bold">Active</span>
                           </td>
                           <td className="px-6 py-4">
                              <button 
                                onClick={() => handleDelete(deal.id)}
                                className="text-white/40 hover:text-red-400 transition-colors text-xs font-bold cursor-pointer"
                              >
                                Delete
                              </button>
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </table>
                 </div>
              </div>

              {/* Pending Submissions Table */}
              <div className="glass rounded-3xl overflow-hidden border border-white/10">
                 <div className="p-6 border-b border-white/10 flex justify-between items-center bg-accent/5">
                    <h3 className="font-bold text-accent">Pending Partnerships / Deal Submissions</h3>
                    <span className="text-[10px] bg-accent/10 text-accent px-3 py-1 rounded-full font-black uppercase tracking-wider">
                      {pendingDeals.length} Pending
                    </span>
                 </div>
                 <div className="overflow-x-auto">
                   {loading ? (
                     <div className="p-12 text-center text-muted text-sm">
                       Loading submissions queue...
                     </div>
                   ) : pendingDeals.length === 0 ? (
                     <div className="p-12 text-center text-muted text-sm">
                       No pending submissions from partners at the moment.
                     </div>
                   ) : (
                     <table className="w-full text-left">
                       <thead className="bg-white/5 text-[10px] uppercase font-black text-muted">
                         <tr>
                           <th className="px-6 py-4">Prop Firm / Deliverables</th>
                           <th className="px-6 py-4">Community Offer</th>
                           <th className="px-6 py-4">Financial Proposal</th>
                           <th className="px-6 py-4">Contact Rep</th>
                           <th className="px-6 py-4">Actions</th>
                         </tr>
                       </thead>
                       <tbody className="text-sm">
                         {pendingDeals.map((deal: any) => (
                           <tr key={deal.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                             <td className="px-6 py-4 max-w-xs">
                               <p className="font-bold text-white text-base">{deal.firmName}</p>
                               <p className="text-[11.5px] text-muted leading-relaxed mt-1 line-clamp-3" title={deal.deliverables || deal.description}>
                                 {deal.deliverables || deal.description}
                               </p>
                             </td>
                             <td className="px-6 py-4">
                               <span className="px-2.5 py-1 bg-white/5 text-white text-xs rounded border border-white/10 font-bold">
                                 {deal.discount}
                               </span>
                             </td>
                             <td className="px-6 py-4">
                               <div className="flex flex-col gap-1 text-xs">
                                 <div className="flex items-center gap-1.5">
                                   <span className="text-muted text-[10px] uppercase font-bold">Commission:</span>
                                   <span className="text-accent font-mono font-bold">{deal.commission || 'N/A'}</span>
                                 </div>
                                 <div className="flex items-center gap-1.5">
                                   <span className="text-muted text-[10px] uppercase font-bold">Retainer:</span>
                                   <span className="text-white font-mono font-semibold">{deal.retainer || 'N/A'}</span>
                                 </div>
                                </div>
                             </td>
                             <td className="px-6 py-4 text-xs">
                               <p className="font-bold text-white/90">{deal.contactTelegram}</p>
                               <p className="text-[10px] text-muted mt-0.5">{deal.contactEmail}</p>
                             </td>
                             <td className="px-6 py-4">
                               <div className="flex gap-2">
                                 <button 
                                   onClick={() => handleApprove(deal.id)}
                                   className="px-3 py-1.5 bg-accent text-black text-xs font-black rounded-lg hover:bg-accent/80 transition-all cursor-pointer border-none"
                                 >
                                   Approve
                                 </button>
                                 <button 
                                   onClick={() => handleDelete(deal.id)}
                                   className="px-3 py-1.5 bg-white/5 hover:bg-red-500/20 hover:text-red-400 border border-white/5 hover:border-red-500/20 text-muted text-xs font-bold rounded-lg transition-all cursor-pointer"
                                 >
                                   Reject
                                 </button>
                               </div>
                             </td>
                           </tr>
                         ))}
                       </tbody>
                     </table>
                   )}
                 </div>
              </div>

           </div>

           {/* Right Column: GA Winner Picker */}
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

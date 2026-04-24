'use client';

import { motion } from 'framer-motion';
import { Package, DollarSign, Users, Activity, ArrowUpRight, ArrowDownRight, Clock, CheckCircle, XCircle, ChevronRight, Settings, LayoutDashboard, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

const STATS = [
  { title: 'Total Revenue', value: '$124,563.00', change: '+14.5%', isPositive: true, icon: DollarSign },
  { title: 'Active Orders', value: '84', change: '+5.2%', isPositive: true, icon: Package },
  { title: 'Total Customers', value: '1,204', change: '-2.1%', isPositive: false, icon: Users },
  { title: 'Conversion Rate', value: '4.3%', change: '+1.2%', isPositive: true, icon: Activity },
];

const RECENT_ORDERS = [
  { id: '#ORD-001', customer: 'Sarah Jenkins', date: '2 mins ago', amount: '$299.00', status: 'Completed', statusIcon: CheckCircle, statusColor: 'text-green-400' },
  { id: '#ORD-002', customer: 'Michael Chen', date: '15 mins ago', amount: '$149.00', status: 'Processing', statusIcon: Clock, statusColor: 'text-cyan-400' },
  { id: '#ORD-003', customer: 'Elena Rodriguez', date: '1 hour ago', amount: '$89.00', status: 'Processing', statusIcon: Clock, statusColor: 'text-cyan-400' },
  { id: '#ORD-004', customer: 'David Kim', date: '3 hours ago', amount: '$1,299.00', status: 'Cancelled', statusIcon: XCircle, statusColor: 'text-red-400' },
  { id: '#ORD-005', customer: 'Emily Watson', date: '5 hours ago', amount: '$199.00', status: 'Completed', statusIcon: CheckCircle, statusColor: 'text-green-400' },
];

export default function AdminPanel() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-[#0f0f0f] relative overflow-hidden flex flex-col md:flex-row gap-8">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 glass-card p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl h-fit relative z-10 shrink-0">
        <h2 className="text-xl font-bold font-poppins text-white mb-8 flex items-center gap-2">
          <Shield size={24} className="text-primary" /> Admin Portal
        </h2>
        <nav className="space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 bg-primary/20 text-primary rounded-xl font-medium border border-primary/20 transition-colors">
            <LayoutDashboard size={18} /> Overview
          </Link>
          <Link href="/admin/products" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
            <ShoppingBag size={18} /> Products
          </Link>
          <Link href="/admin/orders" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
            <Package size={18} /> Orders
          </Link>
          <Link href="/admin/customers" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
            <Users size={18} /> Customers
          </Link>
          <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
            <Settings size={18} /> Settings
          </Link>
        </nav>
      </aside>

      <div className="flex-1 relative z-10">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-2">Overview</h1>
            <p className="text-gray-400">Welcome back, Super Admin. Here's what's happening today.</p>
          </div>
          <div className="flex gap-3">
            <button className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md">
              Download Report
            </button>
            <button className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium transition-colors shadow-[0_0_20px_rgba(124,58,237,0.3)]">
              New Campaign
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <stat.icon size={24} className="text-cyan-400" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium px-2.5 py-1 rounded-full ${stat.isPositive ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {stat.isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-medium mb-1 relative z-10">{stat.title}</h3>
              <p className="text-3xl font-bold font-poppins text-white relative z-10">{stat.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Main Chart Area (Mock) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="xl:col-span-2 glass-card p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold font-poppins text-white">Revenue Analytics</h2>
              <select className="bg-transparent border border-white/10 text-sm text-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-primary">
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
            </div>
            
            <div className="h-[300px] w-full flex items-end justify-between gap-2 border-b border-white/10 pb-4 relative">
              {/* Mock Bars */}
              {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
                <div key={i} className="w-full flex flex-col items-center gap-2 group">
                  <div className="w-full max-w-[40px] bg-white/5 rounded-t-lg relative group-hover:bg-white/10 transition-colors" style={{ height: '100%' }}>
                    <div 
                      className="absolute bottom-0 w-full bg-gradient-to-t from-primary to-cyan-400 rounded-t-lg shadow-[0_0_15px_rgba(124,58,237,0.5)] transition-all duration-1000 ease-out" 
                      style={{ height: `${height}%` }} 
                    />
                  </div>
                  <span className="text-xs text-gray-500">Day {i + 1}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Orders List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-card p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-poppins text-white">Recent Activity</h2>
              <Link href="#" className="text-primary hover:text-cyan-400 text-sm font-medium transition-colors">
                View All
              </Link>
            </div>
            
            <div className="flex-grow space-y-4">
              {RECENT_ORDERS.map((order, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer border border-transparent hover:border-white/5">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${order.statusColor}`}>
                      <order.statusIcon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-200">{order.customer}</h4>
                      <p className="text-xs text-gray-500">{order.id} • {order.date}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-3">
                    <div>
                      <p className="text-sm font-bold text-white">{order.amount}</p>
                      <p className={`text-xs ${order.statusColor}`}>{order.status}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// Icon component needed for Shield
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2-1 4-2 7-2s5 1 7 2a1 1 0 0 1 1 1v7z" />
    </svg>
  )
}

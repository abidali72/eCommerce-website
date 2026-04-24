'use client';

import { motion } from 'framer-motion';
import { Package, Heart, CreditCard, Settings, User, Clock, CheckCircle, MapPin, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const MY_ORDERS = [
  { id: '#ORD-092', date: 'Oct 24, 2026', items: 'Aero X1 Wireless Headphones', amount: '$299.00', status: 'Delivered', statusIcon: CheckCircle, statusColor: 'text-green-400' },
  { id: '#ORD-087', date: 'Sep 12, 2026', items: 'Nebula Smartwatch Pro', amount: '$199.00', status: 'Processing', statusIcon: Clock, statusColor: 'text-cyan-400' },
];

export default function UserDashboard() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 md:px-8 bg-[#0f0f0f] relative overflow-hidden flex flex-col md:flex-row gap-8">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      {/* User Sidebar */}
      <aside className="w-full md:w-64 glass-card p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl h-fit relative z-10 shrink-0">
        <div className="flex flex-col items-center text-center mb-8 pb-8 border-b border-white/10">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary to-cyan-400 flex items-center justify-center mb-4 text-2xl font-bold shadow-[0_0_20px_rgba(124,58,237,0.3)]">
            JD
          </div>
          <h2 className="text-xl font-bold font-poppins text-white">John Doe</h2>
          <p className="text-sm text-gray-400">john.doe@example.com</p>
        </div>
        
        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-primary/20 text-primary rounded-xl font-medium border border-primary/20 transition-colors">
            <User size={18} /> My Profile
          </Link>
          <Link href="/dashboard/orders" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
            <Package size={18} /> My Orders
          </Link>
          <Link href="/dashboard/wishlist" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
            <Heart size={18} /> Wishlist
          </Link>
          <Link href="/dashboard/payment" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
            <CreditCard size={18} /> Payment Methods
          </Link>
          <Link href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-xl font-medium transition-colors">
            <Settings size={18} /> Account Settings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 relative z-10 space-y-8">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-2">My Profile</h1>
            <p className="text-gray-400">Manage your account details and view your recent activity.</p>
          </div>
          <button className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors backdrop-blur-md">
            Edit Profile
          </button>
        </header>

        {/* Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                <MapPin size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Default Address</h3>
            </div>
            <div className="space-y-1 text-gray-400">
              <p className="text-white font-medium">John Doe</p>
              <p>123 Innovation Drive</p>
              <p>Tech District, Silicon Valley</p>
              <p>CA 94025, United States</p>
              <p className="pt-2">+1 (555) 123-4567</p>
            </div>
            <button className="mt-6 text-primary hover:text-cyan-400 text-sm font-medium transition-colors">
              Manage Addresses
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <CreditCard size={20} />
              </div>
              <h3 className="text-lg font-semibold text-white">Payment Method</h3>
            </div>
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-[#1a1a1a] to-[#2a2a2a] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-xs font-bold text-white">
                  VISA
                </div>
                <div>
                  <p className="text-white font-medium">•••• •••• •••• 4242</p>
                  <p className="text-xs text-gray-500">Expires 12/28</p>
                </div>
              </div>
              <CheckCircle size={20} className="text-primary" />
            </div>
            <button className="mt-6 text-primary hover:text-cyan-400 text-sm font-medium transition-colors">
              Add New Method
            </button>
          </motion.div>
        </div>

        {/* Recent Orders */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 md:p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-xl"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-poppins text-white">Recent Orders</h2>
            <Link href="/dashboard/orders" className="text-primary hover:text-cyan-400 text-sm font-medium transition-colors flex items-center gap-1">
              View All <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="space-y-4">
            {MY_ORDERS.map((order, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-white/5 border border-transparent hover:border-white/10 transition-colors group cursor-pointer gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${order.statusColor}`}>
                    <order.statusIcon size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{order.id}</h4>
                    <p className="text-sm text-gray-400">{order.items}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:text-right gap-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{order.date}</p>
                    <p className={`text-sm font-medium ${order.statusColor}`}>{order.status}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white text-lg">{order.amount}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

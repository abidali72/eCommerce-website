'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Star, Layers, Zap, Shield, ChevronRight, Check, ShoppingBag, ShoppingCart } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the 3D component so it doesn't break SSR
const Hero3D = dynamic(() => import('@/components/Hero3D'), { ssr: false });

const FEATURES = [
  { icon: Layers, title: 'Immersive Design', desc: 'Crafted with precision using modern glassmorphism and stunning 3D micro-interactions.' },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance ensuring blazing fast load times and buttery smooth animations.' },
  { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade encryption and secure infrastructure protecting your premium digital assets.' },
];


const TESTIMONIALS = [
  { name: 'Sarah Jenkins', role: 'CTO at TechFlow', content: 'Gulzameen has completely transformed how we interact with digital assets. The premium feel is unparalleled.' },
  { name: 'Michael Chen', role: 'Lead Designer', content: 'The visual hierarchy and 3D elements create an immersive experience that our clients absolutely love.' },
  { name: 'Elena Rodriguez', role: 'Founder at Nova', content: 'A truly cutting-edge platform. It feels like the future of SaaS interfaces.' },
];

const FEATURED_PRODUCTS = [
  { id: '1', name: 'Aero X1 Wireless Headphones', price: 299, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2000&auto=format&fit=crop', category: 'Audio' },
  { id: '2', name: 'Nebula Smartwatch Pro', price: 199, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=2000&auto=format&fit=crop', category: 'Wearables' },
  { id: '3', name: 'Zenith Minimalist Keyboard', price: 149, image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2000&auto=format&fit=crop', category: 'Peripherals' },
  { id: '4', name: 'Lumina Desk Lamp', price: 89, image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=2000&auto=format&fit=crop', category: 'Home' }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-hidden font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[800px] bg-primary/20 rounded-full blur-[150px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] opacity-30 pointer-events-none" />
        
        {/* 3D Canvas */}
        <Hero3D />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center justify-center h-full text-center mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(124,58,237,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm font-medium tracking-wide text-gray-200">Next-Gen SaaS Platform</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl font-extrabold font-poppins mb-6 tracking-tighter leading-[1.1] max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            Design the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-secondary neon-glow">
              Future of Web.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-2xl text-gray-400 mb-12 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience unparalleled digital aesthetics with our immersive 3D interfaces, state-of-the-art performance, and beautiful minimal design.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Link href="/get-started" className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-2xl transition-all hover:scale-105 shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">Get Started <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link href="/explore" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-2xl transition-all backdrop-blur-md flex items-center justify-center gap-2 hover:border-white/20">
              Explore Platform
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 relative z-10 border-t border-white/5 bg-[#121212]/50 backdrop-blur-3xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold font-poppins mb-6"
            >
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Excellence</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">Every detail has been meticulously crafted to provide a premium, seamless experience.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.3)] backdrop-blur-lg relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary/20 to-cyan-500/20 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section Placeholder */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="glass-card rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-50" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">Interactive 3D Environments</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Bring your products to life with fully interactive, physics-based 3D models running natively in the browser. No plugins required.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Real-time rendering', 'Physically based materials', 'Seamless integration'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <Check size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="#" className="inline-flex items-center gap-2 text-primary hover:text-cyan-400 transition-colors font-semibold text-lg group">
                  See the demo <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="h-[400px] w-full rounded-2xl bg-gradient-to-tr from-white/5 to-white/10 border border-white/10 flex items-center justify-center relative shadow-2xl">
                {/* Fallback for the 3D model if it's too complex to render on lower-end devices */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full border border-primary/30 animate-[spin_10s_linear_infinite]" />
                  <div className="absolute w-64 h-64 rounded-full border border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                  <Layers size={48} className="text-white/50 absolute" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 relative z-10 border-y border-white/5 bg-gradient-to-r from-primary/10 via-cyan-500/10 to-transparent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-cyan-500 flex items-center justify-center animate-pulse shadow-[0_0_20px_rgba(124,58,237,0.5)]">
                <Star size={24} className="text-white fill-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-poppins text-white">Summer Tech Sale is Live!</h3>
                <p className="text-gray-400">Get up to 40% off on premium peripherals and smart devices.</p>
              </div>
            </div>
            <Link href="/products" className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-transform flex items-center gap-2">
              Shop the Sale <ShoppingCart size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 relative z-10 bg-[#121212]/30 backdrop-blur-3xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-16">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold font-poppins mb-4"
              >
                Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Products</span>
              </motion.h2>
              <p className="text-gray-400 text-lg">Our most popular premium tech gear.</p>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-medium">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_PRODUCTS.map((product, index) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group glass-card overflow-hidden rounded-3xl border border-white/5 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(124,58,237,0.3)] bg-white/5 backdrop-blur-lg"
              >
                <div className="relative h-64 overflow-hidden bg-black/50">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    <Star size={14} className="fill-yellow-500 text-yellow-500" />
                    <span className="text-sm text-gray-400 font-medium">4.9 (128 reviews)</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 truncate text-gray-100">{product.name}</h3>
                  <div className="flex items-center justify-between mt-6">
                    <span className="font-poppins font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">${product.price}</span>
                    <button className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-primary border border-white/10 flex items-center justify-center transition-colors duration-300 group/btn">
                      <ShoppingBag size={20} className="text-gray-300 group-hover/btn:text-white transition-colors" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#121212]/30">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 font-poppins">Loved by <span className="text-gradient">Innovators</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex text-yellow-500 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-current" />)}
                </div>
                <p className="text-gray-300 mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-cyan-500 flex items-center justify-center font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

'use client';

import Link from 'next/link';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '../lib/store';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'glass-card border-none rounded-none py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center neon-glow">
            <span className="font-poppins font-bold text-xl text-white">G</span>
          </div>
          <span className="font-poppins font-bold text-xl tracking-tight hidden sm:block">
            Gulzameen
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
          <Link href="/products" className="hover:text-white transition-colors hover:text-gradient">Discover</Link>
          <Link href="/categories" className="hover:text-white transition-colors hover:text-gradient">Categories</Link>
          <Link href="/about" className="hover:text-white transition-colors hover:text-gradient">About</Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          
          <Link href="/cart" className="relative text-gray-300 hover:text-white transition-colors">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors hidden sm:block" title="User Profile">
            <User size={20} />
          </Link>


          <button className="md:hidden text-gray-300 hover:text-white transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}

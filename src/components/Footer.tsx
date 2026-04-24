'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-white/5 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                <span className="font-poppins font-bold text-sm text-white">G</span>
              </div>
              <span className="font-poppins font-bold text-lg tracking-tight text-white">
                Gulzameen
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Premium eCommerce platform delivering high-quality products with exceptional design and experience.
            </p>
          </div>
          
          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-primary transition-colors">All Products</Link></li>
              <li><Link href="/categories/electronics" className="hover:text-primary transition-colors">Electronics</Link></li>
              <li><Link href="/categories/fashion" className="hover:text-primary transition-colors">Fashion</Link></li>
              <li><Link href="/categories/home" className="hover:text-primary transition-colors">Home & Living</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-primary transition-colors">Shipping Returns</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-poppins font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers, free giveaways, and updates.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#0f0f0f] border border-white/10 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:border-primary transition-colors"
              />
              <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-r-lg text-sm transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gulzameen. All rights reserved.
          </p>
          <div className="flex gap-4 text-gray-500 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

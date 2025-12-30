'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ShoppingCart,
  User,
  Heart,
  Search,
  Menu,
  X,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* ================= TOP BAR ================= */}
      <div className="bg-[#0f4b47] text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold">
              <span className="bg-white text-[#0f4b47] px-2 py-1 rounded">
                WIN
              </span>
              <span className="ml-1">store</span>
            </div>
          </Link>

          {/* Search */}
          <div className="flex-1 hidden md:block">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center bg-white rounded-md overflow-hidden">
                <button className="flex items-center gap-2 px-4 text-sm text-gray-600">
                  <Menu size={16} />
                  <span>All categories</span>
                </button>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="flex-1 px-4 py-3 focus:outline-none text-gray-700"
                />
                <button className="px-4 text-black">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 ml-auto">
            <User size={18} />
            <Heart size={18} />
            <Link href="/cart" className="relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-teal-800 rounded-full w-4 h-4 text-[10px] flex items-center justify-center font-bold">
                3
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-3">
          <div className="flex items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              className="flex-1 px-3 py-2 text-gray-700 focus:outline-none"
            />
            <button className="px-3 text-black">
              <Search size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM NAV ================= */}
      <div className="bg-[#0b3937] text-white hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6 text-md">
          <button className="flex items-center gap-2">
            <Menu size={18} />
            Browse By Category
          </button>

          <nav className="flex gap-4 text-gray-200">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/easy-monthly" className="hover:text-white">
              Easy Monthly Installments
            </Link>
            <Link href="/shop" className="hover:text-white">Shop by Brands</Link>
            <Link href="/vendor" className="hover:text-white">
              Become a Vendor
            </Link>
          </nav>

          <div className="ml-auto flex gap-4 text-gray-200  ">
            <Facebook size={20} />
            <Twitter size={20} />
            <Linkedin size={20} />
            <Instagram size={20} />
          </div>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="md:hidden bg-[#0b3937] text-white px-4 py-4 space-y-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/easy-monthly" className="block">
            Easy Monthly Installments
          </Link>
          <Link href="/shop" className="block">Shop by Brands</Link>
          <Link href="/vendor" className="block">Become a Vendor</Link>

          <div className="flex gap-4 pt-3">
            <Facebook size={18} />
            <Twitter size={18} />
            <Linkedin size={18} />
            <Instagram size={18} />
          </div>
        </div>
      )}
    </header>
  );
}

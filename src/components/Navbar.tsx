"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto relative flex items-center justify-between w-full max-w-5xl bg-[#002277]/80 backdrop-blur-xl border-2 border-[#004ee6] rounded-2xl px-6 py-2 shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
        {/* Logo Icon & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 bg-white rounded-lg p-1 overflow-hidden transition-transform group-hover:rotate-12">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/icon.webp`}
              alt="ACM Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-white">ACM<span className="text-[#FFD100]">JU</span></span>
            <span className="text-[8px] font-bold uppercase tracking-widest text-[#00e5ff]">Student Chapter</span>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-white">
            <Link href="/events" className="hover:text-[#FFD100] transition-colors">Events</Link>
            <Link href="/sessions" className="hover:text-[#FFD100] transition-colors">Sessions</Link>
            <Link href="/committee" className="hover:text-[#FFD100] transition-colors">Committee</Link>
            <Link href="/join" className="px-4 py-2 bg-[#FFD100] text-[#002277] rounded-lg hover:bg-white transition-all shadow-[4px_4px_0_rgba(0,0,0,0.2)]">Join</Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/20 bg-white/10 text-white transition hover:border-white/40 md:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-3 rounded-3xl bg-slate-950/95 border border-slate-700/90 p-4 shadow-2xl backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col gap-3">
                <Link
                  href="/events"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  Events
                </Link>
                <Link
                  href="/sessions"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  Sessions
                </Link>
                <Link
                  href="/committee"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-widest text-white transition hover:bg-white/10"
                >
                  Committee
                </Link>
                <Link
                  href="/join"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl bg-[#FFD100] px-4 py-3 text-sm font-black uppercase tracking-widest text-[#002277] transition hover:bg-white"
                >
                  Join
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
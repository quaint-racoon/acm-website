"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="pointer-events-auto flex items-center justify-between w-full max-w-5xl bg-[#002277]/80 backdrop-blur-xl border-2 border-[#004ee6] rounded-2xl px-6 py-2 shadow-[8px_8px_0_rgba(0,0,0,0.2)]">
        
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

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-black uppercase tracking-widest text-white">
          <Link href="/events" className="hover:text-[#FFD100] transition-colors">Events</Link>
          <Link href="/sessions" className="hover:text-[#FFD100] transition-colors">Sessions</Link>
          <Link href="/committee" className="hover:text-[#FFD100] transition-colors">Committee</Link>
          <Link href="/join" className="px-4 py-2 bg-[#FFD100] text-[#002277] rounded-lg hover:bg-white transition-all shadow-[4px_4px_0_rgba(0,0,0,0.2)]">Join</Link>
        </div>
      </div>
    </motion.nav>
  );
}
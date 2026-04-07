"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full px-6 pt-20">
      
      {/* Navy/Yellow Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-yellow-500/15 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      
      <div className="max-w-4xl mx-auto w-full z-10 text-center mt-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(234,179,8,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          University of Jordan
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white"
        >
          Advancing <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">
            Computing.
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
        >
          The premier computer science community at JU. Join us to build your network, upgrade your skills, and bridge the gap between academia and the tech industry.
        </motion.p>

        {/* Functional Buttons using Next.js Link */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/join"
            className="w-full sm:w-auto px-8 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-[#0a1428] font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] hover:-translate-y-1 text-center"
          >
            Become a Member
          </Link>
          
          <Link 
            href="/events"
            className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-slate-600 text-slate-300 font-semibold rounded-lg transition-all duration-300 hover:bg-[#0d1b2a] hover:text-yellow-400 hover:border-yellow-500/50 text-center"
          >
            Upcoming Events
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function JoinPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Mock submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to a database or Google Sheet via API
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: The Pitch */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="border-l-4 border-[#FFD100] pl-6 lg:sticky lg:top-32"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
              Level Up <br/>
              <span className="text-[#FFD100]">Your Career.</span>
            </h1>
            <p className="text-blue-200 text-lg font-medium mb-8 max-w-md">
              Join the largest network of student developers, designers, and tech enthusiasts at the University of Jordan.
            </p>

            <div className="flex flex-col gap-6">
              <div className="bg-[#002277] border-2 border-[#004ee6] p-5 rounded-xl shadow-[6px_6px_0_rgba(0,0,0,0.15)]">
                <span className="text-[#00e5ff] font-black uppercase tracking-widest text-sm mb-1 block">01 / Network</span>
                <h3 className="text-white font-bold text-xl">Industry Connections</h3>
                <p className="text-blue-200 text-sm mt-2">Meet alumni and recruiters from top tech companies across the region.</p>
              </div>
              
              <div className="bg-[#002277] border-2 border-[#004ee6] p-5 rounded-xl shadow-[6px_6px_0_rgba(0,0,0,0.15)]">
                <span className="text-[#00e5ff] font-black uppercase tracking-widest text-sm mb-1 block">02 / Build</span>
                <h3 className="text-white font-bold text-xl">Exclusive Hackathons</h3>
                <p className="text-blue-200 text-sm mt-2">Get priority registration to our build-nights and competitive programming events.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#002277] border-2 border-[#004ee6] rounded-2xl p-8 md:p-10 shadow-[12px_12px_0_rgba(0,0,0,0.15)]"
          >
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-[#00e5ff]/20 text-[#00e5ff] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-[#00e5ff]">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tight mb-4">Application Sent!</h2>
                <p className="text-blue-200 font-medium text-lg">Welcome to the club. Keep an eye on your university email for the next steps.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-2">Member Application</h2>
                <p className="text-[#00e5ff] font-bold text-sm uppercase tracking-widest mb-8">2026 Academic Year</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#FFD100] font-bold uppercase tracking-widest text-xs">First Name</label>
                      <input required type="text" className="bg-[#003DA5] border-2 border-[#004ee6] rounded-lg px-4 py-3 text-white font-medium focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="e.g. Hashem" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#FFD100] font-bold uppercase tracking-widest text-xs">Last Name</label>
                      <input required type="text" className="bg-[#003DA5] border-2 border-[#004ee6] rounded-lg px-4 py-3 text-white font-medium focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="e.g. Owaida" />
                    </div>
                  </div>

                  {/* University ID & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-[#FFD100] font-bold uppercase tracking-widest text-xs">University ID</label>
                      <input required type="text" className="bg-[#003DA5] border-2 border-[#004ee6] rounded-lg px-4 py-3 text-white font-medium focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="0123456" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[#FFD100] font-bold uppercase tracking-widest text-xs">University Email</label>
                      <input required type="email" className="bg-[#003DA5] border-2 border-[#004ee6] rounded-lg px-4 py-3 text-white font-medium focus:outline-none focus:border-[#00e5ff] transition-colors" placeholder="stu123@ju.edu.jo" />
                    </div>
                  </div>

                  {/* Major Selection */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#FFD100] font-bold uppercase tracking-widest text-xs">Major</label>
                    <select required className="bg-[#003DA5] border-2 border-[#004ee6] rounded-lg px-4 py-3 text-white font-medium focus:outline-none focus:border-[#00e5ff] transition-colors appearance-none cursor-pointer">
                      <option value="" disabled selected>Select your major...</option>
                      <option value="cs">Computer Science</option>
                      <option value="cis">Computer Information Systems</option>
                      <option value="ce">Computer Engineering</option>
                      <option value="ds">Data Science</option>
                      <option value="ai">Artificial Intelligence</option>
                      <option value="cys">Cybersecurity</option>
                      <option value="bit">Business Information Technology</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Why Join */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[#FFD100] font-bold uppercase tracking-widest text-xs">What are you hoping to get out of ACM?</label>
                    <textarea rows={4} className="bg-[#003DA5] border-2 border-[#004ee6] rounded-lg px-4 py-3 text-white font-medium focus:outline-none focus:border-[#00e5ff] transition-colors resize-none" placeholder="Workshops, networking, hackathons..."></textarea>
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="mt-4 w-full py-5 bg-[#FFD100] text-[#002277] font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[6px_6px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_rgba(0,0,0,0)] hover:translate-y-1 hover:translate-x-1 text-lg">
                    Submit Application
                  </button>
                </form>
              </>
            )}
          </motion.div>

        </div>
      </div>
    </main>
  );
}
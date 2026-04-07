"use client";
import { motion } from "framer-motion";

const upcomingEvents = [
  {
    id: 1,
    title: "Intro to Machine Learning",
    date: "24",
    month: "OCT",
    time: "5:00 PM",
    location: "KAFD Lab 3",
    type: "Workshop",
    status: "Registration Open",
  },
  {
    id: 2,
    title: "Open Source Hack Night",
    date: "02",
    month: "NOV",
    time: "6:00 PM",
    location: "IT Building, Main Hall",
    type: "Hackathon",
    status: "Coming Soon",
  },
  {
    id: 3,
    title: "Cracking the Coding Interview",
    date: "15",
    month: "NOV",
    time: "4:00 PM",
    location: "Auditorium B",
    type: "Panel",
    status: "Coming Soon",
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-16 border-l-4 border-[#FFC700] pl-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase"
          >
            Chapter <span className="text-[#FFC700]">Events</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 mt-4 text-lg max-w-2xl"
          >
            Workshops, hackathons, and tech talks designed to bridge the gap between your coursework and the industry.
          </motion.p>
        </div>

        {/* Events List */}
        <div className="flex flex-col gap-6">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              // Deep blue card to contrast with the vibrant blue background
              className="group relative bg-[#002277]/80 backdrop-blur-md border-2 border-[#004ee6] hover:border-[#FFD100] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col md:flex-row shadow-[8px_8px_0_rgba(0,0,0,0.15)]"
            >
              {/* Date Block - Punchy Yellow */}
              <div className="bg-[#FFD100] text-[#002277] flex md:flex-col items-center justify-center p-6 md:w-48 shrink-0 gap-2 md:gap-0">
                <span className="text-sm font-black tracking-widest uppercase opacity-90">{event.month}</span>
                <span className="text-5xl md:text-6xl font-black tracking-tighter leading-none">{event.date}</span>
              </div>

              {/* Event Details */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  {/* Cyan / Light Blue Tags */}
                  <span className="px-3 py-1 bg-[#00e5ff]/20 text-[#00e5ff] text-xs font-bold uppercase tracking-wider rounded-md border border-[#00e5ff]/40">
                    {event.type}
                  </span>
                  <span className={`text-xs font-bold uppercase tracking-wider ${event.status === 'Registration Open' ? 'text-[#FFD100]' : 'text-blue-300'}`}>
                    • {event.status}
                  </span>
                </div>
                
                {/* Yellow Title on Hover */}
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 group-hover:text-[#FFD100] transition-colors tracking-tight">
                  {event.title}
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm text-blue-200 font-medium">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#00e5ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    {event.location}
                  </div>
                </div>
              </div>

              {/* Action Button Area */}
              <div className="p-6 md:p-8 flex items-center justify-end md:border-l border-[#004ee6] md:w-64 shrink-0">
                <button className="w-full py-4 px-6 bg-[#00e5ff] hover:bg-[#FFD100] text-[#002277] font-black uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[4px_4px_0_rgba(0,0,0,0.2)] hover:shadow-[0_0_0_rgba(0,0,0,0)] hover:translate-y-1 hover:translate-x-1">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
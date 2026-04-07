"use client";
import { motion } from "framer-motion";

const sessionsData = [
  {
    title: "Web Dev Bootcamp",
    status: "Active",
    week: "Week 4 of 8",
    topic: "React State Management",
    instructor: "Lina Hassan",
    day: "Tuesdays",
  },
  {
    title: "Competitive Programming",
    status: "Active",
    week: "Ongoing",
    topic: "Dynamic Programming",
    instructor: "Omar Tariq",
    day: "Thursdays",
  },
  {
    title: "UI/UX Foundations",
    status: "Upcoming",
    week: "Starts Nov 10",
    topic: "Figma Prototyping",
    instructor: "Kareem Zaid",
    day: "Mondays",
  }
];

export default function SessionsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-16 border-l-4 border-[#FFD100] pl-6">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase"
          >
            Study <span className="text-[#FFD100]">Sessions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 mt-4 text-lg max-w-2xl font-medium"
          >
            Recurring technical tracks designed to take you from beginner to advanced throughout the semester.
          </motion.p>
        </div>

        {/* Sessions List */}
        <div className="flex flex-col gap-6">
          {sessionsData.map((session, index) => (
            <motion.div
              key={session.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#002277]/90 border-2 border-[#004ee6] hover:border-[#00e5ff] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all shadow-[8px_8px_0_rgba(0,0,0,0.15)]"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border ${
                    session.status === 'Active' 
                      ? 'bg-[#00e5ff]/20 text-[#00e5ff] border-[#00e5ff]/40'
                      : 'bg-[#FFD100]/20 text-[#FFD100] border-[#FFD100]/40'
                  }`}>
                    {session.status}
                  </span>
                  <span className="text-sm font-bold text-blue-300 uppercase tracking-widest">
                    {session.day}
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2 tracking-tight">{session.title}</h3>
                <p className="text-blue-200 font-medium">
                  <span className="text-[#FFD100] font-bold">Current Topic:</span> {session.topic}
                </p>
              </div>

              <div className="w-full md:w-auto bg-[#001b5e] border border-[#004ee6] p-4 rounded-xl flex flex-col items-start md:items-end min-w-[200px]">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Timeline</span>
                <span className="text-xl font-black text-white mb-3">{session.week}</span>
                
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-1">Instructor</span>
                <span className="text-sm font-bold text-[#00e5ff]">{session.instructor}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
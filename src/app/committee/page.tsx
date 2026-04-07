"use client";
import { motion } from "framer-motion";
import { HandStar, Squiggle } from "@/components/Decorations";
// The ACTUAL 2026 Committee Roster pulled straight from the graphics
const teamMembers = [
  { name: "Zaina Abusneneh", role: "President", year: "3rd Year", major: "Computer Science", initials: "ZA" },
  { name: "Ammar Abualrob", role: "Vice President", year: "2nd Year", major: "Data Science", initials: "AA" },
  { name: "Batool Alshawabkeh", role: "Treasurer", year: "3rd Year", major: "Computer Information Systems", initials: "BA" },
  { name: "Sara Alswealmeen", role: "Head of PS", year: "3rd Year", major: "Computer Engineering", initials: "SA" },
  { name: "Salma Qatanani", role: "Head of Media", year: "2nd Year", major: "Data Science", initials: "SQ" },
  { name: "Layal Hamdan", role: "Head of Events", year: "2nd Year", major: "Computer Information Systems", initials: "LH" },
  { name: "Wafaa Assaf", role: "Head of HR", year: "3rd Year", major: "Computer Science", initials: "WA" },
  { name: "Batool Omar", role: "Head of PR", year: "2nd Year", major: "Marketing", initials: "BO" }
];

export default function CommitteePage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="mb-16 border-l-4 border-[#00e5ff] pl-6">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase"
          >
            Meet The <span className="text-[#00e5ff]">Committee</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 mt-4 text-lg max-w-2xl font-medium"
          >
            The driving force behind JU's premier tech community for 2026.
          </motion.p>
        </div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              /* This 'relative' class is the key so the stars stay attached to the card */
              className="group relative bg-[#002277] border-2 border-[#004ee6] hover:border-[#FFD100] rounded-2xl overflow-hidden transition-all duration-300 shadow-[8px_8px_0_rgba(0,0,0,0.15)] hover:shadow-[12px_12px_0_rgba(255,209,0,0.3)] hover:-translate-y-2 flex flex-col"
            >
              {/* --- HAND-DRAWN DECORATIONS (Vary based on index) --- */}
              {index === 0 && <HandStar className="absolute -top-2 -right-2 z-20 rotate-12" color="#FFD100" />}
              {index === 2 && <HandStar className="absolute -bottom-2 -left-2 z-20 -rotate-12" color="#00e5ff" />}
              {index === 4 && <Squiggle className="absolute top-2 right-4 z-20 opacity-60" />}
              {index === 7 && <HandStar className="absolute top-1/2 -right-4 z-20 scale-150" color="#FFD100" />}

              {/* --- REST OF THE CARD CONTENT --- */}
              <div className="h-56 bg-[#003DA5] border-b-2 border-[#004ee6] flex items-center justify-center relative overflow-hidden group-hover:bg-[#004ee6] transition-colors">
                <span className="text-7xl font-black text-[#002277] opacity-50 group-hover:opacity-100 group-hover:text-[#FFD100] transition-all">
                  {member.initials}
                </span>
              </div>

              <div className="p-6 text-center flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-black text-white mb-1 tracking-tight uppercase">{member.name}</h3>
                <p className="text-[#FFD100] font-black text-xl uppercase tracking-wider mb-4">{member.role}</p>

                <div className="mt-auto pt-4 border-t border-[#004ee6] flex flex-col gap-1">
                  <span className="text-[#00e5ff] text-xs font-bold uppercase tracking-widest">{member.year}</span>
                  <span className="text-blue-200 text-xs font-semibold uppercase tracking-wider">{member.major}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}
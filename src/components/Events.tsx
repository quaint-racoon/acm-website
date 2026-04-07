"use client";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";

const eventsData = [
  {
    id: 1,
    title: "Intro to Machine Learning",
    date: "OCT 24",
    time: "5:00 PM - 7:00 PM",
    location: "KAFD Lab 3",
    description: "Build your first neural network from scratch using Python. No prior AI experience required.",
    tags: ["AI", "Python"]
  },
  {
    id: 2,
    title: "Open Source Hack Night",
    date: "NOV 02",
    time: "6:00 PM - 10:00 PM",
    location: "IT Building, Main Hall",
    description: "Contribute to real-world open source projects. Pizza and Red Bull provided.",
    tags: ["Hackathon", "Git"]
  },
  {
    id: 3,
    title: "Cracking the Coding Interview",
    date: "NOV 15",
    time: "4:00 PM - 6:00 PM",
    location: "Auditorium B",
    description: "Alumni panel featuring engineers from Google, Amazon, and local startups sharing tech interview secrets.",
    tags: ["Career", "Algorithms"]
  }
];

export default function Events() {
  return (
    <section className="relative py-24 bg-slate-950 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Upcoming <span className="text-blue-500">Events.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Level up your skills, meet industry professionals, and build cool stuff with the JU ACM community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SpotlightCard className="h-full p-8 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-blue-400 font-bold tracking-widest text-sm bg-blue-500/10 px-3 py-1 rounded-md">
                    {event.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
                
                <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
                  {event.description}
                </p>
                
                <div className="mt-auto pt-6 border-t border-slate-800">
                  <div className="flex flex-col gap-2 text-sm text-slate-300">
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                      {event.time}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {event.location}
                    </span>
                  </div>
                  
                  <div className="flex gap-2 mt-4">
                    {event.tags.map(tag => (
                      <span key={tag} className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
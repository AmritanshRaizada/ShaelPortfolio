"use client";

import { motion } from "framer-motion";
import GradientBlinds from "../ui/GradientBlinds";

const experience = [
  {
    company: "Vision and Solutions",
    role: "UI/UX Designer Executive",
    date: "Current",
    description: "Leading design initiatives and creating user-centric solutions for diverse client projects."
  },
  {
    company: "KKRF GROUP",
    role: "UI/UX Designer",
    date: "Previous",
    description: "Designed intuitive interfaces and improved user experience across digital platforms."
  },
  {
    company: "TGC Animation and Multimedia",
    role: "UI/UX Designer",
    date: "Previous",
    description: "Developed visual designs and interactive prototypes for multimedia projects."
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 bg-black/50 z-10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GradientBlinds
          gradientColors={['#FF9FFC', '#5227FF']}
          angle={30}
          noise={0}
          blindCount={18}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-center">
          Experience <span className="text-gray-500">Timeline.</span>
        </h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-10 space-y-12 md:space-y-20">
          {experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-16"
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-purple-500 ring-4 ring-black" />
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-2xl font-bold text-white">{item.company}</h3>
                <span className="text-sm font-mono text-gray-500">{item.date}</span>
              </div>
              
              <h4 className="text-lg text-purple-400 mb-4">{item.role}</h4>
              <p className="text-gray-400 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

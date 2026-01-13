"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "AI Models Integrations", value: "15+" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative z-10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Left Column: Intro */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">
              Designing for <br /> 
              <span className="text-gray-500">User Impact.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a UI/UX Designer Executive passionate about creating intuitive and visually compelling digital experiences. 
              My expertise lies in translating complex user needs into elegant, functional designs.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              From product design and branding to visual storytelling, I focus on a user-first approach to solve problems and elevate brands.
            </p>
          </div>

          {/* Right Column: Stats & Highlights */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
            
            {/* Additional 'Tech' block to balance the grid */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.5 }}
               className="p-6 border border-white/10 rounded-2xl bg-gradient-to-br from-purple-900/20 to-blue-900/20 flex flex-col justify-center"
            >
              <h3 className="text-xl font-bold text-white mb-2">Tech Stack</h3>
              <p className="text-sm text-gray-400">Next.js • PyTorch • Python • TypeScript</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

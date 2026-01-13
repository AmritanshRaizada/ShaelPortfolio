"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import FloatingShapes from "../ui/FloatingShapes";

const skillCategories = [
  {
    title: "Design Services",
    skills: ["Interaction Design", "User Experience Design (UED)", "Web Design", "Visual Design", "UX Research"],
  },
  {
    title: "Branding & Visuals",
    skills: ["Graphic Design", "Presentation Design", "Brand Design"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 relative z-10 overflow-hidden">
      <FloatingShapes />
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            My <span className="text-gray-500">Services.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Comprehensive design solutions tailored to elevate your brand and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-white border-l-2 border-purple-500 pl-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="relative group p-[1px] rounded-lg overflow-hidden"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className={cn(
                      "relative px-4 py-2 bg-[#111] rounded-lg border border-white/5",
                      "text-gray-300 group-hover:text-white transition-colors z-10"
                    )}>
                      {skill}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

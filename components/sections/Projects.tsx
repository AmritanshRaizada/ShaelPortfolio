"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import FloatingShapes from "../ui/FloatingShapes";

const projects = [
  {
    title: "EcoMind AI",
    category: "AI / Sustainability",
    description: "An AI-powered platform for tracking and reducing carbon footprints using satellite imagery and machine learning models.",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    links: { demo: "#", code: "#" },
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Nexus Stream",
    category: "Real-time Architecture",
    description: "High-throughput data streaming service capable of handling millions of events per second with sub-millisecond latency.",
    tech: ["Go", "Kafka", "gRPC", "Kubernetes"],
    links: { demo: "#", code: "#" },
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    title: "Sentience",
    category: "NLP Research",
    description: "Open-source LLM finetuning framework designed for efficient parameter-efficient tuning on consumer hardware.",
    tech: ["PyTorch", "HuggingFace", "FastAPI", "Next.js"],
    links: { demo: "#", code: "#" },
    color: "from-purple-500/20 to-pink-500/20"
  },
];

export function Projects() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-[#0b0b0b] relative overflow-hidden">
      <FloatingShapes />
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
              Selected <span className="text-gray-500">Works.</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl">
              Highlights from my journey in building intelligent systems.
            </p>
          </div>
          <Link href="#" className="text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors">
            View Github Profile
          </Link>
        </motion.div>

        <div className="flex flex-col gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={cn(
                "relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden cursor-pointer",
                "bg-gradient-to-br border border-white/5",
                project.color
              )}>
                {/* Overlay content */}
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 group-hover:from-black">
                  <div className="transform transition-transform duration-500 md:translate-y-8 group-hover:translate-y-0">
                    <div className="flex items-center justify-between mb-2">
                       <span className="text-purple-400 font-mono text-sm tracking-wider uppercase">{project.category}</span>
                       <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100">
                          <Link href={project.links.code} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-colors">
                            <Github size={20} />
                          </Link>
                          <Link href={project.links.demo} className="p-2 bg-white/10 rounded-full hover:bg-white text-white hover:text-black transition-colors">
                            <ArrowUpRight size={20} />
                          </Link>
                       </div>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-bold font-heading text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-300 text-lg max-w-2xl mb-6 opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 opacity-0 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

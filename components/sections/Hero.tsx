"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Antigravity from "@/components/ui/Antigravity";

export function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Antigravity Particles */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Antigravity
          count={200}
          magnetRadius={1}
          ringRadius={10}
          waveSpeed={0.02}
          waveAmplitude={2}
          particleSize={1}
          lerpSpeed={0.08}
          color={'#7c3aed'}
          autoAnimate={true}
          particleVariance={4}
          fieldStrength={5}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 text-2xl md:text-3xl text-gray-300 mb-8 backdrop-blur-md">
            👋 Hello, I'm Salvi Sharma
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6 leading-[1.1]">
             UI/UX Designer <br />
            <span className="text-gradient">Executive</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Product Design, UX/UI & Brands | Specializing in user-first design | Visual Designer
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a 
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center"
            >
              View Work <ArrowRight size={20} />
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-white/10 transition-colors w-full sm:w-auto justify-center"
            >
              Contact Me <Mail size={20} />
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
      </motion.div>
    </section>
  );
}

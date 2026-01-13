"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import ShapeBlur from "../ui/ShapeBlur";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 flex flex-col items-center justify-center text-center relative z-10 overflow-hidden">
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 tracking-tight">
            Let's build <br />
            <span className="text-gradient">something epic.</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto mb-12">
            Open for collaborations, freelance projects, or just a chat about the future of AI.
          </p>

<div className="relative inline-block mb-12 w-36 h-36 pointer-events-auto group">
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <ShapeBlur
                  variation={0}
                  pixelRatioProp={typeof window !== 'undefined' ? window.devicePixelRatio : 1}
                  shapeSize={1.4}
                  roundness={0.5}
                  borderSize={0.05}
                  circleSize={0.5}
                  circleEdge={1}
                />
            </div>
            <Link 
              href="mailto:salvisharma2003@gmail.com"
              className="relative z-10 w-full h-full inline-flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
            >
              <Mail size={48} />
            </Link>
          </div>

          <div className="flex gap-6 justify-center">
            {[Github, Linkedin, Twitter].map((Icon, i) => (
               <Link 
                 key={i} 
                 href="#" 
                 className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black transition-all hover:scale-110"
               >
                 <Icon size={24} />
               </Link>
            ))}
          </div>
        </motion.div>

        <footer className="absolute bottom-6 text-sm text-gray-600">
          © {new Date().getFullYear()} Salvi Sharma
        </footer>
    </section>
  );
}

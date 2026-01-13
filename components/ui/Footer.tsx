"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-white/5 text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="container mx-auto px-6"
      >
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Salvi Sharma. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Designed & Built with Next.js, Tailwind, and Framer Motion.
        </p>
      </motion.div>
    </footer>
  );
}

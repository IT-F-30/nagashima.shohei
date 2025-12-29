"use client";

import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <main className="min-h-screen px-6 py-12 md:px-24 md:py-32">
      {/* Monolithic Hero Section */}
      <section className="relative flex flex-col justify-end min-h-[80vh]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-7xl"
        >
          <motion.div variants={item} className="mb-8">
            <span className="text-cyan-400 font-mono tracking-widest uppercase text-sm">
              Software Engineer / Architectural Thinker
            </span>
          </motion.div>

          <motion.h1 
            variants={item}
            className="font-syne text-7xl md:text-[10rem] leading-[0.85] font-extrabold tracking-tighter mb-12"
          >
            NAGASHIMA<br />SHOHEI
          </motion.h1>

          <motion.div 
            variants={item}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end"
          >
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
              Designing and building <span className="text-white font-medium">unforgettable</span> digital experiences. 
              Currently exploring the intersection of distributed systems and high-fidelity frontends.
            </p>

            <div className="flex flex-wrap gap-6 md:justify-end">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Mail, label: "Email", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="group flex items-center gap-2 glass px-6 py-3 rounded-full hover:bg-white/10 transition-all"
                >
                  <social.icon size={18} className="text-cyan-400" />
                  <span className="text-sm font-medium">{social.label}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Distinction Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-px bg-gradient-to-right from-cyan-500/50 via-purple-500/50 to-transparent w-full my-32 origin-left"
      />

      {/* Projects Grid Section (Placeholder for boldness) */}
      <section className="max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight mb-6">SELECTED<br />WORKS</h2>
            <p className="text-slate-500 font-medium tracking-tight">Focusing on technical depth and visual impact.</p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-1 gap-12">
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-video md:aspect-[21/9] glass rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-8 left-8 z-20">
                  <span className="text-cyan-400 font-mono text-xs mb-2 block">0{i} {"//"} SYSTEM</span>
                  <h3 className="text-3xl font-syne font-bold mb-4">Core Engine Project</h3>
                  <div className="flex gap-2">
                    {["Rust", "WebAssembly", "React"].map(tag => (
                      <span key={tag} className="text-[10px] px-2 py-1 bg-white/10 rounded uppercase tracking-widest">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ExternalLink, Download, Sparkles } from 'lucide-react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const email = "hudaraja1122@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="min-h-screen flex flex-col justify-between pt-8 pb-12 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Top Navigation */}
      <header className="flex justify-between items-center w-full py-4 border-b border-gray-100 dark:border-zinc-800/60">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center font-bold text-white shadow-sm">
            N
          </div>
          <div>
            <h1 className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm md:text-base">
              Noor Ul Huda
            </h1>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">Wah Cantt, Pakistan</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a>
          <a href="#work" className="hover:text-black dark:hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a>
        </nav>

        {/* Download Resume Button with direct download attribute */}
        <a
          href="/resume.pdf"
          download="Noor_Ul_Huda_Resume.pdf"
          className="inline-flex items-center gap-2 text-xs md:text-sm font-medium px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all shadow-sm"
        >
          <span>Download Resume</span>
          <Download size={14} />
        </a>
      </header>

      {/* Main Hero Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto py-10">
        {/* Left Column: Heading & Value Proposition */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-7"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-800/40 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={14} />
            <span>Applied ML & Systems</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-[1.12]">
            A computer science engineer with an{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              applied AI mindset
            </span>
            , turning complex models into scalable,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              intelligent systems
            </span>
            .
          </h2>

          <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
            Bridging core computer science foundations in C++ and systems programming with practical Machine Learning, Deep Learning, and autonomous multi-agent pipelines.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-950 font-medium rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              <span>{copied ? "Copied to clipboard!" : "Copy my email"}</span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium rounded-xl text-sm transition-all shadow-sm"
            >
              <span>GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Column: 3D Spline Character */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 h-[460px] md:h-[560px] w-full rounded-3xl overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-zinc-900/40 dark:to-zinc-900 border border-zinc-200/70 dark:border-zinc-800 relative shadow-inner flex items-center justify-center"
        >
          <iframe
            src="https://my.spline.design/alinaavatarpersoncharacter-jxFx4w6bmidDOLkZ5RidVoXh/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full pointer-events-auto"
            title="Interactive 3D Avatar"
          />

          <span className="absolute bottom-4 right-4 text-[11px] text-zinc-400 pointer-events-none bg-white/80 dark:bg-zinc-950/80 px-2.5 py-1 rounded-md backdrop-blur-sm border border-zinc-200/60 dark:border-zinc-800 shadow-sm">
            Interactive 3D • Move cursor to explore
          </span>
        </motion.div>
      </div>

      {/* Metrics Bar */}
      <div className="pt-8 border-t border-zinc-100 dark:border-zinc-800/60">
        <p className="text-[11px] uppercase tracking-wider font-semibold text-zinc-400 mb-6">
          A few numbers, for context
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-white">
              3.94 <span className="text-sm font-medium text-orange-500">CGPA</span>
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
              BS Computer Science
            </p>
          </div>

          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-white">
              Applied ML
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
              & Systems Engineering
            </p>
          </div>

          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-white">
              Agents + LLMs
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
              Autonomous Workflows
            </p>
          </div>

          <div>
            <h4 className="text-2xl md:text-3xl font-bold text-zinc-950 dark:text-white">
              C++ • Python
            </h4>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
              Core Algorithms & Scalability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
'use client';

import React from 'react';
import { ExternalLink, Terminal, Cpu, Database, Bot } from 'lucide-react';

const projects = [
  {
    title: "Multi-Agent Research Pipeline",
    description: "Autonomous agent system that orchestrates web synthesis, paper digestion, and automated reporting using Python & LLM workflows.",
    tags: ["Autonomous Agents", "Python", "Gradio", "Hugging Face"],
    icon: Bot,
    github: "https://github.com",
  },
  {
    title: "AI-Powered Business Intelligence (Nexus BI)",
    description: "Analytical intelligence backend pairing FastAPI and DuckDB with natural language querying for automated dataset insight discovery.",
    tags: ["DuckDB", "FastAPI", "Next.js", "Python"],
    icon: Database,
    github: "https://github.com",
  },
  {
    title: "TenderLens AI Procurement Monitor",
    description: "Automated tender monitoring and intelligence system utilizing n8n workflows, Next.js, and Supabase for real-time opportunity classification.",
    tags: ["Workflow Automation", "Supabase", "Next.js", "AI Logic"],
    icon: Terminal,
    github: "https://github.com",
  },
  {
    title: "OS Simulator & Core Algorithms",
    description: "Custom system simulator in C++ featuring multi-level CPU scheduling, virtual memory management, and graph-based shortest-path routing.",
    tags: ["C++", "OS Internals", "Graph Algorithms", "Data Structures"],
    icon: Cpu,
    github: "https://github.com",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20 px-6 md:px-16 max-w-7xl mx-auto border-t border-zinc-100 dark:border-zinc-800">
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Featured Engineering & AI Projects
        </h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Architected with clean backends, robust algorithms, and modern agentic workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => {
          const Icon = proj.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-zinc-50/70 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-zinc-800 flex flex-col justify-between hover:border-orange-500/40 dark:hover:border-orange-500/40 transition-all hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-6">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {proj.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-200/50 dark:border-zinc-800 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {proj.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white p-1 transition-colors"
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
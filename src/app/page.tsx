"use client";

import { motion } from "framer-motion";
import { Github, Mail, Server, Network, Database, Terminal } from "lucide-react";

export default function Home() {
  const skills = [
    { category: "Backend", items: ["Go", "Python", "Node.js", "REST API"] },
    { category: "Infrastructure", items: ["Docker", "Linux", "AWS", "Nginx"] },
    { category: "Network", items: ["TCP/IP", "HTTP", "DNS", "Load Balancing"] },
    { category: "Database", items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"] },
  ];

  return (
    <main className="min-h-screen px-6 py-16 md:px-12 lg:px-24 max-w-4xl mx-auto">
      {/* Network Grid Background */}
      <div className="network-grid" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-4">
          <Server size={20} className="text-sky-500" />
          <span className="mono text-neutral-400">Backend Engineer</span>
        </div>
        <h1 className="font-syne text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Nagashima Shohei
        </h1>
        <div className="accent-line" />
      </motion.header>

      {/* About */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4 flex items-center gap-2">
          <Terminal size={14} />
          About
        </h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          バックエンドエンジニアとして、サーバーサイド開発やAPI設計に取り組んでいます。
          また、ネットワークエンジニアリングの研究経験もあり、
          分散システムやネットワークプロトコルに興味を持っています。
        </p>
        <p className="text-neutral-500 text-sm">
          信頼性が高く、スケーラブルなシステムの構築を目指しています。
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6 flex items-center gap-2">
          <Database size={14} />
          Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.category} className="card p-5">
              <h3 className="font-medium text-neutral-700 mb-3 flex items-center gap-2">
                {group.category === "Backend" && <Server size={14} className="text-sky-500" />}
                {group.category === "Infrastructure" && <Terminal size={14} className="text-sky-500" />}
                {group.category === "Network" && <Network size={14} className="text-sky-500" />}
                {group.category === "Database" && <Database size={14} className="text-sky-500" />}
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="mono px-2.5 py-1 text-xs bg-neutral-50 text-neutral-600 rounded border border-neutral-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-6 flex items-center gap-2">
          <Network size={14} />
          Experience
        </h2>
        <div className="space-y-4">
          <div className="card p-5">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-neutral-800">ネットワーク研究</h3>
              <span className="mono text-xs text-neutral-400">Research</span>
            </div>
            <p className="text-sm text-neutral-500">
              ネットワークプロトコルの最適化や分散システムに関する研究に携わりました。
            </p>
          </div>
          <div className="card p-5">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-medium text-neutral-800">バックエンド開発</h3>
              <span className="mono text-xs text-neutral-400">Development</span>
            </div>
            <p className="text-sm text-neutral-500">
              REST APIの設計・実装、マイクロサービスアーキテクチャの構築経験。
            </p>
          </div>
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">
          Contact
        </h2>
        <div className="flex gap-4">
          <a
            href="https://github.com/it-f-30"
            className="flex items-center gap-2 text-neutral-500 hover:text-sky-600 transition-colors"
          >
            <Github size={18} />
            <span className="text-sm">GitHub</span>
          </a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="pt-8 border-t border-neutral-200">
        <p className="text-xs text-neutral-400 mono">
          © 2025 Nagashima Shohei
        </p>
      </footer>
    </main>
  );
}

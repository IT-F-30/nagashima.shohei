"use client";

import { motion } from "framer-motion";
import { Github, Server, Network, Database, Terminal, Cpu } from "lucide-react";

export default function Home() {
  const skills = [
    { category: "Backend", items: ["Docker", "Linux", "Cloudinit"] },
    { category: "Language", items: ["Rust", "Go", "Python", "TypeScript"] },
    { category: "Homelab", items: ["Proxmox", "Kubernetes"] },
    { category: "OnPremise", items: ["NextCloud", "immich", "Asterisk"] },
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
          <span className="mono text-neutral-400">Engineer</span>
        </div>
        <h1 className="font-syne text-3xl md:text-4xl font-bold tracking-tight mb-3">
          長島 昇平
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
          プログラマーとしてまだ駆け出しですが色々なコンテストなどに意欲的に参加して数多くの賞を受賞しました。
          最近では、バックエンド開発に興味を持ち、RustやGoを主に使用して開発を行っています。
        </p>
        <p className="text-neutral-500 text-sm">
          新参者ですが色々なことに意欲的に参加してネットワークエンジニアになることを目指しています。
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
                {group.category === "Backend" && (
                  <Server size={14} className="text-sky-500" />
                )}
                {group.category === "Language" && (
                  <Terminal size={14} className="text-sky-500" />
                )}
                {group.category === "Homelab" && (
                  <Cpu size={14} className="text-sky-500" />
                )}
                {group.category === "OnPremise" && (
                  <Network size={14} className="text-sky-500" />
                )}
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
            <a
              href="https://jr.mitou.org/projects/2025/nextrouter"
              className="text-sm text-neutral-500"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="mono text-[10px] px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded border border-amber-100 font-bold">
                    未踏ジュニア
                  </span>
                  <span className="mono text-[10px] px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded border border-amber-100 font-bold">
                    2025年度クリエーター
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-3 mr-auto">
                  <span className="mono text-[10px] px-1.5 py-0.5 bg-neutral-50 text-neutral-500 rounded border border-neutral-100">
                    Rust
                  </span>
                  <span className="mono text-[10px] px-1.5 py-0.5 bg-neutral-50 text-neutral-500 rounded border border-neutral-100">
                    Golang
                  </span>
                </div>
                <span className="mono text-xs text-neutral-400">Research</span>
              </div>
              <p className="text-sm text-neutral-500 mb-3">
                複数の光回線を束ねて大規模ネットワークの高速化を実現する次世代ルータ{" "}
                <b>NextRouter</b> を開発しました
              </p>
            </a>
          </div>
          <div className="card p-5">
            <a
              href="https://zenjyocon.jp/"
              className="text-sm text-neutral-500"
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="mono text-[10px] px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded border border-amber-100 font-bold">
                    第1回全国情報教育コンテスト
                  </span>
                  <span className="mono text-[10px] px-1.5 py-0.5 bg-amber-50 text-amber-600 rounded border border-amber-100 font-bold">
                    プログラミング技術 優秀賞
                  </span>
                </div>
                <div className="flex items-center gap-2 ml-3 mr-auto">
                  <span className="mono text-[10px] px-1.5 py-0.5 bg-neutral-50 text-neutral-500 rounded border border-neutral-100">
                    Rust
                  </span>
                  <span className="mono text-[10px] px-1.5 py-0.5 bg-neutral-50 text-neutral-500 rounded border border-neutral-100">
                    Python
                  </span>
                </div>
                <span className="mono text-xs text-neutral-400">
                  Development
                </span>
              </div>
              <p className="text-sm text-neutral-500">
                手の動きをマウスの動きに変換するソフトウェア{" "}
                <b>VirtualMouse-Aerial</b> を開発しました
              </p>
            </a>
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
        <p className="text-xs text-neutral-400 mono">© 2025 Nagashima Shohei</p>
      </footer>
    </main>
  );
}

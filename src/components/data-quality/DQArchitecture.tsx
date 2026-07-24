"use client";

import { motion } from "framer-motion";
import { Server } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { DQ_ARCHITECTURE } from "@/lib/data-quality-content";

export default function DQArchitecture() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Server className="w-3.5 h-3.5" />
            {DQ_ARCHITECTURE.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {DQ_ARCHITECTURE.title}
            <span className="gradient-text">{DQ_ARCHITECTURE.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{DQ_ARCHITECTURE.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#14112a] border border-white/10 p-8"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {DQ_ARCHITECTURE.blocks.map((block) => (
              <div
                key={block.label}
                className="rounded-xl bg-white/[0.04] border border-white/10 p-4"
              >
                <div className="text-[11px] tracking-[0.08em] uppercase text-gray-500 mb-2">
                  {block.label}
                </div>
                <div className="text-sm text-gray-200 leading-relaxed">
                  {block.items}
                </div>
              </div>
            ))}
          </div>

          <h4 className="text-sm font-bold text-white mb-2">
            Documented integrations
          </h4>
          <p className="text-sm text-gray-400">
            {DQ_ARCHITECTURE.integrations}. Explore{" "}
            <Link
              href="/platform/etl"
              className="text-violet-400 hover:text-violet-300"
            >
              ETL
            </Link>
            ,{" "}
            <Link
              href="/platform/data-masking"
              className="text-violet-400 hover:text-violet-300"
            >
              Data Masking
            </Link>
            , and{" "}
            <Link
              href="/platform/agentic-ai"
              className="text-violet-400 hover:text-violet-300"
            >
              Agentic AI
            </Link>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

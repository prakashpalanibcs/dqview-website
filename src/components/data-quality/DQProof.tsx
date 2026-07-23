"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { DQ_PROOF } from "@/lib/data-quality-content";

export default function DQProof() {
  return (
    <section id="proof" className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Award className="w-3.5 h-3.5" />
            {DQ_PROOF.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {DQ_PROOF.title}
            <span className="gradient-text">{DQ_PROOF.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{DQ_PROOF.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8"
        >
          {DQ_PROOF.stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center rounded-xl bg-surface border border-white/5 p-5"
            >
              <div className="text-3xl font-extrabold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-gray-400 font-semibold mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href={DQ_PROOF.ctaHref}
            className="text-violet-400 hover:text-violet-300 font-semibold text-sm transition-colors"
          >
            {DQ_PROOF.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}

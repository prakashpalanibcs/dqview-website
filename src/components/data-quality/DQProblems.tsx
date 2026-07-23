"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { DQ_PROBLEMS } from "@/lib/data-quality-content";

export default function DQProblems() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-medium mb-4 border border-orange-500/20">
            <AlertTriangle className="w-3.5 h-3.5" />
            {DQ_PROBLEMS.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {DQ_PROBLEMS.title}
            <span className="gradient-text">{DQ_PROBLEMS.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{DQ_PROBLEMS.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {DQ_PROBLEMS.items.map((problem, index) => (
            <motion.div
              key={problem.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl bg-surface border border-white/5 p-6"
            >
              <div className="text-sm font-extrabold text-orange-400 tracking-wider mb-2">
                {problem.number}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

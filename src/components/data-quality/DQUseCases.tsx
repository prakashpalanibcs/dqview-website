"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { DQ_USE_CASES } from "@/lib/data-quality-content";

export default function DQUseCases() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium mb-4 border border-violet-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            {DQ_USE_CASES.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {DQ_USE_CASES.title}
            <span className="gradient-text">{DQ_USE_CASES.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DQ_USE_CASES.items.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl bg-surface border border-white/5 p-6 card-hover"
            >
              <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-3">
                {useCase.tag}
              </span>
              <h3 className="text-base font-bold text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

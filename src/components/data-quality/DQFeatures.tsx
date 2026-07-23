"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { DQ_FEATURES } from "@/lib/data-quality-content";

export default function DQFeatures() {
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
            <Zap className="w-3.5 h-3.5" />
            {DQ_FEATURES.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {DQ_FEATURES.title}
            <span className="gradient-text">{DQ_FEATURES.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{DQ_FEATURES.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {DQ_FEATURES.items.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-surface border border-white/5 p-6 card-hover"
            >
              <div className="text-xs font-extrabold text-violet-400 tracking-wider mb-2">
                {feature.number}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

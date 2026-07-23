"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { DQ_BENEFITS } from "@/lib/data-quality-content";

export default function DQBenefits() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <TrendingUp className="w-3.5 h-3.5" />
            {DQ_BENEFITS.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {DQ_BENEFITS.title}
            <span className="gradient-text">{DQ_BENEFITS.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {DQ_BENEFITS.items.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex gap-4 rounded-2xl bg-surface border border-white/5 p-6 card-hover"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

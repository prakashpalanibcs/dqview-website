"use client";

import { motion } from "framer-motion";
import { DQ_STATS } from "@/lib/data-quality-content";

export default function DQStatBand() {
  return (
    <section className="border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {DQ_STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl lg:text-5xl font-extrabold gradient-text">
              {stat.value}
            </div>
            <div className="text-sm text-gray-400 font-semibold mt-2">
              {stat.label}
            </div>
            <div className="text-xs text-gray-600 mt-1">{stat.source}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

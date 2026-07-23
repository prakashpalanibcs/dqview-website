"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft } from "lucide-react";
import { DQ_SHIFT } from "@/lib/data-quality-content";

export default function DQShift() {
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
            <ArrowRightLeft className="w-3.5 h-3.5" />
            {DQ_SHIFT.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {DQ_SHIFT.title}
            <span className="gradient-text">{DQ_SHIFT.titleHighlight}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {/* Traditional */}
          <div className="rounded-2xl bg-red-500/[0.04] border border-red-500/10 p-7">
            <h3 className="text-lg font-bold text-red-400 mb-5">
              Traditional data quality tools
            </h3>
            <ul className="space-y-3">
              {DQ_SHIFT.traditional.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-400"
                >
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">
                    →
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* With deKorvai */}
          <div className="rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/10 p-7">
            <h3 className="text-lg font-bold text-emerald-400 mb-5">
              With deKorvai
            </h3>
            <ul className="space-y-3">
              {DQ_SHIFT.withDekorvai.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="text-emerald-400 font-bold shrink-0 mt-0.5">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

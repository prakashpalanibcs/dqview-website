"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { DQ_DIMENSIONS } from "@/lib/data-quality-content";

export default function DQDimensions() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Layers className="w-3.5 h-3.5" />
            {DQ_DIMENSIONS.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {DQ_DIMENSIONS.title}
            <span className="gradient-text">{DQ_DIMENSIONS.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{DQ_DIMENSIONS.subtitle}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-white/5"
        >
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-light">
                <th className="text-left px-5 py-3.5 text-xs font-bold text-white tracking-wider uppercase">
                  Dimension
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-bold text-white tracking-wider uppercase">
                  The question it answers
                </th>
                <th className="text-left px-5 py-3.5 text-xs font-bold text-white tracking-wider uppercase hidden sm:table-cell">
                  How deKorvai measures it
                </th>
              </tr>
            </thead>
            <tbody>
              {DQ_DIMENSIONS.items.map((dimension, index) => (
                <tr
                  key={dimension.name}
                  className={
                    index % 2 === 0
                      ? "bg-white/[0.01]"
                      : "bg-white/[0.03]"
                  }
                >
                  <td className="px-5 py-3.5 font-semibold text-white">
                    {dimension.name}
                  </td>
                  <td className="px-5 py-3.5 text-gray-400">
                    {dimension.question}
                  </td>
                  <td className="px-5 py-3.5 text-gray-400 hidden sm:table-cell">
                    {dimension.measurement}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

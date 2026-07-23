"use client";

import { motion } from "framer-motion";
import { DQ_ANSWER_FIRST } from "@/lib/data-quality-content";

export default function DQAnswerFirst() {
  return (
    <section className="relative border-b border-white/5 bg-surface/50">
      <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 items-start">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold pt-1"
        >
          {DQ_ANSWER_FIRST.label}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {DQ_ANSWER_FIRST.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base text-gray-300 leading-relaxed mb-3 last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

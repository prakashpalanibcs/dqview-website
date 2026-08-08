"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { DQ_CTA } from "@/lib/data-quality-content";

const DEMO_URL =
  "/contact#book-a-demo";

export default function DQCTA() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/5 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {DQ_CTA.title}
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              {DQ_CTA.description}
            </p>
            <a
              href={DEMO_URL}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
            >
              {DQ_CTA.buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-gray-500 mt-4">{DQ_CTA.subtext}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

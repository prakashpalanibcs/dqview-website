"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { DQ_RELATED_PLATFORM } from "@/lib/data-quality-content";

export default function DQRelatedPages() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold mb-3">
            Explore the Platform
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Part of one <span className="gradient-text">unified platform</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Data quality is one of four capabilities in deKorvai — explore the
            rest.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {DQ_RELATED_PLATFORM.map((page, index) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <Link
                href={page.href}
                className="group block rounded-xl bg-surface border border-white/5 p-5 hover:border-violet-500/30 transition-all"
              >
                <h3 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
                  {page.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {page.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

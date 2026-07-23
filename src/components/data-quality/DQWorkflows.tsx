"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Workflow } from "lucide-react";
import { DQ_WORKFLOWS } from "@/lib/data-quality-content";

export default function DQWorkflows() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section id="how" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Workflow className="w-3.5 h-3.5" />
            {DQ_WORKFLOWS.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {DQ_WORKFLOWS.title}
            <span className="gradient-text">{DQ_WORKFLOWS.titleHighlight}</span>
          </h2>
          <p className="text-gray-400 text-lg">{DQ_WORKFLOWS.subtitle}</p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex gap-2 flex-wrap justify-center mb-8 overflow-x-auto">
          {DQ_WORKFLOWS.tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTabIndex(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTabIndex === index
                  ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-surface border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              {DQ_WORKFLOWS.tabs[activeTabIndex].steps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-xl bg-surface border border-white/5 p-5"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-sm flex items-center justify-center mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-violet-500/10 border-l-4 border-violet-500 px-5 py-3.5 text-sm text-gray-300 font-medium">
              {DQ_WORKFLOWS.tabs[activeTabIndex].outcome}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  X,
  Check,
  Frown,
  Smile,
  AlertTriangle,
  FileSpreadsheet,
  Puzzle,
  Clock,
  Ban,
} from "lucide-react";
import { useTranslations } from "next-intl";

const problemIcons = [Puzzle, FileSpreadsheet, Clock, Ban, AlertTriangle];

export default function ProblemSolution() {
  const t = useTranslations("problemSolution");

  const problems = [
    { icon: problemIcons[0], text: t("problems.p1") },
    { icon: problemIcons[1], text: t("problems.p2") },
    { icon: problemIcons[2], text: t("problems.p3") },
    { icon: problemIcons[3], text: t("problems.p4") },
    { icon: problemIcons[4], text: t("problems.p5") },
  ];

  const solutions = [
    t("solutions.s1"),
    t("solutions.s2"),
    t("solutions.s3"),
    t("solutions.s4"),
    t("solutions.s5"),
  ];

  return (
    <section id="solutions" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium mb-4 border border-amber-500/20">
            <AlertTriangle className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="text-red-400">{t("titleHighlight")}</span> {t("title2")}
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/10 bg-red-500/[0.02] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
                <Frown className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{t("withoutTitle")}</h3>
                <p className="text-sm text-gray-500">{t("withoutSubtitle")}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-400">{problem.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-emerald-500/10 bg-emerald-500/[0.02] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Smile className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{t("withTitle")}</h3>
                <p className="text-sm text-gray-500">{t("withSubtitle")}</p>
              </div>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-400">{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

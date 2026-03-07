"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Search,
  Workflow,
  CheckCircle2,
  Upload,
} from "lucide-react";
import { useTranslations } from "next-intl";

const stepMeta = [
  { number: "01", icon: Database, color: "from-emerald-500 to-teal-500", key: "s1" },
  { number: "02", icon: Search, color: "from-amber-500 to-orange-500", key: "s2" },
  { number: "03", icon: Workflow, color: "from-teal-500 to-cyan-500", key: "s3" },
  { number: "04", icon: Upload, color: "from-emerald-600 to-emerald-500", key: "s4" },
];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = stepMeta.map((s) => ({
    ...s,
    title: t(`steps.${s.key}.title`),
    description: t(`steps.${s.key}.description`),
    details: [
      t(`steps.${s.key}.d1`),
      t(`steps.${s.key}.d2`),
      t(`steps.${s.key}.d3`),
    ],
  }));

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium mb-4 border border-amber-500/20">
            <Workflow className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(100%_-_12px)] w-[calc(100%_-_40px)] z-10">
                  <div className="h-px bg-gradient-to-r from-white/10 to-white/5" />
                  <ArrowRight className="absolute right-0 -top-2 w-4 h-4 text-white/20" />
                </div>
              )}
              <div className="relative rounded-2xl bg-surface border border-white/5 p-6 h-full group card-hover">
                <div
                  className={`text-5xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-20 absolute top-4 right-4`}
                >
                  {step.number}
                </div>
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-5`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/60" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

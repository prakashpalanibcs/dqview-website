"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Workflow,
  Shield,
  Cpu,
  Gauge,
  FileCheck2,
  Layers,
} from "lucide-react";
import { useTranslations } from "next-intl";

const featureKeys = [
  { key: "dataQualityProfiling", icon: BarChart3, color: "from-emerald-500 to-teal-500", iconColor: "text-emerald-400", large: true, hCount: 4 },
  { key: "etlPipeline", icon: Workflow, color: "from-amber-500 to-orange-500", iconColor: "text-amber-400", large: true, hCount: 4 },
  { key: "dataScrambling", icon: Shield, color: "from-teal-500 to-cyan-500", iconColor: "text-teal-400", large: false, hCount: 3 },
  { key: "agenticAi", icon: Cpu, color: "from-violet-500 to-purple-500", iconColor: "text-violet-400", large: false, hCount: 3 },
  { key: "realTimeMonitoring", icon: Gauge, color: "from-amber-500 to-yellow-500", iconColor: "text-amber-400", large: false, hCount: 3 },
  { key: "complianceAudit", icon: FileCheck2, color: "from-rose-500 to-red-500", iconColor: "text-rose-400", large: false, hCount: 3 },
];

export default function Features() {
  const t = useTranslations("features");

  const features = featureKeys.map((f) => ({
    ...f,
    title: t(`${f.key}.title`),
    description: t(`${f.key}.description`),
    highlights: Array.from({ length: f.hCount }, (_, i) => t(`${f.key}.h${i + 1}`)),
  }));

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4 border border-emerald-500/20">
            <Layers className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative rounded-2xl bg-surface border border-white/5 p-6 lg:p-8 card-hover overflow-hidden ${
                feature.large ? "lg:col-span-1 lg:row-span-2" : ""
              }`}
            >
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`}
              />
              <div
                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br bg-opacity-10 mb-5"
                style={{ background: `linear-gradient(135deg, rgba(5,150,105,0.1), rgba(217,119,6,0.1))` }}
              >
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{feature.description}</p>
              <ul className="space-y-2">
                {feature.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.color}`} />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

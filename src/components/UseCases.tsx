"use client";

import { motion } from "framer-motion";
import {
  Server,
  Building2,
  ShieldCheck,
  TestTubes,
  RefreshCw,
} from "lucide-react";
import { useTranslations } from "next-intl";

const caseMeta = [
  { key: "c1", icon: RefreshCw, color: "from-emerald-500 to-teal-500", tags: ["SAP ECC", "S/4HANA", "Business Partner", "BP Roles"] },
  { key: "c2", icon: Server, color: "from-amber-500 to-orange-500", tags: ["Selective Migration", "Deduplication", "Master Data"] },
  { key: "c3", icon: TestTubes, color: "from-teal-500 to-cyan-500", tags: ["SIT/UAT", "Scrambling", "GDPR", "HIPAA"] },
  { key: "c4", icon: ShieldCheck, color: "from-violet-500 to-purple-500", tags: ["Real-Time", "Scorecards", "Anomaly Detection"] },
];

export default function UseCases() {
  const t = useTranslations("useCases");

  const useCases = caseMeta.map((c) => ({
    ...c,
    title: t(`cases.${c.key}.title`),
    description: t(`cases.${c.key}.description`),
  }));

  return (
    <section id="use-cases" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4 border border-emerald-500/20">
            <Building2 className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc, index) => (
            <motion.div
              key={uc.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl bg-surface border border-white/5 p-8 card-hover"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${uc.color} flex items-center justify-center mb-5`}
              >
                <uc.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{uc.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{uc.description}</p>
              <div className="flex flex-wrap gap-2">
                {uc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, X, Minus, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const featureKeys = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"];

const categoryData = [
  { dekorvai: true, sapBods: "partial", ataccama: true, purview: "partial", datprof: false, syniti: "partial" },
  { dekorvai: true, sapBods: true, ataccama: false, purview: false, datprof: false, syniti: true },
  { dekorvai: true, sapBods: false, ataccama: false, purview: false, datprof: true, syniti: false },
  { dekorvai: true, sapBods: true, ataccama: false, purview: false, datprof: false, syniti: true },
  { dekorvai: true, sapBods: false, ataccama: "partial", purview: "partial", datprof: false, syniti: false },
  { dekorvai: true, sapBods: false, ataccama: true, purview: "partial", datprof: false, syniti: false },
  { dekorvai: true, sapBods: "partial", ataccama: true, purview: true, datprof: true, syniti: "partial" },
  { dekorvai: true, sapBods: false, ataccama: false, purview: false, datprof: false, syniti: false },
];

const competitors = [
  { key: "dekorvai", name: "deKorvai", highlight: true },
  { key: "sapBods", name: "SAP BODS", highlight: false },
  { key: "ataccama", name: "Ataccama", highlight: false },
  { key: "purview", name: "Purview", highlight: false },
  { key: "datprof", name: "DATPROF", highlight: false },
  { key: "syniti", name: "Syniti", highlight: false },
];

function StatusIcon({ status }: { status: boolean | string }) {
  if (status === true) return <Check className="w-5 h-5 text-emerald-400" />;
  if (status === "partial") return <Minus className="w-5 h-5 text-amber-400" />;
  return <X className="w-5 h-5 text-gray-600" />;
}

export default function Comparison() {
  const t = useTranslations("comparison");

  const categories = featureKeys.map((key, i) => ({
    feature: t(`features.${key}`),
    ...categoryData[i],
  }));

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium mb-4 border border-violet-500/20">
            <Zap className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <div className="min-w-[800px]">
            <div className="grid grid-cols-7 gap-2 mb-2">
              <div className="p-4 text-sm font-medium text-gray-500">{t("capability")}</div>
              {competitors.map((c) => (
                <div
                  key={c.key}
                  className={`p-4 text-center text-sm font-bold rounded-t-xl ${
                    c.highlight
                      ? "bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 border-b-0"
                      : "text-gray-400"
                  }`}
                >
                  {c.name}
                </div>
              ))}
            </div>
            {categories.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-7 gap-2 ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}
              >
                <div className="p-4 text-sm text-gray-300 flex items-center">{row.feature}</div>
                {competitors.map((c) => (
                  <div
                    key={c.key}
                    className={`p-4 flex items-center justify-center ${
                      c.highlight ? "bg-indigo-500/5 border-x border-indigo-500/20" : ""
                    } ${
                      i === categories.length - 1 && c.highlight
                        ? "border-b border-indigo-500/20 rounded-b-xl"
                        : ""
                    }`}
                  >
                    <StatusIcon
                      status={row[c.key as keyof typeof row] as boolean | string}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

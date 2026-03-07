"use client";

import { motion } from "framer-motion";
import { Quote, Users, Building2 } from "lucide-react";
import { useTranslations } from "next-intl";

const quoteKeys = ["q1", "q2", "q3", "q4"];
const metricKeys = ["m1", "m2", "m3", "m4"];

export default function Testimonials() {
  const t = useTranslations("testimonials");

  const testimonials = quoteKeys.map((key) => ({
    quote: t(`quotes.${key}.quote`),
    company: t(`quotes.${key}.company`),
    useCase: t(`quotes.${key}.useCase`),
    tag: t(`quotes.${key}.tag`),
  }));

  const metrics = metricKeys.map((key) => ({
    value: t(`metrics.${key}.value`),
    label: t(`metrics.${key}.label`),
  }));

  return (
    <section id="case-studies" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-medium mb-4 border border-amber-500/20">
            <Users className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="text-center p-6 rounded-2xl bg-surface border border-white/5"
            >
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">{m.value}</div>
              <div className="text-sm text-gray-500">{m.label}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-surface border border-white/5 p-8 card-hover relative"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-5 border border-emerald-500/20">
                {item.tag}
              </span>
              <Quote className="w-7 h-7 text-emerald-500/20 mb-3" />
              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="border-t border-white/5 pt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 flex items-center justify-center border border-white/5">
                  <Building2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.company}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.useCase}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Globe, MapPin, Users, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const offices = [
  { key: "almere", flag: "🇳🇱", hq: true },
  { key: "myrtleBeach", flag: "🇺🇸", hq: false },
  { key: "leicester", flag: "🇬🇧", hq: false },
  { key: "walldorf", flag: "🇩🇪", hq: false },
  { key: "chennai", flag: "🇮🇳", hq: false },
  { key: "blacktown", flag: "🇦🇺", hq: false },
];

const stats = [
  { key: "countries", icon: Globe, value: "6" },
  { key: "employees", icon: Users, value: "480+" },
  { key: "support", icon: Clock, value: "24/7" },
];

export default function GlobalPresence() {
  const t = useTranslations("globalPresence");

  return (
    <section id="global-presence" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4 border border-emerald-500/20">
            <Globe className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        {/* Office cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {offices.map((office, index) => (
            <motion.div
              key={office.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-xl bg-surface border border-white/5 p-5 text-center hover:border-emerald-500/20 hover:bg-white/[0.03] transition-all"
            >
              <span className="text-3xl mb-3 block">{office.flag}</span>
              <h3 className="text-sm font-semibold text-white mb-1">
                {t(`offices.${office.key}.city`)}
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                {t(`offices.${office.key}.country`)}
              </p>
              {office.hq ? (
                <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {t("hqLabel")}
                </span>
              ) : (
                <span className="text-[10px] text-gray-600">
                  {t(`offices.${office.key}.role`)}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16"
        >
          {stats.map((stat) => (
            <div key={stat.key} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <stat.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{t(`stats.${stat.key}`)}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

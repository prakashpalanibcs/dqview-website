"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function AnswerFirst() {
  const t = useTranslations("answerFirst");

  return (
    <section className="relative py-12 lg:py-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-300 leading-relaxed text-center"
        >
          <strong className="text-white">{t("brand")}</strong>{" "}
          {t("definition")}
        </motion.p>
      </div>
    </section>
  );
}

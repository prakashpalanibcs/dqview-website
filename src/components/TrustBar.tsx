"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const customers = [
  "Coromandel International",
  "Evident Scientific",
  "GRT Ethanol",
];

const integrations = [
  "SAP",
  "SAP HANA",
  "Oracle",
  "Microsoft",
  "Snowflake",
  "AWS",
  "Google Cloud",
  "Salesforce",
  "PostgreSQL",
];

export default function TrustBar() {
  const t = useTranslations("trustBar");

  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-500 mb-6 tracking-wider uppercase"
        >
          {t("trustedBy")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 mb-10"
        >
          {customers.map((customer) => (
            <div
              key={customer}
              className="text-gray-400 hover:text-white transition-colors text-lg font-semibold tracking-wide"
            >
              {customer}
            </div>
          ))}
          <div className="text-gray-500 hover:text-gray-300 transition-colors text-lg font-semibold tracking-wide italic">
            {t("worldsBrewer")}
          </div>
        </motion.div>

        <div className="border-t border-white/5 pt-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs text-gray-600 mb-6 tracking-wider uppercase"
          >
            {t("integratesWith")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-6 lg:gap-12"
          >
            {integrations.map((partner) => (
              <div
                key={partner}
                className="text-gray-600 hover:text-gray-400 transition-colors text-sm font-medium tracking-wide"
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

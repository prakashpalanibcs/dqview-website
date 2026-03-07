"use client";

import Image from "next/image";
import {
  Linkedin,
  Mail,
  Globe,
  ArrowUpRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Footer() {
  const t = useTranslations("footer");

  const footerSections = [
    {
      title: t("platform"),
      links: [
        { label: t("platformLinks.dataQualityProfiling"), href: "#features" },
        { label: t("platformLinks.etlPipeline"), href: "#features" },
        { label: t("platformLinks.dataScrambling"), href: "#features" },
        { label: t("platformLinks.agenticAi"), href: "#features" },
        { label: t("platformLinks.integrations"), href: "#features" },
      ],
    },
    {
      title: t("solutions"),
      links: [
        { label: t("solutionLinks.sapMigration"), href: "#solutions" },
        { label: t("solutionLinks.testDataManagement"), href: "#solutions" },
        { label: t("solutionLinks.dataGovernance"), href: "#solutions" },
        { label: t("solutionLinks.compliance"), href: "#solutions" },
      ],
    },
    {
      title: t("resourcesTitle"),
      links: [
        { label: t("resourcesLinks.caseStudies"), href: "#case-studies" },
        { label: t("resourcesLinks.blog"), href: "/blog", isRoute: true },
        { label: t("resourcesLinks.events"), href: "#insights" },
      ],
    },
    {
      title: t("company"),
      links: [
        { label: t("companyLinks.aboutUs"), href: "#" },
        { label: t("companyLinks.careers"), href: "#" },
        { label: t("companyLinks.contact"), href: "#contact" },
        { label: t("companyLinks.partners"), href: "#" },
      ],
    },
  ];

  return (
    <footer id="contact" className="relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/dq-icon.webp"
                alt="DQ View"
                width={64}
                height={64}
                className="h-9 w-9 rounded-lg"
              />
              <span className="text-xl font-bold text-white">DQview</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-xs">
              {t("description")}
            </p>
            <div className="space-y-3">
              <a
                href="mailto:hello@businesscoresolutions.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@businesscoresolutions.com
              </a>
              <a
                href="https://www.businesscoresolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                businesscoresolutions.com
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                Business Core Solutions
              </a>
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {"isRoute" in link && link.isRoute ? (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              {t("privacyPolicy")}
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              {t("termsOfService")}
            </a>
            <a href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              {t("cookiePolicy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

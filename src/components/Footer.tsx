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

type FooterLink =
  | { label: string; section: string; route?: never; external?: never }
  | { label: string; route: string; section?: never; external?: never }
  | { label: string; external: string; section?: never; route?: never };

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Footer() {
  const t = useTranslations("footer");

  const footerSections: { title: string; links: FooterLink[] }[] = [
    {
      title: t("platform"),
      links: [
        { label: t("platformLinks.dataQualityProfiling"), section: "features" },
        { label: t("platformLinks.etlPipeline"), section: "features" },
        { label: t("platformLinks.dataScrambling"), section: "features" },
        { label: t("platformLinks.agenticAi"), section: "features" },
        { label: t("platformLinks.integrations"), section: "features" },
      ],
    },
    {
      title: t("solutions"),
      links: [
        { label: t("solutionLinks.sapMigration"), section: "use-cases" },
        { label: t("solutionLinks.testDataManagement"), section: "use-cases" },
        { label: t("solutionLinks.dataGovernance"), section: "use-cases" },
        { label: t("solutionLinks.compliance"), section: "features" },
      ],
    },
    {
      title: t("resourcesTitle"),
      links: [
        { label: t("resourcesLinks.caseStudies"), section: "case-studies" },
        { label: t("resourcesLinks.blog"), route: "/blog" },
        { label: t("resourcesLinks.events"), section: "insights" },
      ],
    },
    {
      title: t("company"),
      links: [
        { label: t("companyLinks.aboutUs"), section: "why-dqview" },
        { label: t("companyLinks.careers"), external: "mailto:hello@businesscoresolutions.com" },
        { label: t("companyLinks.contact"), section: "demo" },
        { label: t("companyLinks.partners"), section: "global-presence" },
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
                href="https://www.linkedin.com/company/business-core-solutions"
                target="_blank"
                rel="noopener noreferrer"
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
                    {link.route ? (
                      <Link
                        href={link.route}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : link.external ? (
                      <a
                        href={link.external}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : link.section ? (
                      <button
                        onClick={() => scrollToSection(link.section)}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors text-left cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : null}
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
            <span className="text-xs text-gray-600">
              {t("privacyPolicy")}
            </span>
            <span className="text-xs text-gray-600">
              {t("termsOfService")}
            </span>
            <span className="text-xs text-gray-600">
              {t("cookiePolicy")}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

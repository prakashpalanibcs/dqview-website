"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Menu,
  X,
  ChevronDown,
  Database,
  Shield,
  Workflow,
  BarChart3,
  Layers,
  Zap,
  FileText,
  Newspaper,
  CalendarDays,
  Cpu,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const productIcons = [BarChart3, Workflow, Shield, Cpu, Database, Layers];
const productKeys = [
  "dataQualityProfiling",
  "etlPipeline",
  "dataScrambling",
  "agenticAi",
  "integrations",
  "dataStaging",
];

const resourceIcons = [FileText, Newspaper, CalendarDays];
const resourceKeys = ["caseStudies", "blog", "events"];
const resourceSections = ["case-studies", "", "insights"];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const t = useTranslations("navbar");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const productLinks = productKeys.map((key, i) => ({
    icon: productIcons[i],
    title: t(`productLinks.${key}.title`),
    desc: t(`productLinks.${key}.desc`),
  }));

  const resourceLinks = resourceKeys.map((key, i) => ({
    icon: resourceIcons[i],
    title: t(`resourceLinks.${key}.title`),
    desc: t(`resourceLinks.${key}.desc`),
    section: resourceSections[i],
    isRoute: key === "blog",
  }));

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-blur py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/dq-icon.webp"
            alt="deKorvai"
            width={64}
            height={64}
            className="h-9 w-9 rounded-lg"
            priority
          />
          <span className="text-xl font-bold text-white">
            deKorvai
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Product Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("product")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              {t("platform")}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "product" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[480px] glass rounded-xl p-4 grid grid-cols-2 gap-2"
                >
                  {productLinks.map((link) => (
                    <button
                      key={link.title}
                      onClick={() => {
                        scrollTo("features");
                        setActiveDropdown(null);
                      }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group text-left cursor-pointer"
                    >
                      <link.icon className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                          {link.title}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {link.desc}
                        </div>
                      </div>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => scrollTo("solutions")}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            {t("solutions")}
          </button>

          <button
            onClick={() => scrollTo("how-it-works")}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
          >
            {t("howItWorks")}
          </button>

          {/* Resources Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              {t("resources")}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-2 w-[280px] glass rounded-xl p-3"
                >
                  {resourceLinks.map((link) =>
                    link.isRoute ? (
                      <Link
                        key={link.title}
                        href="/blog"
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                        onClick={() => setActiveDropdown(null)}
                      >
                        <link.icon className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-amber-300 transition-colors">
                            {link.title}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">
                            {link.desc}
                          </div>
                        </div>
                      </Link>
                    ) : (
                      <button
                        key={link.title}
                        onClick={() => {
                          scrollTo(link.section);
                          setActiveDropdown(null);
                        }}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group w-full text-left cursor-pointer"
                      >
                        <link.icon className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-amber-300 transition-colors">
                            {link.title}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5">
                            {link.desc}
                          </div>
                        </div>
                      </button>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Buttons + Language Switcher */}
        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="https://calendly.com/symphonydemo/bcs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/25"
          >
            {t("bookDemo")}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden nav-blur mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <LanguageSwitcher />
              </div>
              <button onClick={() => { scrollTo("features"); setMobileOpen(false); }} className="block text-gray-300 hover:text-white py-2 cursor-pointer">
                {t("platform")}
              </button>
              <button onClick={() => { scrollTo("solutions"); setMobileOpen(false); }} className="block text-gray-300 hover:text-white py-2 cursor-pointer">
                {t("solutions")}
              </button>
              <button onClick={() => { scrollTo("how-it-works"); setMobileOpen(false); }} className="block text-gray-300 hover:text-white py-2 cursor-pointer">
                {t("howItWorks")}
              </button>
              <Link href="/blog" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>
                {t("resources")}
              </Link>
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="https://calendly.com/symphonydemo/bcs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white"
                >
                  {t("bookDemo")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

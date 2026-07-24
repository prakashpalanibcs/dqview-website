"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Database,
  Shield,
  Workflow,
  BarChart3,
  Zap,
  FileText,
  Newspaper,
  CalendarDays,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const productIcons = [BarChart3, Workflow, Shield, Cpu, Database];
const productKeys = [
  "dataQualityProfiling",
  "etlPipeline",
  "dataScrambling",
  "agenticAi",
  "integrations",
];
const productSlugs = [
  "data-quality-profiling",
  "etl",
  "data-masking",
  "agentic-ai",
  "integrations",
];

const resourceIcons = [FileText, Newspaper, CalendarDays];
const resourceKeys = ["caseStudies", "blog", "events"];
const resourceSections = ["case-studies", "", "insights"];

/* ------------------------------------------------------------------ */
/*  Solutions Mega-Menu Data                                           */
/* ------------------------------------------------------------------ */

const SOLUTIONS_LENSES = [
  {
    key: "byUseCase" as const,
    cards: [
      { key: "masterDataManagement", href: "/solutions/master-data-management" },
      { key: "dataQualityGovernance", href: "/solutions/data-quality-governance" },
      { key: "compliance", href: "/solutions/compliance" },
      { key: "testDataManagement", href: "/solutions/test-data-management" },
      { key: "systemConsolidation", href: "/solutions/system-consolidation" },
      { key: "s4hanaMigration", href: "/solutions/s4hana-data-migration" },
    ],
  },
  {
    key: "byIndustry" as const,
    cards: [
      { key: "manufacturing", href: "/solutions/master-data-management" },
      { key: "cpgBeverage", href: "/solutions/compliance" },
      { key: "lifeSciences", href: "/solutions/s4hana-data-migration" },
    ],
  },
  {
    key: "byRegulation" as const,
    cards: [
      { key: "gdpr", href: "/solutions/compliance" },
      { key: "hipaa", href: "/solutions/compliance" },
      { key: "sox", href: "/solutions/compliance" },
    ],
  },
];

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
    slug: productSlugs[i],
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
        <Link href="/" className="flex items-center group">
          <img
            src="/logo-horizontal.svg"
            alt="deKorvai"
            className="h-9 w-auto"
          />
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
                    <Link
                      key={link.title}
                      href={`/platform/${link.slug}`}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                    >
                      <link.icon className="w-5 h-5 text-blue-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                          {link.title}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {link.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Solutions Mega-Menu */}
          <SolutionsMegaMenu
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />

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
                        <link.icon className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">
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
                        <link.icon className="w-5 h-5 text-violet-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-violet-300 transition-colors">
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
            href="https://calendly.com/gokulprasad-s-businesscoresolutions/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
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
              <Link href="/solutions/master-data-management" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>
                {t("solutions")}
              </Link>
              <button onClick={() => { scrollTo("how-it-works"); setMobileOpen(false); }} className="block text-gray-300 hover:text-white py-2 cursor-pointer">
                {t("howItWorks")}
              </button>
              <Link href="/blog" className="block text-gray-300 hover:text-white py-2" onClick={() => setMobileOpen(false)}>
                {t("resources")}
              </Link>
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="https://calendly.com/gokulprasad-s-businesscoresolutions/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white"
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

/* ------------------------------------------------------------------ */
/*  Solutions Mega-Menu Component                                      */
/* ------------------------------------------------------------------ */

function SolutionsMegaMenu({
  activeDropdown,
  setActiveDropdown,
}: {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
}) {
  const t = useTranslations("navbar");
  const [activeLensIndex, setActiveLensIndex] = useState(0);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const isOpen = activeDropdown === "solutions";

  const handleClose = useCallback(() => {
    setActiveDropdown(null);
    setActiveLensIndex(0);
  }, [setActiveDropdown]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen, handleClose]);

  const activeLens = SOLUTIONS_LENSES[activeLensIndex];

  return (
    <div className="relative" ref={megaMenuRef}>
      <button
        onClick={(event) => {
          event.stopPropagation();
          setActiveDropdown(isOpen ? null : "solutions");
        }}
        className={`flex items-center gap-1 px-4 py-2 text-sm transition-colors cursor-pointer ${
          isOpen ? "text-violet-400" : "text-gray-300 hover:text-white"
        }`}
      >
        {t("solutions")}
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="fixed left-0 right-0 top-[66px] z-[49] glass border-b border-white/5 shadow-2xl shadow-black/30"
          >
            <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-[240px_1fr] gap-8">
              {/* Left — Lens tabs */}
              <div className="flex flex-col gap-2 border-r border-white/5 pr-6">
                {SOLUTIONS_LENSES.map((lens, index) => (
                  <button
                    key={lens.key}
                    onClick={() => setActiveLensIndex(index)}
                    className={`text-left px-4 py-3.5 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      activeLensIndex === index
                        ? "bg-surface-light"
                        : "hover:bg-white/[0.03]"
                    }`}
                  >
                    <div>
                      <div
                        className={`text-sm font-semibold ${
                          activeLensIndex === index ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {t(`solutionLenses.${lens.key}.title`)}
                      </div>
                      <div
                        className={`text-xs mt-0.5 ${
                          activeLensIndex === index ? "text-violet-300" : "text-gray-500"
                        }`}
                      >
                        {t(`solutionLenses.${lens.key}.desc`)}
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-3.5 h-3.5 shrink-0 transition-opacity ${
                        activeLensIndex === index
                          ? "opacity-100 text-violet-300"
                          : "opacity-0"
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Right — Cards */}
              <div>
                <div className="text-[11px] tracking-[0.16em] uppercase text-orange-400 font-bold mb-4">
                  {t(`solutionLenses.${activeLens.key}.title`)}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeLensIndex}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.15 }}
                    className="grid grid-cols-3 gap-x-6 gap-y-3"
                  >
                    {activeLens.cards.map((card) => (
                      <Link
                        key={`${activeLens.key}-${card.key}`}
                        href={card.href}
                        onClick={handleClose}
                        className="group block p-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                      >
                        <div className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors">
                          {t(`solutionCards.${card.key}.title`)}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5 leading-snug">
                          {t(`solutionCards.${card.key}.desc`)}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/solutions/master-data-management"
                    onClick={handleClose}
                    className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    View all solutions →
                  </Link>
                  <span className="text-xs text-gray-500">
                    Not sure which fits?{" "}
                    <a
                      href="https://calendly.com/gokulprasad-s-businesscoresolutions/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300"
                    >
                      Book a demo
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

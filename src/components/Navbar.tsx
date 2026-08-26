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
  Cpu,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const INDUSTRY_LINKS = [
  { key: "manufacturing", slug: "chemical-manufacturing" },
  { key: "cpgBeverage", slug: "cpg-beverage" },
  { key: "lifeSciences", slug: "life-sciences" },
] as const;

const resourceIcons = [FileText, Newspaper];
const resourceKeys = ["caseStudies", "blog"];
const resourceSections = ["case-studies", ""];

/* ------------------------------------------------------------------ */
/*  Solutions Dropdown Data                                            */
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
    key: "byRegulation" as const,
    cards: [
      { key: "gdpr", href: "/solutions/compliance#gdpr" },
      { key: "hipaa", href: "/solutions/compliance#hipaa" },
      { key: "sox", href: "/solutions/compliance#sox" },
    ],
  },
];

/** A mobile item either navigates to a route or scrolls to a section on the
 *  current page — Case Studies is the only one of the latter. */
type MobileItem =
  | { label: string; href: string }
  | { label: string; section: string };

type MobileGroup = { label?: string; items: MobileItem[] };

type MobileSection = { key: string; label: string; groups: MobileGroup[] };

function isCurrent(href: string, pathname: string): boolean {
  if (href.includes("#")) return false;
  return pathname === href;
}

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
  const [openSection, setOpenSection] = useState<string | null>(null);
  const pathname = usePathname();

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

  /* One description of the mobile menu, built from the same data the desktop
     dropdowns use, so a link added to a dropdown cannot go missing on mobile
     the way the Platform, Solutions and Resources links previously did. */
  const mobileSections: MobileSection[] = [
    {
      key: "platform",
      label: t("platform"),
      groups: [
        {
          items: productLinks.map((link) => ({
            label: link.title,
            href: `/platform/${link.slug}`,
          })),
        },
      ],
    },
    {
      key: "solutions",
      label: t("solutions"),
      groups: SOLUTIONS_LENSES.map((lens) => ({
        label: t(`solutionLenses.${lens.key}.title`),
        items: lens.cards.map((card) => ({
          label: t(`solutionCards.${card.key}.title`),
          href: card.href,
        })),
      })),
    },
    {
      key: "industries",
      label: t("industries"),
      groups: [
        {
          items: INDUSTRY_LINKS.map((industry) => ({
            label: t(`solutionCards.${industry.key}.title`),
            href: `/industries/${industry.slug}`,
          })),
        },
      ],
    },
    {
      key: "resources",
      label: t("resources"),
      groups: [
        {
          items: resourceLinks.map((link) =>
            link.isRoute
              ? { label: link.title, href: "/blog" }
              : { label: link.title, section: link.section }
          ),
        },
      ],
    },
  ];

  /* Opening the menu expands whichever section holds the current page, so the
     visitor can see where they are instead of facing four collapsed rows. */
  const sectionForPath = mobileSections.find((section) =>
    section.groups.some((group) =>
      group.items.some(
        (item) => "href" in item && isCurrent(item.href, pathname)
      )
    )
  )?.key;

  function openMobileMenu() {
    setOpenSection(sectionForPath ?? null);
    setMobileOpen(true);
  }

  function closeMobileMenu() {
    setMobileOpen(false);
  }

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

          {/* Solutions Dropdown */}
          <SolutionsDropdown
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors">
              {t("industries")}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-[300px] glass rounded-xl p-3"
                >
                  {INDUSTRY_LINKS.map((industry) => (
                    <Link
                      key={industry.key}
                      href={`/industries/${industry.slug}`}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                    >
                      <div>
                        <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                          {t(`solutionCards.${industry.key}.title`)}
                        </div>
                        <div className="text-xs text-gray-400 mt-0.5">
                          {t(`solutionCards.${industry.key}.desc`)}
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-5 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
          >
            {t("contactUs")}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => (mobileOpen ? closeMobileMenu() : openMobileMenu())}
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
            {/* Every dropdown link now lives here, so the list can outgrow a
                phone screen. Cap it against the viewport and scroll inside. */}
            <div className="p-4 max-h-[calc(100vh-8rem)] overflow-y-auto">
              {mobileSections.map((section) => {
                const expanded = openSection === section.key;
                return (
                  <div key={section.key}>
                    <button
                      aria-expanded={expanded}
                      onClick={() =>
                        setOpenSection(expanded ? null : section.key)
                      }
                      className="w-full flex items-center justify-between py-3 text-left text-gray-200 hover:text-white transition-colors cursor-pointer"
                    >
                      <span className="text-sm font-medium">{section.label}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {expanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-2 space-y-3">
                            {section.groups.map((group, groupIndex) => (
                              <div key={group.label ?? groupIndex}>
                                {group.label && (
                                  <div className="text-[11px] tracking-[0.14em] uppercase text-gray-500 font-semibold px-3 mb-1">
                                    {group.label}
                                  </div>
                                )}
                                <div className="space-y-0.5">
                                  {group.items.map((item) =>
                                    "href" in item ? (
                                      <Link
                                        key={item.label}
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        aria-current={
                                          isCurrent(item.href, pathname)
                                            ? "page"
                                            : undefined
                                        }
                                        className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                          isCurrent(item.href, pathname)
                                            ? "bg-white/[0.06] text-violet-300 font-medium"
                                            : "text-gray-400 hover:text-white hover:bg-white/[0.03]"
                                        }`}
                                      >
                                        {item.label}
                                      </Link>
                                    ) : (
                                      <button
                                        key={item.label}
                                        onClick={() => {
                                          scrollTo(item.section);
                                          closeMobileMenu();
                                        }}
                                        className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/[0.03] transition-colors cursor-pointer"
                                      >
                                        {item.label}
                                      </button>
                                    )
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="block text-center py-2.5 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white"
                >
                  {t("contactUs")}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Solutions Dropdown                                                 */
/*                                                                     */
/*  Split out from the sibling dropdowns above because it needs its    */
/*  own close timer, plus Escape and outside-click handling for the    */
/*  keyboard and touch paths that hover alone cannot serve.            */
/* ------------------------------------------------------------------ */

function SolutionsDropdown({
  activeDropdown,
  setActiveDropdown,
}: {
  activeDropdown: string | null;
  setActiveDropdown: (value: string | null) => void;
}) {
  const t = useTranslations("navbar");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isOpen = activeDropdown === "solutions";

  const handleClose = useCallback(() => {
    setActiveDropdown(null);
  }, [setActiveDropdown]);

  /* Hover, to match Platform / Industries / Resources.
     The close is deferred briefly because mt-2 leaves an 8px gap between the
     button and the panel that belongs to neither. Closing the moment the
     pointer crosses it would make the panel hard to reach on a diagonal
     approach. Entering the panel cancels the pending close. */
  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const handleOpen = useCallback(() => {
    cancelClose();
    setActiveDropdown("solutions");
  }, [cancelClose, setActiveDropdown]);

  /* Read at fire time rather than through the closure: by then the pointer may
     have moved on to Platform or Resources, which share this state. Closing
     blindly would shut the menu the visitor just opened. */
  const activeRef = useRef(activeDropdown);
  useEffect(() => {
    activeRef.current = activeDropdown;
  }, [activeDropdown]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      if (activeRef.current === "solutions") handleClose();
    }, 150);
  }, [cancelClose, handleClose]);

  // A timer left running past unmount would call setState on a dead component.
  useEffect(() => cancelClose, [cancelClose]);

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [isOpen, handleClose]);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleOpen}
      onMouseLeave={scheduleClose}
    >
      <button
        /* Click is kept alongside hover: it is what makes the menu reachable
           by keyboard and on touch, where there is no hover at all. */
        onClick={(event) => {
          event.stopPropagation();
          cancelClose();
          setActiveDropdown(isOpen ? null : "solutions");
        }}
        className="flex items-center gap-1 px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
      >
        {t("solutions")}
        <ChevronDown className="w-3.5 h-3.5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-[520px] glass rounded-xl p-4"
          >
            {/* Grouped rather than one flat list: use cases and regulations are
                different axes, and GDPR sitting beside Test Data Management
                with no label reads as a sibling when it is not. */}
            {SOLUTIONS_LENSES.map((lens, index) => (
              <div key={lens.key} className={index > 0 ? "mt-4" : undefined}>
                <div className="text-[11px] tracking-[0.14em] uppercase text-gray-500 font-semibold px-3 mb-1">
                  {t(`solutionLenses.${lens.key}.title`)}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {lens.cards.map((card) => (
                    <Link
                      key={`${lens.key}-${card.key}`}
                      href={card.href}
                      onClick={handleClose}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors group text-left"
                    >
                      <div className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                        {t(`solutionCards.${card.key}.title`)}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5">
                        {t(`solutionCards.${card.key}.desc`)}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  ChevronDown,
  AlertTriangle,
  Zap,
  TrendingUp,
  Briefcase,
  ArrowRightLeft,
  Server,
  Award,
  HelpCircle,
} from "lucide-react";
import { Link } from "@/i18n/navigation";

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

const CALENDLY_URL =
  "https://calendly.com/gokulprasad-s-businesscoresolutions/30min";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface BadgeHeaderProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  badgeColor?: string;
  title: string;
  titleHighlight: string;
  subtitle?: string;
}

/* ------------------------------------------------------------------ */
/*  Badge Header (reused across sections)                              */
/* ------------------------------------------------------------------ */

function BadgeHeader({
  badge,
  badgeIcon,
  badgeColor = "bg-blue-500/10 text-blue-400 border-blue-500/20",
  title,
  titleHighlight,
  subtitle,
}: BadgeHeaderProps) {
  return (
    <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-14">
      <div
        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 border ${badgeColor}`}
      >
        {badgeIcon}
        {badge}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
        <span className="gradient-text">{titleHighlight}</span>
      </h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Hero                                                      */
/* ------------------------------------------------------------------ */

export interface PlatformHeroProps {
  kick: string;
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  rating: string;
  ledgerTitle: string;
  ledgerRows: {
    label: string;
    detail: string;
    tag: string;
    tagStyle: string;
  }[];
}

export function PlatformHero({ content }: { content: PlatformHeroProps }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="hero-glow bg-blue-600 top-1/4 left-1/4 animate-pulse-glow" />
      <div
        className="hero-glow bg-violet-600 bottom-1/4 right-1/4 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs text-violet-300 font-bold tracking-[0.18em] uppercase mb-4"
        >
          {content.kick}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-200 text-xs font-semibold mb-6"
        >
          {content.badge}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white max-w-4xl mb-5"
        >
          {content.title}
          <span className="gradient-text">{content.titleHighlight}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-300 max-w-3xl mb-8 leading-relaxed"
        >
          {content.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 mb-5"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-2xl shadow-blue-500/25"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#how"
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <Play className="w-4 h-4" />
            See How It Works
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-1.5 text-sm text-amber-200/70 mb-10"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          ))}
          <span className="ml-1">{content.rating}</span>
        </motion.div>

        {/* Live Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="rounded-2xl bg-white/[0.04] border border-white/10 p-5 max-w-3xl"
        >
          <div className="flex items-center justify-between text-[11px] tracking-[0.14em] uppercase text-gray-500 mb-4">
            <span>{content.ledgerTitle}</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          </div>
          <div className="space-y-2">
            {content.ledgerRows.map((row, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.15 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] text-sm text-gray-200"
              >
                <span className="flex-1 truncate">{row.label}</span>
                <span className="hidden sm:block text-gray-400 text-xs shrink-0">
                  {row.detail}
                </span>
                <span
                  className={`text-[10px] font-bold tracking-wider px-2.5 py-1 rounded-full shrink-0 ${row.tagStyle}`}
                >
                  {row.tag}
                </span>
              </motion.div>
            ))}
          </div>
          <p className="text-[11px] text-gray-500 text-center mt-3">
            every run monitored · every record audit-logged, source to target
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Answer First                                              */
/* ------------------------------------------------------------------ */

export interface AnswerFirstProps {
  label: string;
  paragraphs: string[];
}

export function PlatformAnswerFirst({ content }: { content: AnswerFirstProps }) {
  return (
    <section className="relative border-b border-white/5 bg-surface/50">
      <div className="max-w-4xl mx-auto px-6 py-10 lg:py-14 grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 items-start">
        <motion.div {...FADE_UP} className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold pt-1">
          {content.label}
        </motion.div>
        <motion.div {...FADE_UP}>
          {content.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base text-gray-300 leading-relaxed mb-3 last:mb-0">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Stat Band                                                 */
/* ------------------------------------------------------------------ */

export interface StatItem {
  value: string;
  label: string;
  source: string;
}

export function PlatformStatBand({ stats }: { stats: StatItem[] }) {
  const gridColumns = stats.length === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-3";
  return (
    <section className="border-b border-white/5">
      <div className={`max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 ${gridColumns} gap-8`}>
        {stats.map((stat, index) => (
          <motion.div key={stat.label} {...FADE_UP} transition={{ delay: index * 0.1 }} className="text-center">
            <div className="text-4xl lg:text-5xl font-extrabold gradient-text">{stat.value}</div>
            <div className="text-sm text-gray-400 font-semibold mt-2">{stat.label}</div>
            <div className="text-xs text-gray-600 mt-1">{stat.source}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Problems                                                  */
/* ------------------------------------------------------------------ */

export interface ProblemsProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: { number: string; title: string; description: string }[];
}

export function PlatformProblems({ content }: { content: ProblemsProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<AlertTriangle className="w-3.5 h-3.5" />}
          badgeColor="bg-orange-500/10 text-orange-400 border-orange-500/20"
          title={content.title}
          titleHighlight={content.titleHighlight}
          subtitle={content.subtitle}
        />
        <div className="grid md:grid-cols-2 gap-5">
          {content.items.map((problem, index) => (
            <motion.div key={problem.number} {...FADE_UP} transition={{ delay: index * 0.08 }} className="rounded-2xl bg-surface border border-white/5 p-6">
              <div className="text-sm font-extrabold text-orange-400 tracking-wider mb-2">{problem.number}</div>
              <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Features (numbered grid)                                  */
/* ------------------------------------------------------------------ */

export interface FeaturesProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: { number: string; title: string; description: string }[];
}

export function PlatformFeatures({ content }: { content: FeaturesProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<Zap className="w-3.5 h-3.5" />}
          badgeColor="bg-violet-500/10 text-violet-400 border-violet-500/20"
          title={content.title}
          titleHighlight={content.titleHighlight}
          subtitle={content.subtitle}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.items.map((feature, index) => (
            <motion.div key={feature.number} {...FADE_UP} transition={{ delay: index * 0.05 }} className="rounded-2xl bg-surface border border-white/5 p-6 card-hover">
              <div className="text-xs font-extrabold text-violet-400 tracking-wider mb-2">{feature.number}</div>
              <h3 className="text-base font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Tabbed Workflows                                          */
/* ------------------------------------------------------------------ */

export interface WorkflowTab {
  label: string;
  steps: { step: string; title: string; description: string }[];
  outcome: string;
}

export interface WorkflowsProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  tabs: WorkflowTab[];
}

export function PlatformWorkflows({ content }: { content: WorkflowsProps }) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <section id="how" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<Zap className="w-3.5 h-3.5" />}
          title={content.title}
          titleHighlight={content.titleHighlight}
          subtitle={content.subtitle}
        />
        <div className="flex gap-2 flex-wrap justify-center mb-8 overflow-x-auto">
          {content.tabs.map((tab, index) => (
            <button
              key={tab.label}
              onClick={() => setActiveTabIndex(index)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTabIndex === index
                  ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-surface border border-white/10 text-gray-400 hover:text-white hover:border-white/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabIndex}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
              {content.tabs[activeTabIndex].steps.map((step) => (
                <div key={step.step} className="rounded-xl bg-surface border border-white/5 p-5">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-sm flex items-center justify-center mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-violet-500/10 border-l-4 border-violet-500 px-5 py-3.5 text-sm text-gray-300 font-medium">
              {content.tabs[activeTabIndex].outcome}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Benefits                                                  */
/* ------------------------------------------------------------------ */

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface BenefitsProps {
  badge: string;
  title: string;
  titleHighlight: string;
  items: BenefitItem[];
}

export function PlatformBenefits({ content }: { content: BenefitsProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<TrendingUp className="w-3.5 h-3.5" />}
          title={content.title}
          titleHighlight={content.titleHighlight}
        />
        <div className="grid md:grid-cols-2 gap-5">
          {content.items.map((benefit, index) => (
            <motion.div key={benefit.title} {...FADE_UP} transition={{ delay: index * 0.06 }} className="flex gap-4 rounded-2xl bg-surface border border-white/5 p-6 card-hover">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Use Cases                                                 */
/* ------------------------------------------------------------------ */

export interface UseCaseItem {
  tag: string;
  title: string;
  description: string;
}

export interface UseCasesProps {
  badge: string;
  title: string;
  titleHighlight: string;
  items: UseCaseItem[];
}

export function PlatformUseCases({ content }: { content: UseCasesProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<Briefcase className="w-3.5 h-3.5" />}
          badgeColor="bg-violet-500/10 text-violet-400 border-violet-500/20"
          title={content.title}
          titleHighlight={content.titleHighlight}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {content.items.map((useCase, index) => (
            <motion.div key={useCase.title} {...FADE_UP} transition={{ delay: index * 0.06 }} className="rounded-2xl bg-surface border border-white/5 p-6 card-hover">
              <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-3">
                {useCase.tag}
              </span>
              <h3 className="text-base font-bold text-white mb-2">{useCase.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: The Shift (before/after)                                  */
/* ------------------------------------------------------------------ */

export interface ShiftProps {
  badge: string;
  title: string;
  titleHighlight: string;
  traditionalTitle: string;
  traditional: string[];
  withTitle: string;
  withDekorvai: string[];
}

export function PlatformShift({ content }: { content: ShiftProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<ArrowRightLeft className="w-3.5 h-3.5" />}
          badgeColor="bg-orange-500/10 text-orange-400 border-orange-500/20"
          title={content.title}
          titleHighlight={content.titleHighlight}
        />
        <motion.div {...FADE_UP} className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl bg-red-500/[0.04] border border-red-500/10 p-7">
            <h3 className="text-lg font-bold text-red-400 mb-5">{content.traditionalTitle}</h3>
            <ul className="space-y-3">
              {content.traditional.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-400">
                  <span className="text-red-400 font-bold shrink-0 mt-0.5">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-emerald-500/[0.04] border border-emerald-500/10 p-7">
            <h3 className="text-lg font-bold text-emerald-400 mb-5">{content.withTitle}</h3>
            <ul className="space-y-3">
              {content.withDekorvai.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Architecture                                              */
/* ------------------------------------------------------------------ */

export interface ArchitectureProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  blocks: { label: string; items: string }[];
  integrations: string;
  relatedLinks: { href: string; label: string }[];
}

export function PlatformArchitecture({ content }: { content: ArchitectureProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<Server className="w-3.5 h-3.5" />}
          title={content.title}
          titleHighlight={content.titleHighlight}
          subtitle={content.subtitle}
        />
        <motion.div {...FADE_UP} className="rounded-2xl bg-[#14112a] border border-white/10 p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {content.blocks.map((block) => (
              <div key={block.label} className="rounded-xl bg-white/[0.04] border border-white/10 p-4">
                <div className="text-[11px] tracking-[0.08em] uppercase text-gray-500 mb-2">{block.label}</div>
                <div className="text-sm text-gray-200 leading-relaxed">{block.items}</div>
              </div>
            ))}
          </div>
          <h4 className="text-sm font-bold text-white mb-2">Documented integrations</h4>
          <p className="text-sm text-gray-400">
            {content.integrations}. Explore{" "}
            {content.relatedLinks.map((link, i) => (
              <span key={link.href}>
                {i > 0 && (i === content.relatedLinks.length - 1 ? ", and " : ", ")}
                <Link href={link.href} className="text-violet-400 hover:text-violet-300">
                  {link.label}
                </Link>
              </span>
            ))}
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Proof                                                     */
/* ------------------------------------------------------------------ */

export interface ProofProps {
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
  stats: { value: string; label: string }[];
  ctaText: string;
  ctaHref: string;
}

export function PlatformProof({ content }: { content: ProofProps }) {
  return (
    <section id="proof" className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title={content.title}
          titleHighlight={content.titleHighlight}
          subtitle={content.description}
        />
        <motion.div {...FADE_UP} className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center rounded-xl bg-surface border border-white/5 p-5">
              <div className="text-3xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-400 font-semibold mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
        <div className="text-center">
          <Link href={content.ctaHref} className="text-violet-400 hover:text-violet-300 font-semibold text-sm transition-colors">
            {content.ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: FAQ                                                       */
/* ------------------------------------------------------------------ */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQProps {
  title: string;
  titleHighlight: string;
  items: FAQItem[];
}

export function PlatformFAQ({ content }: { content: FAQProps }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <>
      <section id="faq" className="relative py-20 lg:py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div {...FADE_UP} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
              <HelpCircle className="w-3.5 h-3.5" />
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              {content.title} <span className="gradient-text">{content.titleHighlight}</span>
            </h2>
          </motion.div>
          <div className="space-y-3">
            {content.items.map((faq, index) => (
              <motion.div key={index} {...FADE_UP} transition={{ delay: index * 0.05 }} className="rounded-xl border border-white/5 bg-surface overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer">
                  <span className="text-sm font-semibold text-white">{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.items.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Related Pages                                             */
/* ------------------------------------------------------------------ */

export interface RelatedPageItem {
  href: string;
  title: string;
  description: string;
}

export interface RelatedPagesProps {
  platformTitle: string;
  platformSubtitle: string;
  platformPages: RelatedPageItem[];
}

export function PlatformRelatedPages({ content }: { content: RelatedPagesProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold mb-3">Explore the Platform</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">{content.platformTitle}</h2>
          <p className="text-gray-400 mt-3">{content.platformSubtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-4">
          {content.platformPages.map((page, index) => (
            <motion.div key={page.href} {...FADE_UP} transition={{ delay: index * 0.08 }}>
              <Link href={page.href} className="group block rounded-xl bg-surface border border-white/5 p-5 hover:border-violet-500/30 transition-all">
                <h3 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
                  {page.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-gray-500 mt-1">{page.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: CTA                                                       */
/* ------------------------------------------------------------------ */

export interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  subtext: string;
}

export function PlatformCTA({ content }: { content: CTAProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div {...FADE_UP}>
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/5 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{content.title}</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">{content.description}</p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
            >
              {content.buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-xs text-gray-500 mt-4">{content.subtext}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Dimensions Table                                          */
/* ------------------------------------------------------------------ */

export interface DimensionItem {
  name: string;
  question: string;
  measurement: string;
}

export interface DimensionsProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  columns: string[];
  items: DimensionItem[];
}

export function PlatformDimensionsTable({ content }: { content: DimensionsProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<Zap className="w-3.5 h-3.5" />}
          title={content.title}
          titleHighlight={content.titleHighlight}
          subtitle={content.subtitle}
        />
        <motion.div {...FADE_UP} className="rounded-2xl overflow-hidden border border-white/5">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-surface-light">
                {content.columns.map((col) => (
                  <th key={col} className="text-left px-5 py-3.5 text-xs font-bold text-white tracking-wider uppercase">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {content.items.map((item, index) => (
                <tr key={item.name} className={index % 2 === 0 ? "bg-white/[0.01]" : "bg-white/[0.03]"}>
                  <td className="px-5 py-3.5 font-semibold text-white">{item.name}</td>
                  <td className="px-5 py-3.5 text-gray-400">{item.question}</td>
                  <td className="px-5 py-3.5 text-gray-400 hidden sm:table-cell">{item.measurement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Pipeline Visual                                           */
/* ------------------------------------------------------------------ */

export interface PipelineStep {
  step: string;
  title: string;
  description: string;
}

export interface PipelineProps {
  badge: string;
  title: string;
  subtitle: string;
  steps: PipelineStep[];
}

export function PlatformPipeline({ content }: { content: PipelineProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold mb-3">
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {content.title}
          </h2>
          <p className="text-gray-400">{content.subtitle}</p>
        </motion.div>
        <motion.div {...FADE_UP} className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {content.steps.map((step) => (
            <div
              key={step.step}
              className="rounded-xl bg-surface border border-white/5 p-5 text-center"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">
                {step.step}
              </div>
              <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Connectors Strip                                          */
/* ------------------------------------------------------------------ */

export interface ConnectorsProps {
  badge: string;
  title: string;
  subtitle: string;
  integrationsLink?: { href: string; text: string };
  connectors: string[];
}

export function PlatformConnectors({ content }: { content: ConnectorsProps }) {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs tracking-[0.16em] uppercase text-orange-400 font-bold mb-3">
            {content.badge}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {content.title}
          </h2>
          <p className="text-gray-400">
            {content.subtitle}{" "}
            {content.integrationsLink && (
              <Link href={content.integrationsLink.href} className="text-violet-400 hover:text-violet-300 font-semibold">
                {content.integrationsLink.text}
              </Link>
            )}
          </p>
        </motion.div>
        <motion.div {...FADE_UP} className="flex flex-wrap gap-3 justify-center">
          {content.connectors.map((connector) => (
            <span
              key={connector}
              className="px-4 py-2 rounded-lg bg-surface border border-white/5 text-sm font-semibold text-gray-300"
            >
              {connector}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Quote-Based Proof                                         */
/* ------------------------------------------------------------------ */

export interface QuoteItem {
  quote: string;
  company: string;
  role: string;
}

export interface QuoteProofProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  quotes: QuoteItem[];
}

export function PlatformQuoteProof({ content }: { content: QuoteProofProps }) {
  return (
    <section id="proof" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-4xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<Award className="w-3.5 h-3.5" />}
          title={content.title}
          titleHighlight={content.titleHighlight}
          subtitle={content.subtitle}
        />
        <div className="space-y-4">
          {content.quotes.map((quote, index) => (
            <motion.div
              key={index}
              {...FADE_UP}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-surface border border-white/5 border-l-4 border-l-violet-500 p-7"
            >
              <p className="text-base text-gray-300 italic leading-relaxed mb-4">
                &ldquo;{quote.quote}&rdquo;
              </p>
              <div className="text-sm font-bold text-white">{quote.company}</div>
              <div className="text-xs text-gray-500 mt-0.5">{quote.role}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Function Grid (e.g. Scrambling Functions)                 */
/* ------------------------------------------------------------------ */

export interface FunctionItem {
  title: string;
  description: string;
}

export interface FunctionGridProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  items: FunctionItem[];
}

export function PlatformFunctionGrid({ content }: { content: FunctionGridProps }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <BadgeHeader
          badge={content.badge}
          badgeIcon={<Zap className="w-3.5 h-3.5" />}
          badgeColor="bg-violet-500/10 text-violet-400 border-violet-500/20"
          title={content.title}
          titleHighlight={content.titleHighlight}
          subtitle={content.subtitle}
        />
        <motion.div {...FADE_UP} className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {content.items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-surface border border-white/5 p-5"
            >
              <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

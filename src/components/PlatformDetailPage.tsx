"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap } from "lucide-react";
import {
  getPlatformPageBySlug,
  type PlatformPageContent,
} from "@/lib/platform-content";

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const DEMO_URL =
  "/contact#book-a-demo";

function HeroSection({ content }: { content: PlatformPageContent }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/[0.05] via-transparent to-transparent" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div {...FADE_UP}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-6 border border-blue-500/20">
            <content.icon className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {content.subtitle}
          </p>
          <a
            href={DEMO_URL}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function OverviewSection({ content }: { content: PlatformPageContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {content.overviewTitle}
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            {content.overviewDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection({ content }: { content: PlatformPageContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium mb-4 border border-violet-500/20">
            <Zap className="w-3.5 h-3.5" />
            KEY FEATURES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            What&apos;s{" "}
            <span className="gradient-text">Inside</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {content.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              {...FADE_UP}
              transition={{ delay: index * 0.06 }}
              className="group rounded-2xl bg-surface border border-white/5 p-6 card-hover"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection({ content }: { content: PlatformPageContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Business{" "}
            <span className="gradient-text">Benefits</span>
          </h2>
        </motion.div>
        <div className="space-y-5">
          {content.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              {...FADE_UP}
              transition={{ delay: index * 0.08 }}
              className="flex items-start gap-4 rounded-xl bg-white/[0.02] border border-white/5 p-6 hover:bg-white/[0.04] hover:border-blue-500/20 transition-all"
            >
              <CheckCircle2 className="w-6 h-6 text-blue-400 shrink-0 mt-0.5" />
              <div>
                <h3 className="text-base font-semibold text-white mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection({ content }: { content: PlatformPageContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Use{" "}
            <span className="gradient-text">Cases</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5">
          {content.useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              {...FADE_UP}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl bg-surface border border-white/5 p-6 card-hover"
            >
              <h3 className="text-lg font-bold text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {useCase.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {useCase.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArchitectureSection({ content }: { content: PlatformPageContent }) {
  if (!content.architecture) return null;

  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div {...FADE_UP} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            How It{" "}
            <span className="gradient-text">Works</span>
          </h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {content.architecture.map((step, index) => (
            <motion.div
              key={step.step}
              {...FADE_UP}
              transition={{ delay: index * 0.1 }}
              className="relative rounded-2xl bg-surface border border-white/5 p-6"
            >
              <div className="text-3xl font-black text-white/10 mb-3">
                {step.step}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection({ content }: { content: PlatformPageContent }) {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div {...FADE_UP}>
          <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-white/5 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {content.ctaTitle}
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              {content.ctaDescription}
            </p>
            <a
              href={DEMO_URL}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
            >
              Schedule Your Demo
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function PlatformDetailPage({ slug }: { slug: string }) {
  const content = getPlatformPageBySlug(slug);
  if (!content) return null;

  return (
    <>
      <HeroSection content={content} />
      <OverviewSection content={content} />
      <FeaturesSection content={content} />
      <BenefitsSection content={content} />
      <UseCasesSection content={content} />
      <ArchitectureSection content={content} />
      <CtaSection content={content} />
    </>
  );
}

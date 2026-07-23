import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnswerFirst from "@/components/AnswerFirst";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import WhyDeKorvai from "@/components/WhyDeKorvai";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GlobalPresence from "@/components/GlobalPresence";
import UseCaseShowcase from "@/components/UseCaseShowcase";
import FuzzyDuplicateShowcase from "@/components/FuzzyDuplicateShowcase";
import { getBlogPosts, getEvents } from "@/lib/content";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const blogs = getBlogPosts(locale).map((b) => ({
    title: b.title,
    excerpt: b.excerpt,
    slug: b.slug,
    tag: b.tag,
  }));

  return (
    <>
      <Navbar />
      <Hero />
      <AnswerFirst />
      <TrustBar />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <WhyDeKorvai />
      <UseCases />
      <UseCaseShowcase />
      <FuzzyDuplicateShowcase />
      <Testimonials />
      <Insights blogs={blogs} events={getEvents()} />
      <FAQ />
      <CTA />
      <GlobalPresence />
      <Footer />
    </>
  );
}

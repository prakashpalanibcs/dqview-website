import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Features from "@/components/Features";
import ProblemSolution from "@/components/ProblemSolution";
import HowItWorks from "@/components/HowItWorks";
import WhyDQView from "@/components/WhyDQView";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import Insights from "@/components/Insights";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GlobalPresence from "@/components/GlobalPresence";
import UseCaseShowcase from "@/components/UseCaseShowcase";
import Comparison from "@/components/Comparison";
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
      <TrustBar />
      <ProblemSolution />
      <Features />
      <HowItWorks />
      <WhyDQView />
      <UseCases />
      <UseCaseShowcase />
      <Comparison />
      <Testimonials />
      <Insights blogs={blogs} events={getEvents()} />
      <CTA />
      <GlobalPresence />
      <Footer />
    </>
  );
}

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
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GlobalPresence from "@/components/GlobalPresence";
import UseCaseShowcase from "@/components/UseCaseShowcase";
import FuzzyDuplicateShowcase from "@/components/FuzzyDuplicateShowcase";

export default function HomeRoute() {
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
      <CTA />
      <GlobalPresence />
      <Footer />
    </>
  );
}

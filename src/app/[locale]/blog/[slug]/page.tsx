import { setRequestLocale, getTranslations } from "next-intl/server";
import { getBlogPosts, getBlogBySlug } from "@/data/blogs";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft, User } from "lucide-react";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const post of getBlogPosts(locale)) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const post = getBlogBySlug(locale, slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | DQ View Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const post = getBlogBySlug(locale, slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-emerald-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToBlog")}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
              {post.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mb-12" />

          {/* Content */}
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {section.heading}
                  </h2>
                )}
                <div className="text-gray-300 leading-relaxed space-y-4">
                  {section.content.split("\n\n").map((paragraph, j) => (
                    <p key={j} className={paragraph.startsWith("\u2022") ? "pl-4" : ""}>
                      {paragraph.split("\n").map((line, k) => (
                        <span key={k}>
                          {line}
                          {k < paragraph.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-surface border border-white/5 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              {t("readyToTransform")}
            </h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
              {t("readyCta")}
            </p>
            <a
              href="https://calendly.com/symphonydemo/bcs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 transition-all shadow-lg shadow-emerald-500/25"
            >
              {t("bookDemo")}
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

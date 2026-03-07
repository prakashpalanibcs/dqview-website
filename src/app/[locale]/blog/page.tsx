import { setRequestLocale, getTranslations } from "next-intl/server";
import { getBlogPosts } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "@/i18n/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "blog" });
  return {
    title: `${t("title1")} ${t("title2")} | DQ View`,
    description: t("subtitle"),
  };
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "blog" });
  const blogPosts = getBlogPosts(locale);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium mb-4 border border-emerald-500/20">
              <BookOpen className="w-3.5 h-3.5" />
              {t("badge")}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t("title1")} <span className="gradient-text">{t("title2")}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              {t("subtitle")}
            </p>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block rounded-2xl bg-surface border border-white/5 p-8 hover:border-emerald-500/20 hover:bg-white/[0.03] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                      {post.tag}
                    </span>
                    <h2 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">
                      {post.excerpt}
                    </p>
                    <p className="text-xs text-gray-500">{t("by")} {post.author}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 group-hover:text-emerald-400 transition-colors shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

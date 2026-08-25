import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getBlogPosts, getBlogBySlug } from "@/lib/content";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, User } from "lucide-react";
import { remark } from "remark";
import html from "remark-html";
import gfm from "remark-gfm";

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} | deKorvai Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations("blog");
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const processedContent = await remark().use(gfm).use(html).process(post.content);
  const contentHtml = processedContent.toString();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="max-w-3xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("backToBlog")}
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
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
          <div
            className="prose prose-invert prose-blue max-w-none prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-a:text-blue-400 prose-strong:text-white prose-table:block prose-table:overflow-x-auto prose-th:text-white prose-th:border-white/10 prose-td:text-gray-300 prose-td:border-white/10 prose-blockquote:text-gray-300 prose-blockquote:border-blue-500/40"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* CTA */}
          <div className="mt-16 p-8 rounded-2xl bg-surface border border-white/5 text-center">
            <h3 className="text-xl font-bold text-white mb-3">
              {t("readyToTransform")}
            </h3>
            <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
              {t("readyCta")}
            </p>
            <a
              href="/contact#book-a-demo"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
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

"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  MapPin,
  Newspaper,
  CalendarDays,
} from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface InsightsProps {
  blogs?: { title: string; excerpt: string; slug: string; tag: string }[];
  events?: { title: string; location: string; description: string; url: string }[];
}

export default function Insights({ blogs: blogData, events = [] }: InsightsProps) {
  const t = useTranslations("insights");

  const displayBlogs = blogData || [];
  const displayEvents = events;

  return (
    <section id="insights" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <BookOpen className="w-3.5 h-3.5" />
            {t("badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("title1")}{" "}
            <span className="gradient-text">{t("title2")}</span>
          </h2>
          <p className="text-gray-400 text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-2 mb-6">
              <Newspaper className="w-4 h-4 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">{t("fromBlog")}</h3>
            </div>
            <div className="space-y-4">
              {displayBlogs.map((blog, index) => (
                <motion.div
                  key={blog.slug}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="group block rounded-xl bg-surface border border-white/5 p-5 hover:border-blue-500/20 hover:bg-white/[0.03] transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-2">
                          {blog.tag}
                        </span>
                        <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors mb-1.5 leading-snug">
                          {blog.title}
                        </h4>
                        {blog.excerpt && (
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {blog.excerpt}
                          </p>
                        )}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors shrink-0 mt-1" />
                    </div>
                  </Link>
                </motion.div>
              ))}
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 transition-colors mt-2"
              >
                {t("viewAllPosts")}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <CalendarDays className="w-4 h-4 text-violet-400" />
              <h3 className="text-lg font-semibold text-white">{t("upcomingEvents")}</h3>
            </div>
            <div className="space-y-4">
              {displayEvents.map((event, index) => (
                <motion.a
                  key={event.title}
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group block rounded-xl bg-surface border border-white/5 p-5 hover:border-violet-500/20 hover:bg-white/[0.03] transition-all"
                >
                  <h4 className="text-sm font-semibold text-white group-hover:text-violet-300 transition-colors mb-1.5">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-2">
                    <MapPin className="w-3 h-3" />
                    {event.location}
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{event.description}</p>
                </motion.a>
              ))}
              <a
                href="#insights"
                className="inline-flex items-center gap-1.5 text-sm text-violet-400 hover:text-violet-300 transition-colors mt-2"
              >
                {t("viewAllEvents")}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

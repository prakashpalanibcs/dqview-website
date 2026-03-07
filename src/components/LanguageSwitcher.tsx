"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "en" as const, label: "EN" },
  { code: "nl" as const, label: "NL" },
  { code: "de" as const, label: "DE" },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function switchLocale(locale: "en" | "nl" | "de") {
    router.replace(pathname, { locale });
    setOpen(false);
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase text-xs font-medium">{currentLocale}</span>
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-32 glass rounded-xl p-1.5 z-50">
          {locales.map((locale) => (
            <button
              key={locale.code}
              onClick={() => switchLocale(locale.code)}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                currentLocale === locale.code
                  ? "text-emerald-400 bg-emerald-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              <span className="font-medium">{locale.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

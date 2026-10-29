"use client";

/* ------------------------------------------------------------------ */
/*  SAP S/4HANA Data Migration — page-specific sections                */
/*                                                                     */
/*  This page is also the landing page for paid ECC-deadline traffic,  */
/*  so it carries its own hero (live ECC countdown, message match with */
/*  the ad creative) and its own two-step lead form instead of the      */
/*  shared platform sections.                                          */
/* ------------------------------------------------------------------ */

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertTriangle,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { MIN_FILL_MS } from "@/lib/contact-config";
import { CONTACT_EMAIL } from "@/lib/contact-content";

const FADE_UP = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
};

/** SAP mainstream maintenance for ECC 6.0 (EHP 6-8) ends 31 Dec 2027. */
const ECC_END_MS = Date.UTC(2027, 11, 31, 23, 59, 59);
/** Ring shows the share left of the final two years (from 31 Dec 2025, when
 *  EHP 0-5 lost mainstream maintenance). */
const ECC_SPAN_MS = ECC_END_MS - Date.UTC(2025, 11, 31, 23, 59, 59);

/** Must match the form `name` in public/__forms.html. */
const NETLIFY_FORM_NAME = "s4hana-data-readiness";

/** Google Ads "Submit lead form" conversion: "AW-<id>/<label>". Same
 *  conversion action as the contact form — one lead definition site-wide. */
const ADS_CONVERSION_SEND_TO = "AW-18374593051/0vEOCMym_NwcEJuU2LlE";

/** Area reported to /api/contact, so the enquiry email is routed and read
 *  like any other migration enquiry. */
const LEAD_AREA = "SAP S/4HANA Data Migration";

const BOOK_ANCHOR = "book";
const PATH_ANCHOR = "path";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface S4HeroContent {
  kicker: string;
  title: string;
  titleHighlight: string;
  lede: string;
  primaryCta: string;
  secondaryCta: string;
  fitsPrefix: string;
  fitsApproaches: string[];
  fitsSuffix: string;
  clockCaption: string;
  clockNote: string;
  clockNoteSmall: string;
}

export interface S4TrustContent {
  lead: string;
  customers: string[];
  credit: string;
  creditOrg: string;
  certification: string;
}

export interface S4FormContent {
  title: string;
  titleHighlight: string;
  lede: string;
  bullets: { title: string; description: string }[];
  assurance: string;
  step1Title: string;
  step2Title: string;
  approachLegend: string;
  approachOptions: string[];
  goLiveLegend: string;
  goLiveOptions: string[];
  continueLabel: string;
  backLabel: string;
  submitLabel: string;
  sendingLabel: string;
  consentLabel: string;
  successTitle: string;
  successBody: string;
  errorTitle: string;
  errorBody: string;
  privacyNote: string;
}

export interface S4StatsContent {
  title: string;
  titleHighlight: string;
  stats: { value: string; label: string; source: string }[];
  bridge: string;
  bridgeEmphasis: string;
}

export interface S4PathContent {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  stages: { title: string; description: string }[];
  loopTitle: string;
  loopBody: string;
}

export interface S4ApproachesContent {
  badge: string;
  title: string;
  titleHighlight: string;
  items: {
    name: string;
    subtitle: string;
    color: string;
    points: string[];
  }[];
}

export interface S4ScaleContent {
  title: string;
  titleHighlight: string;
  lede: string;
  headlineCase: {
    title: string;
    context: string;
    metrics: { value: string; label: string }[];
  };
  cases: { title: string; context: string }[];
  outcomes: { value: string; label: string }[];
  outcomesSource: string;
}

export interface S4FinalCtaContent {
  title: string;
  titleHighlight: string;
  leftPrefix: string;
  leftMiddle: string;
  leftSuffix: string;
  buttonText: string;
}

/* ------------------------------------------------------------------ */
/*  Countdown                                                          */
/*                                                                     */
/*  Starts as null so the server-rendered HTML and the first client     */
/*  render agree; the real figures arrive after mount.                  */
/* ------------------------------------------------------------------ */

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  fraction: number;
}

function readCountdown(): Countdown {
  const remaining = Math.max(0, ECC_END_MS - Date.now());
  return {
    days: Math.floor(remaining / 86_400_000),
    hours: Math.floor((remaining % 86_400_000) / 3_600_000),
    minutes: Math.floor((remaining % 3_600_000) / 60_000),
    seconds: Math.floor((remaining % 60_000) / 1000),
    fraction: Math.min(1, remaining / ECC_SPAN_MS),
  };
}

/* One ticker for the whole page: the hero clock, the closing line and the
   sticky bar all read the same second. Subscribed through
   useSyncExternalStore so the server render (null) and the first client render
   agree, and the live figures arrive straight after hydration. */
let tick: Countdown | null = null;
let ticker: number | undefined;
const tickListeners = new Set<() => void>();

function subscribeToTick(listener: () => void) {
  tickListeners.add(listener);

  if (ticker === undefined) {
    ticker = window.setInterval(() => {
      tick = readCountdown();
      tickListeners.forEach((notify) => notify());
    }, 1000);
  }

  return () => {
    tickListeners.delete(listener);
    if (tickListeners.size === 0 && ticker !== undefined) {
      window.clearInterval(ticker);
      ticker = undefined;
    }
  };
}

/** Must return a cached object — a fresh one each call would loop forever. */
function getTick(): Countdown | null {
  if (!tick) tick = readCountdown();
  return tick;
}

function getServerTick(): Countdown | null {
  return null;
}

function useEccCountdown(): Countdown | null {
  return useSyncExternalStore(subscribeToTick, getTick, getServerTick);
}

function pad(value: number): string {
  return String(value).padStart(2, "0");
}

const RING_RADIUS = 112;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

function EccClock({
  caption,
  note,
  noteSmall,
}: {
  caption: string;
  note: string;
  noteSmall: string;
}) {
  const countdown = useEccCountdown();
  const fraction = countdown?.fraction ?? 1;

  return (
    <aside
      role="timer"
      aria-label={caption}
      className="rounded-3xl border border-rose-500/25 bg-gradient-to-b from-rose-500/[0.07] to-surface p-7 text-center shadow-2xl shadow-rose-900/20"
    >
      <p className="text-sm font-semibold text-rose-300">{caption}</p>

      <div className="relative mx-auto mt-5 w-[200px] h-[200px] sm:w-[230px] sm:h-[230px]">
        <svg viewBox="0 0 250 250" className="w-full h-full -rotate-90" aria-hidden="true">
          <defs>
            <linearGradient id="ecc-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FF8A96" />
              <stop offset="0.55" stopColor="#FF2D55" />
              <stop offset="1" stopColor="#E11D48" />
            </linearGradient>
          </defs>
          <circle cx="125" cy="125" r={RING_RADIUS} fill="none" stroke="#2a1a2c" strokeWidth="12" />
          <circle
            cx="125"
            cy="125"
            r={RING_RADIUS}
            fill="none"
            stroke="url(#ecc-ring)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={RING_CIRCUMFERENCE}
            strokeDashoffset={RING_CIRCUMFERENCE * (1 - fraction)}
            transform={`rotate(${(1 - fraction) * 360} 125 125)`}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-[64px] sm:text-[76px] font-extrabold leading-none tracking-tight text-white tabular-nums">
            {countdown ? countdown.days : "—"}
          </span>
          <span className="mt-1.5 text-sm font-bold text-rose-400">days</span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {[
          { value: countdown ? pad(countdown.hours) : "--", label: "hours" },
          { value: countdown ? pad(countdown.minutes) : "--", label: "minutes" },
          { value: countdown ? pad(countdown.seconds) : "--", label: "seconds" },
        ].map((unit) => (
          <div
            key={unit.label}
            className="rounded-xl border border-rose-500/15 bg-black/30 px-1.5 py-3"
          >
            <span className="block text-2xl font-extrabold tabular-nums text-white">
              {unit.value}
            </span>
            <span className="text-[11px] font-semibold text-gray-500">{unit.label}</span>
          </div>
        ))}
      </div>

      <p className="mt-4 text-[13px] leading-relaxed text-gray-400">
        {note}
        <span className="mt-1.5 block text-xs text-gray-600">{noteSmall}</span>
      </p>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/*  Analytics                                                          */
/* ------------------------------------------------------------------ */

function pushDataLayer(event: string, params: Record<string, string>) {
  const layer = (window.dataLayer = window.dataLayer ?? []);
  layer.push({ event, form_id: NETLIFY_FORM_NAME, ...params });
}

function trackCtaClick(location: string) {
  pushDataLayer("cta_click", { cta_location: location });
}

/* ------------------------------------------------------------------ */
/*  Section: Hero                                                      */
/* ------------------------------------------------------------------ */

export function S4HANAHero({ content }: { content: S4HeroContent }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="hero-glow bg-rose-600 top-0 right-1/4 animate-pulse-glow" />
      <div
        className="hero-glow bg-violet-600 bottom-1/4 left-1/4 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-violet-300 mb-4"
          >
            {content.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight leading-[1.06] text-white"
          >
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-xl text-lg text-gray-300 leading-relaxed"
          >
            {content.lede}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href={`#${BOOK_ANCHOR}`}
              onClick={() => trackCtaClick("hero")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
            >
              {content.primaryCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href={`#${PATH_ANCHOR}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl border border-white/10 text-gray-300 hover:text-white hover:border-violet-500/30 transition-colors"
            >
              {content.secondaryCta}
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32 }}
            className="mt-6 text-sm text-gray-500"
          >
            {content.fitsPrefix}
            {content.fitsApproaches.map((approach, index) => (
              <span key={approach}>
                <span className="text-gray-300 font-semibold">{approach}</span>
                {index < content.fitsApproaches.length - 2
                  ? ", "
                  : index === content.fitsApproaches.length - 2
                    ? " and "
                    : ""}
              </span>
            ))}
            {content.fitsSuffix}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <EccClock
            caption={content.clockCaption}
            note={content.clockNote}
            noteSmall={content.clockNoteSmall}
          />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Trust strip                                               */
/* ------------------------------------------------------------------ */

export function S4HANATrustStrip({ content }: { content: S4TrustContent }) {
  return (
    <section className="border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <span className="text-sm text-gray-500">{content.lead}</span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {content.customers.map((customer) => (
            <span key={customer} className="text-sm font-semibold text-gray-300">
              {customer}
            </span>
          ))}
        </div>
        <span className="text-[13px] text-gray-500 sm:ml-auto sm:text-right">
          {content.credit}{" "}
          <span className="font-semibold text-gray-300">{content.creditOrg}</span>
          <span className="mt-1 flex items-center gap-1.5 font-semibold text-gray-300 sm:justify-end">
            <ShieldCheck className="h-3.5 w-3.5 text-violet-400" aria-hidden="true" />
            {content.certification}
          </span>
        </span>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Data readiness session (offer + two-step lead form)       */
/* ------------------------------------------------------------------ */

const CHIP_BASE =
  "cursor-pointer rounded-full border px-4 py-2.5 text-sm font-medium transition-colors";
const CHIP_OFF =
  "border-white/10 bg-[#0e0b1c] text-gray-400 hover:border-violet-500/40 hover:text-white";
const CHIP_ON = "border-violet-500 bg-violet-500/15 text-white";

const FIELD_CLASS =
  "w-full rounded-xl bg-[#0e0b1c] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors";

type FormStatus = "idle" | "sending" | "success" | "error";

const EMPTY_LEAD = {
  approach: "",
  goLive: "",
  fullName: "",
  email: "",
  company: "",
  jobTitle: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function ChipGroup({
  legend,
  name,
  options,
  value,
  onChange,
  invalid,
  error,
}: {
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  invalid: boolean;
  error: string;
}) {
  return (
    <fieldset className="mb-6">
      <legend className="text-sm font-semibold text-gray-200 mb-3">{legend}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => (
          <label key={option} className={`${CHIP_BASE} ${value === option ? CHIP_ON : CHIP_OFF}`}>
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            {option}
          </label>
        ))}
      </div>
      {invalid && <p className="mt-2 text-[13px] text-rose-300">{error}</p>}
    </fieldset>
  );
}

function ReadinessForm({ content }: { content: S4FormContent }) {
  const [step, setStep] = useState<1 | 2>(1);
  const [values, setValues] = useState(EMPTY_LEAD);
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [stepOneErrors, setStepOneErrors] = useState({ approach: false, goLive: false });
  const [fieldErrors, setFieldErrors] = useState({
    fullName: false,
    email: false,
    company: false,
  });
  /** Honeypot: bots fill hidden inputs, humans never see this one. */
  const [honeypot, setHoneypot] = useState("");

  /* Mount time, for the anti-bot timing check. 0 means "not stamped yet",
     which the server reads as "skip the check". */
  const mountedAt = useRef(0);
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  /** Google Ads should hear about a lead once per visitor. */
  const conversionSent = useRef(false);

  function update(field: keyof typeof EMPTY_LEAD, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function handleContinue() {
    const errors = { approach: !values.approach, goLive: !values.goLive };
    setStepOneErrors(errors);
    if (errors.approach || errors.goLive) return;

    pushDataLayer("form_start", { approach: values.approach, go_live: values.goLive });
    setStep(2);
  }

  /** Records the enquiry in the Netlify Forms dashboard. Netlify expects a
   *  urlencoded body with a `form-name` declared in public/__forms.html. Only
   *  works on Netlify — locally a POST to a static file 405s, handled below as
   *  a non-fatal miss. */
  function submitToNetlifyForms() {
    return fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": NETLIFY_FORM_NAME,
        approach: values.approach,
        goLive: values.goLive,
        fullName: values.fullName,
        email: values.email,
        company: values.company,
        jobTitle: values.jobTitle,
        marketingConsent: consent ? "yes" : "no",
        pageUrl: window.location.href.split("#")[0],
        website: honeypot,
      }).toString(),
    });
  }

  /** Sends the enquiry as email through the shared contact route, which keeps
   *  one delivery path (Microsoft Graph) for every form on the site. */
  function submitToGraph(elapsed: number) {
    const message = [
      `Data readiness session request (S/4HANA migration landing page).`,
      `Migration approach: ${values.approach}`,
      `Target go-live: ${values.goLive}`,
      values.jobTitle ? `Job title: ${values.jobTitle}` : "",
      `Marketing consent: ${consent ? "yes" : "no"}`,
    ]
      .filter(Boolean)
      .join("\n");

    return fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        area: LEAD_AREA,
        fullName: values.fullName,
        email: values.email,
        company: values.company,
        country: "",
        message,
        attribution: "S/4HANA migration page",
        website: honeypot,
        elapsed,
      }),
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const errors = {
      fullName: !values.fullName.trim(),
      email: !EMAIL_PATTERN.test(values.email.trim()),
      company: !values.company.trim(),
    };
    setFieldErrors(errors);
    if (errors.fullName || errors.email || errors.company) return;

    setStatus("sending");
    const elapsed = mountedAt.current ? Date.now() - mountedAt.current : 0;

    // Netlify Forms first, so the lead is recorded in the dashboard before the
    // email is attempted and a Graph outage can never lose it. A failure here
    // does not stop the email.
    let netlifyOk = false;
    try {
      const response = await submitToNetlifyForms();
      netlifyOk = response.ok;
      if (!netlifyOk) {
        console.warn(`[s4hana] Netlify Forms capture missed (${response.status})`);
      }
    } catch (error) {
      console.warn("[s4hana] Netlify Forms capture missed", error);
    }

    let graphOk = false;
    try {
      const response = await submitToGraph(elapsed);
      graphOk = response.ok;
      if (!graphOk) {
        console.error(`[s4hana] email delivery failed (${response.status})`);
      }
    } catch (error) {
      console.error("[s4hana] email delivery failed", error);
    }

    if (!graphOk && !netlifyOk) {
      setStatus("error");
      return;
    }

    // The anti-bot checks are re-run here rather than inferred from the
    // response: /api/contact answers 200 to honeypot and too-fast submissions
    // on purpose, so a 200 is not proof of a real lead.
    const looksHuman = !honeypot && elapsed >= MIN_FILL_MS;
    if (looksHuman && !conversionSent.current) {
      conversionSent.current = true;
      pushDataLayer("generate_lead", {
        approach: values.approach,
        go_live: values.goLive,
      });
      window.gtag?.("event", "conversion", {
        send_to: ADS_CONVERSION_SEND_TO,
        value: 1.0,
        currency: "INR",
      });
    }

    setStatus("success");
  }

  if (status === "success") {
    const firstName = values.fullName.trim().split(" ")[0];
    return (
      <div className="rounded-3xl border border-white/10 bg-surface px-8 py-12 text-center">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
          {firstName ? `Thank you, ${firstName}. ` : ""}
          {content.successTitle}
        </h3>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          {content.successBody.replace("{email}", values.email.trim())}
        </p>
      </div>
    );
  }

  return (
    <div
      id="readiness-form"
      className="relative rounded-3xl border border-white/10 bg-surface p-7 sm:p-8 shadow-2xl shadow-black/40"
    >
      <span className="absolute left-6 right-6 top-0 h-0.5 rounded bg-gradient-to-r from-blue-500 to-violet-500" />

      <form onSubmit={handleSubmit} noValidate>
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-bold text-white">
            {step === 1 ? content.step1Title : content.step2Title}
          </h3>
          <span className="shrink-0 text-[13px] font-semibold text-gray-500">
            Step {step} of 2
          </span>
        </div>
        <div className="mt-4 mb-6 h-[3px] rounded bg-white/10 overflow-hidden">
          <span
            className="block h-full rounded bg-gradient-to-r from-blue-500 to-violet-500 transition-[width] duration-300"
            style={{ width: step === 1 ? "50%" : "100%" }}
          />
        </div>

        {step === 1 ? (
          <>
            <ChipGroup
              legend={content.approachLegend}
              name="approach"
              options={content.approachOptions}
              value={values.approach}
              onChange={(value) => {
                update("approach", value);
                setStepOneErrors((prev) => ({ ...prev, approach: false }));
              }}
              invalid={stepOneErrors.approach}
              error={'Choose an approach, or "Not decided yet".'}
            />
            <ChipGroup
              legend={content.goLiveLegend}
              name="goLive"
              options={content.goLiveOptions}
              value={values.goLive}
              onChange={(value) => {
                update("goLive", value);
                setStepOneErrors((prev) => ({ ...prev, goLive: false }));
              }}
              invalid={stepOneErrors.goLive}
              error={'Choose a timeframe, or "Not set yet".'}
            />
            <button
              type="button"
              onClick={handleContinue}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              {content.continueLabel}
              <ArrowRight className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label htmlFor="s4-name" className="block text-sm font-semibold text-gray-200 mb-2">
                Full name <span className="text-violet-400">*</span>
              </label>
              <input
                id="s4-name"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Priya Raman"
                value={values.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                className={FIELD_CLASS}
              />
              {fieldErrors.fullName && (
                <p className="mt-2 text-[13px] text-rose-300">Enter your full name.</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="s4-email" className="block text-sm font-semibold text-gray-200 mb-2">
                Work email <span className="text-violet-400">*</span>
              </label>
              <input
                id="s4-email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={values.email}
                onChange={(e) => update("email", e.target.value)}
                className={FIELD_CLASS}
              />
              {fieldErrors.email && (
                <p className="mt-2 text-[13px] text-rose-300">
                  Enter a valid work email, for example name@company.com.
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="s4-company"
                className="block text-sm font-semibold text-gray-200 mb-2"
              >
                Company <span className="text-violet-400">*</span>
              </label>
              <input
                id="s4-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Company name"
                value={values.company}
                onChange={(e) => update("company", e.target.value)}
                className={FIELD_CLASS}
              />
              {fieldErrors.company && (
                <p className="mt-2 text-[13px] text-rose-300">Enter your company name.</p>
              )}
            </div>

            <div className="mb-5">
              <label htmlFor="s4-title" className="block text-sm font-semibold text-gray-200 mb-2">
                Job title <span className="font-medium text-gray-500">(optional)</span>
              </label>
              <input
                id="s4-title"
                name="jobTitle"
                type="text"
                autoComplete="organization-title"
                placeholder="Migration lead, CIO, finance director"
                value={values.jobTitle}
                onChange={(e) => update("jobTitle", e.target.value)}
                className={FIELD_CLASS}
              />
            </div>

            <label className="flex items-start gap-3 mb-5 text-[13px] text-gray-500">
              <input
                type="checkbox"
                name="marketingConsent"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 shrink-0 accent-violet-500"
              />
              <span>{content.consentLabel}</span>
            </label>

            {/* Honeypot — visually removed but still focusable/fillable by bots.
                Deliberately not display:none, which many bots skip. */}
            <div
              className="absolute -left-[9999px] top-0 h-0 overflow-hidden"
              aria-hidden="true"
            >
              <label htmlFor="s4-website">Website</label>
              <input
                id="s4-website"
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {content.sendingLabel}
                </>
              ) : (
                <>
                  {content.submitLabel}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {status === "error" && (
              <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4">
                <p className="text-sm font-semibold text-red-300 mb-1">{content.errorTitle}</p>
                <p className="text-sm text-gray-400">
                  {content.errorBody}{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-violet-400 hover:text-violet-300"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setStep(1)}
              className="mt-4 block w-full text-sm text-gray-500 hover:text-white transition-colors cursor-pointer"
            >
              {content.backLabel}
            </button>

            <p className="mt-4 text-xs text-gray-600 leading-relaxed">{content.privacyNote}</p>
          </>
        )}
      </form>
    </div>
  );
}

export function S4HANAReadinessSection({ content }: { content: S4FormContent }) {
  return (
    <section id={BOOK_ANCHOR} className="relative py-20 lg:py-24 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div {...FADE_UP}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">{content.lede}</p>
          <ul className="mt-8 border-t border-white/5">
            {content.bullets.map((bullet) => (
              <li key={bullet.title} className="border-b border-white/5 py-4 pl-8 relative">
                <span className="absolute left-0 top-[26px] h-[3px] w-4 rounded bg-gradient-to-r from-blue-500 to-violet-500" />
                <span className="font-semibold text-white">{bullet.title}</span>{" "}
                <span className="text-gray-400">{bullet.description}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-gray-500">{content.assurance}</p>
        </motion.div>

        <motion.div {...FADE_UP} transition={{ delay: 0.1 }}>
          <ReadinessForm content={content} />
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Urgency stats                                             */
/* ------------------------------------------------------------------ */

export function S4HANAUrgencyStats({ content }: { content: S4StatsContent }) {
  return (
    <section className="relative py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 {...FADE_UP} className="text-3xl sm:text-4xl font-bold text-white max-w-2xl">
          {content.title}
          <span className="gradient-text">{content.titleHighlight}</span>
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 border-t border-white/5">
          {content.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...FADE_UP}
              transition={{ delay: index * 0.08 }}
              className="py-7 md:px-8 md:first:pl-0 border-b md:border-b-0 border-white/5 md:border-l md:first:border-l-0 md:border-white/5"
            >
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text">{stat.value}</div>
              <p className="mt-3 text-[15px] text-gray-300 leading-relaxed max-w-[30ch]">
                {stat.label}
              </p>
              <cite className="mt-2.5 block text-xs not-italic text-gray-600">{stat.source}</cite>
            </motion.div>
          ))}
        </div>

        <motion.p {...FADE_UP} className="mt-10 max-w-3xl text-lg text-gray-400 leading-relaxed">
          {content.bridge}{" "}
          <span className="font-semibold text-white">{content.bridgeEmphasis}</span>
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: The data path (7 stages)                                  */
/* ------------------------------------------------------------------ */

export function S4HANADataPath({ content }: { content: S4PathContent }) {
  return (
    <section id={PATH_ANCHOR} className="relative py-20 lg:py-24 scroll-mt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div {...FADE_UP} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 text-xs font-medium mb-4 border border-violet-500/20">
            <Clock className="w-3.5 h-3.5" />
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">{content.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
          {content.stages.map((stage, index) => (
            <motion.div key={stage.title} {...FADE_UP} transition={{ delay: index * 0.05 }}>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-violet-500 bg-background text-base font-extrabold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-base font-bold text-white leading-snug">{stage.title}</h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{stage.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...FADE_UP}
          className="mt-12 grid gap-4 rounded-2xl border border-white/10 bg-surface px-6 py-6 md:grid-cols-[auto_1fr] md:items-center md:gap-6"
        >
          <span className="text-[17px] font-bold text-white">{content.loopTitle}</span>
          <p className="text-[15px] text-gray-400 leading-relaxed">{content.loopBody}</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Migration approaches                                      */
/* ------------------------------------------------------------------ */

export function S4HANAApproaches({ content }: { content: S4ApproachesContent }) {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...FADE_UP} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            {content.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-7 md:grid-cols-3">
          {content.items.map((item, index) => (
            <motion.div key={item.name} {...FADE_UP} transition={{ delay: index * 0.08 }}>
              <div
                className="h-[3px] w-full rounded"
                style={{ backgroundColor: item.color }}
                aria-hidden="true"
              />
              <h3
                className="mt-5 text-xl font-extrabold tracking-tight"
                style={{ color: item.color }}
              >
                {item.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
              <ul className="mt-5">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="border-b border-white/5 py-2.5 text-[15px] text-gray-400 last:border-b-0"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Scale and customer proof                                  */
/* ------------------------------------------------------------------ */

export function S4HANAScaleProof({ content }: { content: S4ScaleContent }) {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          {...FADE_UP}
          className="grid gap-6 border-b border-white/5 pb-10 lg:grid-cols-[1.2fr_1fr] lg:items-end"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white max-w-[20ch]">
            {content.title}
            <span className="gradient-text">{content.titleHighlight}</span>
          </h2>
          <p className="text-[17px] text-gray-400 leading-relaxed">{content.lede}</p>
        </motion.div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          <motion.div
            {...FADE_UP}
            className="rounded-2xl border border-white/5 bg-surface p-7"
          >
            <h3 className="text-lg font-bold text-white">{content.headlineCase.title}</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">
              {content.headlineCase.context}
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-5">
              {content.headlineCase.metrics.map((metric) => (
                <div key={metric.label}>
                  <dt className="text-2xl font-extrabold tracking-tight gradient-text">
                    {metric.value}
                  </dt>
                  <dd className="mt-1.5 text-[13px] text-gray-500">{metric.label}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <div className="grid gap-5">
            {content.cases.map((item, index) => (
              <motion.div
                key={item.title}
                {...FADE_UP}
                transition={{ delay: 0.06 * (index + 1) }}
                className="rounded-2xl border border-white/5 bg-surface p-7"
              >
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.context}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div {...FADE_UP} className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3">
          {content.outcomes.map((outcome) => (
            <div key={outcome.label} className="flex items-baseline gap-2.5">
              <span className="text-2xl font-extrabold gradient-text">{outcome.value}</span>
              <span className="text-[15px] text-gray-400">{outcome.label}</span>
            </div>
          ))}
          <p className="w-full text-xs text-gray-600">{content.outcomesSource}</p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Final CTA                                                 */
/* ------------------------------------------------------------------ */

export function S4HANAFinalCta({ content }: { content: S4FinalCtaContent }) {
  const countdown = useEccCountdown();

  return (
    <section className="relative border-t border-white/5 py-20 lg:py-24 text-center">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(800px_360px_at_50%_0%,rgba(109,91,240,0.22),transparent_65%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          {content.title}
          <span className="gradient-text">{content.titleHighlight}</span>
        </h2>
        <p className="mt-5 mb-8 text-[17px] text-gray-400">
          {content.leftPrefix}
          <span className="font-extrabold text-rose-400 tabular-nums">
            {countdown ? countdown.days : "—"}
          </span>
          {content.leftMiddle}
          <span className="font-extrabold text-rose-400 tabular-nums">
            {countdown ? pad(countdown.hours) : "--"}
          </span>
          {content.leftSuffix}
        </p>
        <a
          href={`#${BOOK_ANCHOR}`}
          onClick={() => trackCtaClick("final")}
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:from-blue-400 hover:to-violet-400 transition-all shadow-lg shadow-blue-500/25"
        >
          {content.buttonText}
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sticky mobile CTA                                                  */
/*                                                                     */
/*  Hides itself while the form is on screen, so it never covers the    */
/*  thing it is pointing at.                                           */
/* ------------------------------------------------------------------ */

export function S4HANAStickyCta({ label }: { label: string }) {
  const countdown = useEccCountdown();
  const [hidden, setHidden] = useState(false);

  const observe = useCallback(() => {
    const target = document.getElementById(BOOK_ANCHOR);
    if (!target || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => setHidden(entries[0].isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(observe, [observe]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 flex items-center gap-3 border-t border-white/10 bg-background/95 px-4 py-3 backdrop-blur-md transition-transform lg:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <p className="text-[13px] leading-tight text-gray-400">
        <span className="font-bold text-rose-400 tabular-nums">
          {countdown ? countdown.days : "—"}
        </span>{" "}
        days left
        <br />
        on ECC maintenance
      </p>
      <a
        href={`#${BOOK_ANCHOR}`}
        onClick={() => trackCtaClick("sticky")}
        className="ml-auto inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2.5 text-sm font-semibold text-white"
      >
        {label}
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Deadline notice (used above the FAQ)                               */
/* ------------------------------------------------------------------ */

export function S4HANADeadlineNote({ text }: { text: string }) {
  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-start gap-3 rounded-2xl border border-rose-500/20 bg-rose-500/[0.05] px-6 py-5">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
        <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

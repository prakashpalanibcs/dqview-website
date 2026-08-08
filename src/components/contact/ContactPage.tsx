"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  CalendarDays,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  Globe,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import {
  CONTACT_HERO,
  CONTACT_TABS,
  CONTACT_FORM,
  CONTACT_OFFICES,
  CONTACT_OFFICES_SECTION,
  CONTACT_DIRECT,
  CONTACT_ATTRIBUTION,
  CONTACT_EMAIL,
  CONTACT_LINKEDIN,
  AREA_OF_INTEREST_OPTIONS,
  ATTRIBUTION_OPTIONS,
} from "@/lib/contact-content";

const CALENDLY_URL =
  "https://calendly.com/gokulprasad-s-businesscoresolutions/30min";

/** Must match the form `name` in public/__forms.html. */
const NETLIFY_FORM_NAME = "contact";

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

function ContactHero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="hero-glow bg-blue-600 top-1/4 left-1/4 animate-pulse-glow" />
      <div
        className="hero-glow bg-violet-600 bottom-0 right-1/4 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-5 border border-blue-500/20"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {CONTACT_HERO.badge}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-6"
        >
          Let&apos;s Start a{" "}
          <span className="gradient-text">Conversation</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          {CONTACT_HERO.lead}
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Form field primitives                                              */
/* ------------------------------------------------------------------ */

const FIELD_CLASS =
  "w-full rounded-xl bg-[#0e0b1c] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-violet-500/60 focus:ring-1 focus:ring-violet-500/30 transition-colors";

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-semibold text-gray-200 mb-2"
    >
      {children}
      {required && <span className="text-violet-400 ml-1">*</span>}
    </label>
  );
}

/* ------------------------------------------------------------------ */
/*  Message form                                                       */
/*                                                                     */
/*  Submits to the /api/contact route handler, which sends the enquiry  */
/*  via Microsoft Graph (see src/lib/email.ts). Validation is repeated  */
/*  server-side — the checks here are only for fast user feedback.      */
/*  On failure the entered values are kept and a mailto fallback shown. */
/* ------------------------------------------------------------------ */

const EMPTY_FORM = {
  area: "",
  fullName: "",
  email: "",
  company: "",
  country: "",
  message: "",
  attribution: "",
};

function MessageForm() {
  const [values, setValues] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  /** Honeypot: bots fill hidden inputs, humans never see this one. */
  const [honeypot, setHoneypot] = useState("");

  /* Mount time, for the anti-bot timing check. Stamped in an effect rather than
     useRef(Date.now()) — the latter calls an impure function during render. 0
     means "not yet stamped", which the server reads as "skip the check". */
  const mountedAt = useRef(0);
  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  function update(field: keyof typeof EMPTY_FORM, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  /** Sends the enquiry as email via Microsoft Graph. */
  function submitToGraph() {
    return fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        website: honeypot,
        elapsed: mountedAt.current ? Date.now() - mountedAt.current : 0,
      }),
    });
  }

  /**
   * Records the enquiry in the Netlify Forms dashboard as a second, independent
   * copy. Netlify expects a urlencoded body with a `form-name` matching the
   * declaration in public/__forms.html. This only works on Netlify — locally
   * a POST to a static file 405s, which is handled as a non-fatal miss below.
   */
  function submitToNetlifyForms() {
    return fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": NETLIFY_FORM_NAME,
        ...values,
        website: honeypot,
      }).toString(),
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");

    // Sequential, Netlify Forms first: the enquiry is recorded in the dashboard
    // before the email is attempted, so a Graph outage can never lose a lead.
    // Step 1 failing does NOT stop step 2 — the email is the delivery that
    // matters, and locally there is no Netlify Forms endpoint at all.
    let netlifyOk = false;
    try {
      const netlifyResponse = await submitToNetlifyForms();
      netlifyOk = netlifyResponse.ok;
      if (!netlifyOk) {
        console.warn(
          `[contact] Netlify Forms capture missed (${netlifyResponse.status})`
        );
      }
    } catch (error) {
      console.warn("[contact] Netlify Forms capture missed", error);
    }

    let graphOk = false;
    try {
      const graphResponse = await submitToGraph();
      graphOk = graphResponse.ok;
      if (!graphOk) {
        console.error(`[contact] email delivery failed (${graphResponse.status})`);
      }
    } catch (error) {
      console.error("[contact] email delivery failed", error);
    }

    // Treat it as sent if either destination accepted it — the enquiry is
    // recorded and the visitor should not be asked to submit twice. Only both
    // failing is a real failure.
    if (graphOk || netlifyOk) {
      setStatus("success");
      setValues(EMPTY_FORM);
    } else {
      // Keep the entered values so nobody has to retype after a failure.
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-[#0e0b1c] px-8 py-12 text-center">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
          {CONTACT_FORM.successTitle}
        </h3>
        <p className="text-sm text-gray-400 max-w-md mx-auto mb-7">
          {CONTACT_FORM.successBody}
        </p>
        <button
          type="button"
          onClick={() => {
            mountedAt.current = Date.now();
            setStatus("idle");
          }}
          className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors cursor-pointer"
        >
          {CONTACT_FORM.successAgainLabel}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate={false} className="relative">
      <p className="text-sm text-gray-400 leading-relaxed mb-7">
        {CONTACT_TABS.message.intro}
      </p>

      <div className="mb-5">
        <FieldLabel htmlFor="area" required>
          {CONTACT_FORM.areaLabel}
        </FieldLabel>
        <select
          id="area"
          name="area"
          required
          value={values.area}
          onChange={(e) => update("area", e.target.value)}
          className={`${FIELD_CLASS} cursor-pointer appearance-none bg-no-repeat bg-[right_1rem_center]`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23a78bfa' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="">{CONTACT_FORM.areaPlaceholder}</option>
          {AREA_OF_INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <FieldLabel htmlFor="fullName" required>
            {CONTACT_FORM.fullNameLabel}
          </FieldLabel>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            autoComplete="name"
            placeholder={CONTACT_FORM.fullNamePlaceholder}
            value={values.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            className={FIELD_CLASS}
          />
        </div>
        <div>
          <FieldLabel htmlFor="email" required>
            {CONTACT_FORM.emailLabel}
          </FieldLabel>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={CONTACT_FORM.emailPlaceholder}
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <FieldLabel htmlFor="company" required>
            {CONTACT_FORM.companyLabel}
          </FieldLabel>
          <input
            id="company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder={CONTACT_FORM.companyPlaceholder}
            value={values.company}
            onChange={(e) => update("company", e.target.value)}
            className={FIELD_CLASS}
          />
        </div>
        <div>
          <FieldLabel htmlFor="country">{CONTACT_FORM.countryLabel}</FieldLabel>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            placeholder={CONTACT_FORM.countryPlaceholder}
            value={values.country}
            onChange={(e) => update("country", e.target.value)}
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div className="mb-5">
        <FieldLabel htmlFor="message" required>
          {CONTACT_FORM.messageLabel}
        </FieldLabel>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={CONTACT_FORM.messagePlaceholder}
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${FIELD_CLASS} min-h-[120px] resize-y`}
        />
      </div>

      <div className="mb-6">
        <FieldLabel htmlFor="attribution">
          {CONTACT_FORM.attributionLabel}
        </FieldLabel>
        <select
          id="attribution"
          name="attribution"
          value={values.attribution}
          onChange={(e) => update("attribution", e.target.value)}
          className={`${FIELD_CLASS} cursor-pointer appearance-none bg-no-repeat bg-[right_1rem_center]`}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23a78bfa' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="">{CONTACT_FORM.attributionPlaceholder}</option>
          {ATTRIBUTION_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Honeypot — visually removed but still focusable/fillable by bots.
          Deliberately not display:none, which many bots skip. */}
      <div className="absolute -left-[9999px] top-0 h-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
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
            {CONTACT_FORM.sendingLabel}
          </>
        ) : (
          <>
            {CONTACT_FORM.submitLabel}
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {status === "error" && (
        <div className="mt-5 rounded-xl border border-red-500/20 bg-red-500/5 px-5 py-4">
          <p className="text-sm font-semibold text-red-300 mb-1">
            {CONTACT_FORM.errorTitle}
          </p>
          <p className="text-sm text-gray-400">
            {CONTACT_FORM.errorBody}{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-violet-400 font-semibold hover:text-violet-300"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      )}

      <p className="text-xs text-gray-500 text-center mt-4">
        {CONTACT_FORM.note}
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */
/*  Book-a-demo panel                                                  */
/* ------------------------------------------------------------------ */

const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

/** Colour params are honoured on paid Calendly plans and ignored otherwise,
 *  in which case the scheduler falls back to its default light styling. */
const CALENDLY_EMBED_URL =
  `${CALENDLY_URL}?hide_gdpr_banner=1` +
  "&background_color=13112b&text_color=ededed&primary_color=8b5cf6";

type WindowWithCalendly = Window & {
  Calendly?: {
    initInlineWidget: (options: {
      url: string;
      parentElement: HTMLElement;
    }) => void;
  };
};

function DemoPanel() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function mountWidget() {
      if (cancelled) return;
      const { Calendly } = window as WindowWithCalendly;
      if (!Calendly || !hostRef.current) {
        setFailed(true);
        return;
      }
      // Re-mounting (tab toggled) would otherwise stack iframes.
      hostRef.current.innerHTML = "";
      Calendly.initInlineWidget({
        url: CALENDLY_EMBED_URL,
        parentElement: hostRef.current,
      });
    }

    if ((window as WindowWithCalendly).Calendly) {
      mountWidget();
      return () => {
        cancelled = true;
      };
    }

    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    );
    const script = existing ?? document.createElement("script");
    const handleError = () => !cancelled && setFailed(true);

    script.addEventListener("load", mountWidget);
    script.addEventListener("error", handleError);

    if (!existing) {
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      cancelled = true;
      script.removeEventListener("load", mountWidget);
      script.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div>
      <p className="text-sm text-gray-400 leading-relaxed mb-7">
        {CONTACT_TABS.demo.intro}
      </p>

      {/* Calendly inline scheduler */}
      <div className="rounded-2xl border border-white/10 bg-[#0e0b1c] overflow-hidden">
        {/* Calendly's inline iframe does not auto-grow, so the height must
            clear its tallest step (date + timezone, then time selection).
            Mobile stacks that content, so it needs more room than desktop. */}
        <div
          ref={hostRef}
          className="min-w-[320px] w-full h-[1000px] sm:h-[900px]"
          aria-label={CONTACT_TABS.demo.label}
        />
      </div>

      {failed && (
        <p className="text-sm text-gray-400 text-center mt-5">
          {CONTACT_TABS.demo.fallbackLead}{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-violet-400 font-semibold hover:text-violet-300"
          >
            {CONTACT_TABS.demo.fallbackLabel}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </p>
      )}

      <p className="text-xs text-gray-500 text-center mt-4">
        {CONTACT_TABS.demo.note}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Tabs                                                               */
/* ------------------------------------------------------------------ */

const TABS = [
  { id: "message", label: CONTACT_TABS.message.label, icon: Mail },
  { id: "demo", label: CONTACT_TABS.demo.label, icon: CalendarDays },
] as const;

/** Demo CTAs across the site link to /contact#book-a-demo so the visitor
 *  lands on the booking tab rather than the message form. */
export const DEMO_TAB_HASH = "book-a-demo";

function ContactTabs() {
  const [active, setActive] = useState<"message" | "demo">("message");

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === `#${DEMO_TAB_HASH}`) setActive("demo");
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section id={DEMO_TAB_HASH} className="relative -mt-10 pb-24 scroll-mt-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-2xl bg-surface border border-white/10 overflow-hidden shadow-2xl shadow-black/40">
          {/* Tab head */}
          <div className="grid grid-cols-2 border-b border-white/10" role="tablist">
            {TABS.map((tab) => {
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center justify-center gap-2.5 px-4 py-5 text-sm font-semibold border-b-2 transition-colors cursor-pointer ${
                    isActive
                      ? "text-white border-violet-500 bg-white/[0.03]"
                      : "text-gray-400 border-transparent hover:text-white"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Panels */}
          <div className="p-7 sm:p-9">
            <div
              role="tabpanel"
              id="panel-message"
              aria-labelledby="tab-message"
              hidden={active !== "message"}
            >
              {active === "message" && <MessageForm />}
            </div>
            <div
              role="tabpanel"
              id="panel-demo"
              aria-labelledby="tab-demo"
              hidden={active !== "demo"}
            >
              {active === "demo" && <DemoPanel />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Global offices                                                     */
/* ------------------------------------------------------------------ */

function ContactOffices() {
  return (
    <section className="relative py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium mb-4 border border-blue-500/20">
            <Globe className="w-3.5 h-3.5" />
            {CONTACT_OFFICES_SECTION.eyebrow}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Six countries,{" "}
            <span className="gradient-text">one delivery network</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            {CONTACT_OFFICES_SECTION.lead}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CONTACT_OFFICES.map((office, index) => (
            <motion.div
              key={office.code}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl bg-surface border border-white/5 p-6 hover:border-violet-500/20 hover:bg-white/[0.03] transition-all"
            >
              <div className="text-xs font-bold tracking-[0.08em] text-violet-400 mb-3">
                {office.code}
              </div>
              <h3 className="text-base font-bold text-white mb-1">
                {office.country}
              </h3>
              <p className="text-xs font-semibold text-gray-500 mb-2">
                {office.role}
              </p>
              <p className="text-sm text-gray-400">{office.city}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Direct contact                                                     */
/* ------------------------------------------------------------------ */

function ContactDirect() {
  return (
    <section className="relative pb-20 lg:pb-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {CONTACT_DIRECT.title}
        </h2>
        <p className="text-sm text-gray-400 mb-8">{CONTACT_DIRECT.lead}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-surface border border-white/10 text-sm font-semibold text-white hover:border-violet-500/30 transition-colors"
          >
            <Mail className="w-4 h-4 text-violet-400" />
            {CONTACT_DIRECT.emailLabel}
          </a>
          <a
            href={CONTACT_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-surface border border-white/10 text-sm font-semibold text-white hover:border-violet-500/30 transition-colors"
          >
            <Linkedin className="w-4 h-4 text-violet-400" />
            {CONTACT_DIRECT.linkedinLabel}
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
          </a>
        </div>

        <p className="text-sm text-gray-500 mt-12">
          {CONTACT_ATTRIBUTION.before}
          <a
            href={CONTACT_ATTRIBUTION.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-400 font-semibold hover:text-violet-300 transition-colors"
          >
            {CONTACT_ATTRIBUTION.linkLabel}
          </a>
          {CONTACT_ATTRIBUTION.after}
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactTabs />
      <ContactOffices />
      <ContactDirect />
    </>
  );
}

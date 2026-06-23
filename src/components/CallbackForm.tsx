"use client";

import { useActionState, useEffect } from "react";
import { Send, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";
import { requestCallback, type CallbackFormState } from "@/app/actions";

const initialState: CallbackFormState = {
  ok: false,
  message: "",
};

export function CallbackForm() {
  const [state, formAction, pending] = useActionState(
    requestCallback,
    initialState,
  );

  useEffect(() => {
    if (!state.ok) {
      return;
    }

    window.gtag?.("event", "callback_form_submit", {
      event_category: "conversion",
      event_label: "callback_form",
      value: 1,
    });

    if (site.googleAdsId && site.googleAdsConversionLabel) {
      window.gtag_report_conversion?.();
    }
  }, [state.ok]);

  return (
    <form
      action={formAction}
      className="rounded-md border-2 border-slate-950 bg-white p-5 shadow-2xl shadow-slate-300 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-5">
        <div>
          <p className="text-sm font-black uppercase text-amber-600">
            Request a call back
          </p>
          <h2 className="mt-2 text-2xl font-black tracking-normal text-slate-950 sm:text-3xl">
            Get a fast call back
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Leave your number and suburb. Aaron will call back about the job,
            price, and next step.
          </p>
        </div>
        <div className="hidden size-12 shrink-0 items-center justify-center rounded-md bg-amber-400 text-slate-950 sm:flex">
          <ShieldCheck aria-hidden="true" size={24} />
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        <input
          autoComplete="name"
          className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-amber-300"
          name="name"
          placeholder="Full name"
          required
          type="text"
        />
        <input
          autoComplete="tel"
          className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-amber-300"
          name="phone"
          placeholder="Phone number"
          required
          type="tel"
        />
        <input
          autoComplete="email"
          className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-amber-300"
          name="email"
          placeholder="Email address (optional)"
          type="email"
        />
        <input
          autoComplete="street-address"
          className="min-h-12 rounded-md border border-slate-300 bg-white px-4 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-amber-300"
          name="address"
          placeholder="Auckland suburb or address (optional)"
          type="text"
        />
        <textarea
          className="min-h-28 resize-y rounded-md border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-slate-950 focus:ring-2 focus:ring-amber-300"
          name="message"
          placeholder="Briefly describe the electrical job (optional)"
        />
      </div>

      <input
        autoComplete="off"
        className="hidden"
        name="website"
        tabIndex={-1}
        type="text"
      />

      <button
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-amber-400 px-5 text-sm font-black text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
        disabled={pending}
        type="submit"
      >
        <Send aria-hidden="true" size={18} />
        {pending ? "Sending..." : "Request call back"}
      </button>

      {state.message ? (
        <p
          className={`mt-4 rounded-md border px-4 py-3 text-sm font-bold leading-6 ${
            state.ok
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-amber-200 bg-amber-50 text-slate-800"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        Urgent electrical fault? Calling is the fastest option.
      </p>
    </form>
  );
}

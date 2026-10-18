import React, { useEffect, useRef, useState } from "react";
import { X, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined;

const SRI_LANKA_TIMEZONE = "Asia/Colombo";

// e.g. "Mon 19 Oct 2026, 10:00 am"
function formatDateTime(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone,
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

type Status = "idle" | "submitting" | "success" | "error";

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const firstFieldRef = useRef<HTMLInputElement>(null);

  // Close on Escape, lock page scroll, and focus the first field while open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  // Reset back to a fresh form each time the modal is reopened
  useEffect(() => {
    if (isOpen) {
      setStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!ACCESS_KEY) {
      setStatus("error");
      setErrorMessage("The contact form is not configured yet. Please email us at hello@cadpulse.com.");
      return;
    }

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    // Clients book from different countries: the picked date/time is in their local timezone,
    // so convert it to Sri Lanka time for us and keep their original time for reference
    const visitorTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const appointment = new Date(`${data.preferred_date}T${data.preferred_time}`);
    const sriLankaTime = formatDateTime(appointment, SRI_LANKA_TIMEZONE);

    setStatus("submitting");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        // Key order here is the order fields appear in the email
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          appointment_sri_lanka_time: sriLankaTime,
          client_local_time: `${formatDateTime(appointment, visitorTimezone)} (${visitorTimezone})`,
          note: data.note,
          access_key: ACCESS_KEY,
          subject: `Consultation request from ${data.name} — ${sriLankaTime} (Sri Lanka time)`,
          from_name: "Cadpulse Website",
          botcheck: Boolean(data.botcheck),
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (!isOpen) return null;

  // Today's date as YYYY-MM-DD in the visitor's local time, so past dates can't be picked
  const today = new Date().toLocaleDateString("en-CA");

  const inputClasses =
    "w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-[#06006e] focus:outline-none focus:ring-2 focus:ring-[#06006e]/20 transition";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-900 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "success" ? (
          <div className="flex flex-col items-center px-6 py-12 text-center sm:px-10">
            <CheckCircle className="mb-4 h-14 w-14 text-green-500" />
            <h2 id="consultation-title" className="mb-2 text-2xl font-bold text-primary">
              Thank you!
            </h2>
            <p className="mb-8 text-gray-600">
              Your consultation request has been sent. We'll confirm the date and time by email shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-[#06006e] px-6 py-2.5 font-semibold text-white hover:bg-[#23237a] transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10">
            <h2 id="consultation-title" className="mb-1 pr-8 text-2xl font-bold text-primary">
              Book a free consultation
            </h2>
            <p className="mb-6 text-sm text-gray-600">
              Pick a date and time that suits you and we'll confirm by email.
            </p>

            {/* Honeypot field for spam bots — hidden from real users */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className="space-y-4">
              <div>
                <label htmlFor="cf-name" className="mb-1 block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input ref={firstFieldRef} id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={inputClasses} />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="cf-date" className="mb-1 block text-sm font-medium text-gray-700">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input id="cf-date" name="preferred_date" type="date" required min={today} className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="cf-time" className="mb-1 block text-sm font-medium text-gray-700">
                    Time <span className="text-red-500">*</span>
                  </label>
                  <input id="cf-time" name="preferred_time" type="time" required className={inputClasses} />
                </div>
              </div>

              <div>
                <label htmlFor="cf-email" className="mb-1 block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClasses} />
              </div>

              <div>
                <label htmlFor="cf-note" className="mb-1 block text-sm font-medium text-gray-700">
                  Note <span className="font-normal text-gray-400">(optional)</span>
                </label>
                <textarea id="cf-note" name="note" rows={3} placeholder="Anything you'd like us to know before the call" className={`${inputClasses} resize-y`} />
              </div>
            </div>

            {status === "error" && (
              <div role="alert" className="mt-4 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#06006e] px-6 py-3 font-semibold text-white hover:bg-[#23237a] disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send request
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ConsultationForm;

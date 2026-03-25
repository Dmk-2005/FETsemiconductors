"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FadeIn from "@/components/FadeIn";

// Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setError("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or email us directly at info@fetsemi.com");
    } finally {
      setSending(false);
    }
  };

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm";
  const labelClass = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5";

  if (submitted) {
    return (
      <FadeIn>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 sm:p-10 flex flex-col items-center justify-center text-center min-h-[400px]">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-navy-800 mb-2">Message Sent!</h3>
          <p className="text-gray-500">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        </div>
      </FadeIn>
    );
  }

  return (
    <FadeIn>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10">
        <div className="mb-7">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-1">Send us a Message</h2>
          <p className="text-gray-500 text-sm">Fill in the form and we'll be in touch shortly.</p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="from_name" className={labelClass}>Full Name *</label>
              <input type="text" id="from_name" name="from_name" required className={inputClass} placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="from_email" className={labelClass}>Email Address *</label>
              <input type="email" id="from_email" name="from_email" required className={inputClass} placeholder="john@company.com" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="company" className={labelClass}>Company</label>
              <input type="text" id="company" name="company" className={inputClass} placeholder="Company Name" />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input type="tel" id="phone" name="phone" className={inputClass} placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>Service Interest</label>
            <select id="service" name="service" className={inputClass}>
              <option value="">Select a service</option>
              <option value="ASIC / RTL Design">ASIC / RTL Design</option>
              <option value="Physical Design & STA">Physical Design & STA</option>
              <option value="EMIR Analysis">EMIR Analysis</option>
              <option value="IP / SOC Verification">IP / SOC Verification</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className={labelClass}>Message *</label>
            <textarea id="message" name="message" required rows={5} className={inputClass + " resize-none"} placeholder="Tell us about your project..." />
          </div>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={sending}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg text-sm tracking-wide flex items-center justify-center gap-2"
          >
            {sending ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Sending...
              </>
            ) : (
              "Send Message →"
            )}
          </button>
        </form>
      </div>
    </FadeIn>
  );
}

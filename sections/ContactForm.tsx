"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Contact Form - ${formData.from_name}${formData.company ? ` (${formData.company})` : ""}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.from_name}\nEmail: ${formData.from_email}\nCompany: ${formData.company || "N/A"}\nPhone: ${formData.phone || "N/A"}\nService Interest: ${formData.service || "N/A"}\n\nMessage:\n${formData.message}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&to=info@fetsemi.com&su=${subject}&body=${body}`,
      "_blank"
    );

    setSubmitted(true);
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
          <h3 className="text-2xl font-bold text-navy-800 mb-2">Gmail Opened!</h3>
          <p className="text-gray-500">Your message details have been pre-filled in Gmail. Just hit send.</p>
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

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="from_name" className={labelClass}>Full Name *</label>
              <input type="text" id="from_name" name="from_name" required value={formData.from_name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="from_email" className={labelClass}>Email Address *</label>
              <input type="email" id="from_email" name="from_email" required value={formData.from_email} onChange={handleChange} className={inputClass} placeholder="john@company.com" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="company" className={labelClass}>Company</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Company Name" />
            </div>
            <div>
              <label htmlFor="phone" className={labelClass}>Phone Number</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          <div>
            <label htmlFor="service" className={labelClass}>Service Interest</label>
            <select id="service" name="service" value={formData.service} onChange={handleChange} className={inputClass}>
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
            <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={inputClass + " resize-none"} placeholder="Tell us about your project..." />
          </div>

          <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg text-sm tracking-wide">
            Send Message →
          </button>
        </form>
      </div>
    </FadeIn>
  );
}

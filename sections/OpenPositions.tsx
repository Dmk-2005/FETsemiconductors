"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";

export default function OpenPositions() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    linkedin: "",
    role: "",
    experience: "",
    notice_period: "",
    current_company: "",
    skills: "",
    cover: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Job Application - ${formData.full_name} | ${formData.role}`);
    const body = encodeURIComponent(
      `GENERAL JOB APPLICATION\n` +
      `========================\n\n` +
      `Full Name: ${formData.full_name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `LinkedIn: ${formData.linkedin || "N/A"}\n\n` +
      `Role Applied For: ${formData.role}\n` +
      `Years of Experience: ${formData.experience}\n` +
      `Current Company: ${formData.current_company || "N/A"}\n` +
      `Notice Period: ${formData.notice_period}\n\n` +
      `Key Skills:\n${formData.skills}\n\n` +
      `Cover Note:\n${formData.cover}`
    );

    window.open(
      `https://mail.google.com/mail/?view=cm&to=hr@fetsemi.com&su=${subject}&body=${body}`,
      "_blank"
    );

    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-sm";
  const labelClass = "block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5";

  if (submitted) {
    return (
      <section className="py-8 lg:py-10 bg-gray-50">
        <div className="container-custom">
          <FadeIn className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-navy-800 mb-2">Application Submitted!</h3>
              <p className="text-gray-500 text-sm">Your application has been opened in Gmail. Please send it to complete your submission. Our HR team will be in touch within 5 business days.</p>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 lg:py-10 bg-gray-50">
      <div className="container-custom">
        <FadeIn className="text-center mb-8">
          <h2 className="heading-lg text-navy-800 mb-3">Apply Now</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            We're always looking for talented semiconductor engineers. Submit your application and we'll reach out when a suitable role opens up.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10">

            {/* Header */}
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-800">General Application</h3>
                <p className="text-gray-500 text-sm">FET Semiconductors Pvt Ltd</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Personal Info */}
              <div>
                <p className="text-xs font-bold text-navy-800 uppercase tracking-widest mb-4">Personal Information</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="full_name" className={labelClass}>Full Name *</label>
                    <input type="text" id="full_name" name="full_name" required value={formData.full_name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label htmlFor="linkedin" className={labelClass}>LinkedIn Profile</label>
                    <input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className={inputClass} placeholder="https://linkedin.com/in/yourname" />
                  </div>
                </div>
              </div>

              {/* Professional Info */}
              <div>
                <p className="text-xs font-bold text-navy-800 uppercase tracking-widest mb-4">Professional Details</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="role" className={labelClass}>Role / Domain *</label>
                    <select id="role" name="role" required value={formData.role} onChange={handleChange} className={inputClass}>
                      <option value="">Select a domain</option>
                      <option value="ASIC / RTL Design">ASIC / RTL Design</option>
                      <option value="Physical Design">Physical Design</option>
                      <option value="Static Timing Analysis (STA)">Static Timing Analysis (STA)</option>
                      <option value="EMIR Analysis">EMIR Analysis</option>
                      <option value="IP / SOC Verification">IP / SOC Verification</option>
                      <option value="DFT Engineer">DFT Engineer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="experience" className={labelClass}>Years of Experience *</label>
                    <select id="experience" name="experience" required value={formData.experience} onChange={handleChange} className={inputClass}>
                      <option value="">Select experience</option>
                      <option value="Fresher (0-1 years)">Fresher (0–1 years)</option>
                      <option value="1-3 years">1–3 years</option>
                      <option value="3-5 years">3–5 years</option>
                      <option value="5-8 years">5–8 years</option>
                      <option value="8-12 years">8–12 years</option>
                      <option value="12+ years">12+ years</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="current_company" className={labelClass}>Current Company</label>
                    <input type="text" id="current_company" name="current_company" value={formData.current_company} onChange={handleChange} className={inputClass} placeholder="Company Name (or Fresher)" />
                  </div>
                  <div>
                    <label htmlFor="notice_period" className={labelClass}>Notice Period *</label>
                    <select id="notice_period" name="notice_period" required value={formData.notice_period} onChange={handleChange} className={inputClass}>
                      <option value="">Select notice period</option>
                      <option value="Immediate">Immediate</option>
                      <option value="15 days">15 days</option>
                      <option value="30 days">30 days</option>
                      <option value="60 days">60 days</option>
                      <option value="90 days">90 days</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div>
                <label htmlFor="skills" className={labelClass}>Key Skills & Tools *</label>
                <textarea id="skills" name="skills" required rows={3} value={formData.skills} onChange={handleChange} className={inputClass + " resize-none"} placeholder="e.g. Synopsys ICC2, Cadence Innovus, Primetime, UVM, SystemVerilog, Calibre..." />
              </div>

              {/* Cover Note */}
              <div>
                <label htmlFor="cover" className={labelClass}>Cover Note *</label>
                <textarea id="cover" name="cover" required rows={4} value={formData.cover} onChange={handleChange} className={inputClass + " resize-none"} placeholder="Briefly describe your experience, what you're looking for, and why you'd like to join FET Semiconductors..." />
              </div>

              <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg text-sm tracking-wide">
                Submit Application →
              </button>

              <p className="text-center text-xs text-gray-400">
                Your application will be sent to <span className="text-navy-800 font-medium">hr@fetsemi.com</span> via Gmail
              </p>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

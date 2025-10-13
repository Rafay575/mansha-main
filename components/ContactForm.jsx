"use client";
import React from "react";
import Image from "next/image";
import contactimg from "@/public/images/cu.jpg";

export default function ContactSection({ imageSrc }) {
  const imgSrc = imageSrc || contactimg;

  const [status, setStatus] = React.useState(null); // "success" | "error" | null
  const [loading, setLoading] = React.useState(false);
  const [toast, setToast] = React.useState({
    open: false,
    type: "success", // "success" | "error" | "info"
    message: "",
  });

  const formRef = React.useRef(null);
  const toastTimer = React.useRef(null);

  const showToast = (message, type = "success", timeout = 4000) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast({ open: true, type, message });
    toastTimer.current = setTimeout(() => {
      setToast((t) => ({ ...t, open: false }));
    }, timeout);
  };

  React.useEffect(() => {
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setStatus(null);

    const form = formRef.current || e.currentTarget;
    const fd = new FormData(form);

    const payload = {
      firstName: fd.get("firstName") || "",
      lastName: fd.get("lastName") || "",
      email: fd.get("email") || "",
      countryCode: fd.get("countryCode") || "",
      phone: fd.get("phone") || "",
      company: fd.get("company") || "",
      position: fd.get("position") || "",
      message: fd.get("message") || "",
      privacyPolicy: fd.get("privacyPolicy") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data = null;
      try {
        data = await res.json();
      } catch {
        // ignore parse error (e.g., HTML error page)
      }

      if (!res.ok || !data?.ok) {
        const serverMsg = data?.error || data?.details || res.statusText || "Request failed";
        throw new Error(serverMsg);
      }

      setStatus("success");
      showToast("Thanks! Your message was sent successfully.", "success");
      form?.reset();
    } catch (err) {
      console.error("CONTACT SUBMIT ERROR:", err);
      setStatus("error");
      showToast(err?.message || "Sorry, something went wrong while sending email.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Form */}
          <div className="w-full">
            <h2 className="text-3xl font-bold text-gray-900">GET IN TOUCH</h2>
            <p className="mt-2 text-gray-600">
              Start a conversation about how we can create value together.
            </p>

            <form ref={formRef} className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* First Name + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    required
                    autoComplete="given-name"
                    disabled={loading}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    required
                    autoComplete="family-name"
                    disabled={loading}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@company.com"
                  required
                  autoComplete="email"
                  disabled={loading}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex">
                  <select
                    id="countryCode"
                    name="countryCode"
                    required
                    disabled={loading}
                    className="w-28 rounded-l-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  >
                    <option value="+1">US +1</option>
                    <option value="+44">UK +44</option>
                    <option value="+92">PK +92</option>
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    autoComplete="tel"
                    disabled={loading}
                    className="block w-full flex-1 border border-gray-300 border-l-0 rounded-r-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Company Name + Position */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Company name"
                    required
                    autoComplete="organization"
                    disabled={loading}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                    Position <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    placeholder="Position"
                    required
                    disabled={loading}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Leave us a message..."
                  required
                  disabled={loading}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                />
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-center">
                <input
                  id="privacyPolicy"
                  name="privacyPolicy"
                  type="checkbox"
                  required
                  disabled={loading}
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-60"
                />
                <label htmlFor="privacyPolicy" className="ml-2 block text-sm text-gray-600">
                  You agree to our friendly{" "}
                  <a
                    href="/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    privacy policy
                  </a>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  aria-busy={loading}
                  aria-live="polite"
                  className="mt-4 w-full md:w-auto inline-flex items-center justify-center bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending…
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>

            {/* Optional inline status */}
            {status === "success" && (
              <p className="text-green-600 mt-2">
                Thanks! We’ve emailed you and received your details.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-2">
                Sorry, something went wrong while sending email.
              </p>
            )}
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-80 sm:h-96 lg:h-full">
            <Image
              src={imgSrc}
              alt="Contact illustration"
              fill
              className="rounded-md object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Toast / Snackbar */}
      <div
        className={`fixed bottom-6 right-6 z-[60] transition-all duration-300 ${
          toast.open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        role="status"
        aria-live="polite"
      >
        <div
          className={`min-w-[260px] max-w-[360px] rounded-md shadow-lg px-4 py-3 text-sm
            ${
              toast.type === "success"
                ? "bg-green-600 text-white"
                : toast.type === "error"
                ? "bg-red-600 text-white"
                : "bg-gray-800 text-white"
            }`}
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5">
              {toast.type === "success" ? "✅" : toast.type === "error" ? "⚠️" : "ℹ️"}
            </span>
            <div className="flex-1 leading-5">{toast.message}</div>
            <button
              onClick={() => setToast((t) => ({ ...t, open: false }))}
              className="ml-2 opacity-80 hover:opacity-100"
              aria-label="Close notification"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

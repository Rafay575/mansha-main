"use client";
import React from "react";
import Image from "next/image";
import contactimg from "@/public/images/contactimg.jpg";

export default function ContactSection({ imageSrc }) {
  const imgSrc = imageSrc || contactimg;

  // inside your ContactSection component
  const [status, setStatus] = React.useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

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

      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");

      setStatus("success");
      e.currentTarget.reset(); // optional: clear the form
    } catch (err) {
      console.error(err);
      setStatus("error");
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
              Our friendly team would love to hear from you.
            </p>

            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-28 rounded-l-md border border-gray-300 bg-gray-50 px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="block w-full flex-1 border border-gray-300 border-l-0 rounded-r-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Privacy Checkbox */}
              <div className="flex items-center">
                <input
                  id="privacyPolicy"
                  name="privacyPolicy"
                  type="checkbox"
                  required
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
                  className="mt-4 w-full md:w-auto inline-flex items-center justify-center bg-blue-600 text-white font-medium py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          {status === "success" && (
            <p className="text-green-600 mt-2">Thanks! We’ve emailed you and received your details.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 mt-2">Sorry, something went wrong while sending email.</p>
          )}

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
    </section>
  );
}

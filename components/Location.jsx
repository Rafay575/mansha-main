"use client";
import React from "react";

export default function LocationsSection({
  locations = [
    {
      name: "Mansha & Brothers (Pvt) Ltd. Unit-1, Ugoki",
      address: "Wazirabad Rd, Ugoki, Pakistan",
    },
  ],
  mapQuery = "FCHM+8R9+Mansha+%26+Brothers+(Pvt)+Ltd.+Unit-1,+Wazirabad+Rd,+Ugoki",
}) {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        {/* ───── Top Section ───── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left: Title + Subheading */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Our locations</h2>
            <p className="mt-2 text-gray-600">
              Come visit our friendly team at one of our offices.
            </p>
          </div>

          {/* Right: Location List */}
          <ul className="space-y-6">
            {locations.map((loc, idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0">
                  {/* SVG pin icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{loc.name}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{loc.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ───── Google Map ───── */}
        <div className="mt-12 w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative">
          <iframe
            className="absolute inset-0 w-full h-full border-0 rounded-lg"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

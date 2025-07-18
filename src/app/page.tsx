"use client";

import Image from "next/image";
import LoopsNewsletterForm from "./LoopsNewsletterForm";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col justify-between items-center"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #f3f4f8 60%, #fff 100%)"
      }}
    >
      {/* Header */}
      <header className="w-full py-4 flex justify-center items-center border-b border-gray-100">
        <span className="text-2xl font-bold tracking-tight">Yuzuu</span>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center flex-1 justify-center text-center px-4 mt-16 gap-6">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-0.5 mt-8">Wake up to warm leads, every day</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-1 max-w-2xl">We send you 3 qualified B2B prospects tailored to your SaaS every morning, for free.</p>
        <LoopsNewsletterForm />
        <div className="mb-8" />
        {/* Image Placeholder replaced with actual image */}
        <div className="w-full flex justify-center mb-12">
          <div className="flex flex-row flex-wrap gap-6 gap-y-4 items-center justify-center">
            <div className="w-[120px] sm:w-[180px] md:w-[220px] max-w-full flex-shrink-0">
              <Image
                src="/lead.png"
                alt="Lead illustration left"
                width={220}
                height={350}
                className="rounded-3xl shadow-xl object-contain w-full h-auto"
                priority
              />
            </div>
            <div className="w-[160px] sm:w-[240px] md:w-[320px] max-w-full flex-shrink-0">
              <Image
                src="/lead.png"
                alt="Lead illustration center"
                width={320}
                height={400}
                className="rounded-3xl shadow-xl object-contain w-full h-auto"
                priority
              />
            </div>
            <div className="w-[120px] sm:w-[180px] md:w-[220px] max-w-full flex-shrink-0">
              <Image
                src="/lead.png"
                alt="Lead illustration right"
                width={220}
                height={350}
                className="rounded-3xl shadow-xl object-contain w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 flex justify-center items-center border-t border-gray-100 text-gray-500 text-sm mt-8">
        <span>© 2025 Yuzu. All rights reserved.</span>
      </footer>
    </div>
  );
}

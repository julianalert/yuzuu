"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white">
      {/* Header */}
      <header className="w-full py-4 flex justify-center items-center border-b border-gray-100">
        <span className="text-2xl font-bold tracking-tight">Momentum</span>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center flex-1 justify-center text-center px-4 mt-16 gap-6">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-0.5 mt-8">New clients for your B2B SaaS on AutoPilot</h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-1 max-w-2xl">Every morning, start the day with 3 new leads in your inbox.</p>
        {/* Input Form */}
        <form className="flex w-full max-w-md mb-8" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your website url"
            className="flex-1 px-4 py-2 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#171717] text-white rounded-full font-semibold text-base shadow-md hover:bg-[#222] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#222] focus:ring-offset-2"
          >
            Receive now
          </button>
        </form>
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

"use client";

import { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { supabase } from '../utils/supabaseClient';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

// Add navigation array for the footer
const footerNavigation = [
  {
    name: 'X',
    href: 'https://x.com/notanothermrktr',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
];

export default function OnboardingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [step, setStep] = useState<'website' | 'email'>('website');
  const [transitioning, setTransitioning] = useState(false);
  const websiteRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleWebsiteSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTransitioning(true);
    setTimeout(() => {
      setStep('email');
      setTransitioning(false);
    }, 300);
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailValue = emailRef.current?.value || "";
    const websiteValue = websiteRef.current?.value || "";

    // Prepare the form body with the custom property for Loops.so
    const formBody = `userGroup=Waiting%20List&mailingLists=&email=${encodeURIComponent(emailValue)}&url=${encodeURIComponent(websiteValue)}`;

    try {
      await fetch(
        "https://app.loops.so/api/newsletter-form/cmakxd8pd0tz8rgtrm7ue7kzl",
        {
          method: "POST",
          body: formBody,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      // Insert into Supabase
      await supabase.from('campaign').insert([{ email: emailValue, url: websiteValue }]);
      setSubmitted(true);
      // Optionally show a thank you message or next step
    } catch (error) {
      // Optionally handle error
    }
  };

  return (
    <div className="bg-white">
      <header className="bg-white">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Yuzuu</span>
            <img
              alt=""
              src="/yuzuu.svg"
              className="h-8 w-auto"
            />
          </a>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Yuzuu</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate pt-0">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-6xl text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl -mt-4">
              Find Clients For Your B2B SaaS
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty max-w-2xl mx-auto text-gray-500 sm:text-xl/8">
              Get 3 qualified prospects in your inbox every morning showing high buying intent for your offer. Perfectly matched to your ICP. 100% free.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* Mute original buttons */}
                {false && (
                  <>
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm/6 font-semibold text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </>
                )}
                {/* Inserted input form and button */}
                <div className="w-full max-w-md relative min-h-[56px]">
                  {/* Website Form */}
                  <form
                    onSubmit={handleWebsiteSubmit}
                    className={`absolute left-0 top-0 w-full flex gap-x-4 transition-opacity duration-300 ${step === 'website' && !transitioning ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                    style={{ willChange: 'opacity' }}
                  >
                    <label htmlFor="website-url" className="sr-only">
                      Website URL
                    </label>
                    <input
                      id="website-url"
                      name="website"
                      type="url"
                      required
                      placeholder="Enter your website URL"
                      autoComplete="url"
                      className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6 h-12"
                      ref={websiteRef}
                    />
                    <button
                      type="submit"
                      className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 cursor-pointer h-12"
                    >
                      Continue
                    </button>
                  </form>
                  {/* Email Form or Thank You Message */}
                  {submitted ? (
                    <div className="absolute left-0 top-0 w-full flex items-center justify-center transition-opacity duration-300 opacity-100 z-10 min-h-[56px]">
                      <span className="text-lg font-medium text-gray-800 text-center">Thank you! Check your inbox in a few minutes to get your first leads.</span>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleEmailSubmit}
                      className={`absolute left-0 top-0 w-full flex gap-x-4 transition-opacity duration-300 ${step === 'email' && !transitioning ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                      style={{ willChange: 'opacity' }}
                    >
                      <label htmlFor="email-address" className="sr-only">
                        Email address
                      </label>
                      <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        autoComplete="email"
                        className="min-w-0 flex-auto rounded-md bg-white px-3.5 py-2 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm/6 h-12"
                        ref={emailRef}
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 cursor-pointer h-12"
                      >
                        Get the free leads
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="flex justify-center">
                <img
                  alt="Lead card"
                  src="/lead-card.webp"
                  width={900}
                  height={600}
                  className="w-[48rem] max-w-full rounded-md shadow-xl ring-1 ring-gray-900/10 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
      {/* Footer with social icons */}
      <footer className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center gap-x-6 md:order-2">
            {footerNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-800 cursor-pointer inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex' }}
              >
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="size-6" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-center text-sm/6 text-gray-600 md:order-1 md:mt-0">
            &copy; 2025 Yuzuu, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

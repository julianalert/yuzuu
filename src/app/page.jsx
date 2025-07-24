"use client";

import { useState, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, EnvelopeIcon, IdentificationIcon, LinkIcon, UserGroupIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { CheckIcon } from '@heroicons/react/20/solid';
import { supabase } from '../utils/supabaseClient';
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
      </svg>
    ),
  },
];

const stats = [
  { id: 1, name: 'Creators on the platform', value: '8,000+' },
  { id: 2, name: 'Flat platform fee', value: '3%' },
  { id: 3, name: 'Uptime guarantee', value: '99.9%' },
  { id: 4, name: 'Paid out to creators', value: '$70M' },
];

function Stats() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
              Trusted by creators worldwide
            </h2>
            <p className="mt-4 text-lg/8 text-gray-300">Lorem ipsum dolor sit amet consect adipisicing possimus.</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm/6 font-semibold text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    name: 'Push to deploy.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Advanced security.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
    icon: FingerPrintIcon,
  },
  {
    name: 'Powerful API.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: Cog6ToothIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. ',
    icon: ServerIcon,
  },
];

function FeaturesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Everything you need</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
            No server? No problem.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste
            dolor cupiditate blanditiis.
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="App screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />

          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

const tiers = [
  {
    name: 'Start',
    id: 'tier-hobby',
    href: '/#',
    priceMonthly: '$0',
    description: "The perfect plan if you're just getting started with our product.",
    features: ['3 leads per day', 'Perfectly tailored to your offer', 'Enriched with signals', 'Verified emails & socials'],
    featured: false,
  },
  {
    name: 'Scale',
    id: 'tier-enterprise',
    href: 'mailto:hello@yuzuu.co',
    priceMonthly: '$47',
    description: 'To get more sales.',
    features: [
      'Everything in the free plan',
      '30 leads per day',
      'Personal infrastructure setup',
      'Dedicated support',
      'Outreach templates',
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function PricingComponent() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
          Get your first 3 leads today
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
      Based on your product. Verified. Ready to convert.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured ? 'relative bg-gray-900 shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
              'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10',
            )}
          >
            <h3
              id={tier.id}
              className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base/7 font-semibold')}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? 'text-white' : 'text-gray-900',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {tier.priceMonthly}
              </span>
              <span className={classNames(tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base')}>/month</span>
            </p>
            <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base/7')}>
              {tier.description}
            </p>
            <ul
              role="list"
              className={classNames(
                tier.featured ? 'text-gray-300' : 'text-gray-600',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500'
                  : 'text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10',
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

const deployFeatures = [
  {
    name: 'Share your website',
    description:
      'All you have to do is click the share your website url and enter your email.',
    href: '#',
    icon: LinkIcon,
  },
  {
    name: 'Receive leads every morning',
    description:
      'You receive a daily email with qualified & enriched lead tailored to your offer.',
    href: '#',
    icon: IdentificationIcon,
  },
  {
    name: 'Start reaching out',
    description:
      'Now that you have your leads, you can start reaching out and get new users for your SaaS.',
    href: '#',
    icon: EnvelopeIcon,
  },
];

function DeployFeaturesSection() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-400">Lead gen shouldn&apos;t feel like a second job</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl lg:text-balance">
          Tired of wasting hours chasing leads who’ll never buy?
          </p>
          <p className="mt-6 text-lg/8 text-gray-300">
          You know that without consistent, qualified leads, nothing moves... 
          </p><p className="mt-0 text-lg/8 text-gray-300">
          but finding qualified prospects is slow, painful, and almost never leads to conversions.
          </p>
          <p className="mt-0 text-lg/8 text-gray-300">
          👉 Stop spending hours researching, start selling 👈
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {deployFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-white">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-400" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const featuredTestimonial = {
  body: 'We scaled from 0 to 20 demos/month just using the daily leads. No fluff here. Just the right people, delivered like clockwork. It’s replaced 90% of our outbound workflow.',
  author: {
    name: 'Julien D.',
    handle: 'juliendvr',
    imageUrl:
      '/juliend.jpg',
    logoUrl: 'https://cdn.prod.website-files.com/606beb3b434b8b21edd72827/62bb26542013a74517b33d20_Request_onlight_reg_blue%201.svg',
  },
};
const testimonials = [
  [
    [
      {
        body: 'We tried Apollo, Clay, even hired a VA. Nothing gave us leads this relevant, this consistently. With Yuzuu, I just open my inbox every morning and know who I’m reaching out to. Yuzuu is the only lead gen tool I actually enjoy using.',
        author: {
          name: 'Clément Bernard',
          handle: 'Clement_brnrd',
          imageUrl:
            '/clementb.jpg',
        },
      },
    ],
    /*[
      {
        body: 'Aut reprehenderit voluptatem eum asperiores beatae id. Iure molestiae ipsam ut officia rem nulla blanditiis.',
        author: {
          name: 'Lindsay Walton',
          handle: 'lindsaywalton',
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Nam nesciunt dolorem dolor asperiores cum. Incidunt molestiae quis deleniti vitae ut in earum delectus iusto.',
        author: {
          name: 'Courtney Henry',
          handle: 'courtneyhenry',
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],
  ],
  /*[
    [
      {
        body: 'Voluptas quos itaque ipsam in voluptatem est. Iste eos blanditiis repudiandae. Earum deserunt enim molestiae ipsum perferendis recusandae saepe corrupti.',
        author: {
          name: 'Tom Cook',
          handle: 'tomcook',
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        body: 'Aliquid dolore praesentium ratione. Cumque ea officia repellendus laboriosam. Vitae quod id explicabo non sunt.',
        author: {
          name: 'Whitney Francis',
          handle: 'whitneyfrancis',
          imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
    ],*/
    [
      {
        body: 'I wasn’t sure this would work for us, but the first leads I got were spot on. People we got were a perfect fit for our community of web3 finance leaders. I reached out, got a 21% reply rate, and scaled our community from 500 CFOs to 2,000+ finance leaders. Super impressed so far!',
        author: {
          name: 'Christophe Lassuyt',
          handle: 'LassuytChristop',
          imageUrl:
            '/christophel.png',
        },
      },
    ],
  ],
];

const faqs = [
  {
    id: 1,
    question: "Will the leads really be relevant to me?",
    answer:
      "If it’s not relevant, it’s worthless. And we know that. We analyze your site and match leads based on your actual product and ideal customer. No generic scraping here. It's fully tailored to your offer.",
  },
  {
    id: 2,
    question: 'How do I know these aren’t just scraped, recycled contacts?',
    answer:
      'We don’t dump CSVs on your lap. Each lead is fresh, verified, and chosen for you. They are not pulled from some dusty database from 2021.',
  },
  {
    id: 3,
    question: 'Why only 3 leads per day?',
    answer:
      "3 leads/day is the free plan, enough to test the waters. Need more? Upgrade anytime and get up to 30 fresh, qualified leads every morning. Start small, scale when you're ready.”",
  },
  {
    id: 4,
    question: 'Why pay for this when I can do it myself with LinkedIn or Apollo?',
    answer: 'Sure, if you want to spend 3 hours/day prospecting. We save you time and deliver better-fit leads. It’s like having an SDR, minus the $5k/month.',
  },
  {
    id: 5,
    question: "Will I get their contact info? Can I actually reach them?",
    answer:
      'Every lead comes with verified email, LinkedIn, and why they’re a good fit. You get real contacts, not just company logos.',
  },
  {
    id: 6,
    question: 'What if the leads don’t convert?',
    answer:
      "We get you in front of the right people. What you say to them is up to you, but we’ll even give you cold email templates to help.",
  },
  {
    id: 7,
    question: 'How do you even know who my ideal customers are?',
    answer:
      "Your website tells us everything: what you sell, who it’s for, the tools you use. We build your ICP from that. Don’t like a lead? Tell us, and the system gets smarter.",
  },
];

function FAQSection() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base/7 text-pretty text-gray-300">
              Can’t find the answer you’re looking for? {' '}
              <a href="mailto:hello@yuzuu.co" className="font-semibold text-indigo-400 hover:text-indigo-300">
                Contact us
              </a>{' '}
            </p>
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.id || faq.question}>
                  <dt className="text-base/7 font-semibold text-white">{faq.question}</dt>
                  <dd className="mt-2 text-base/7 text-gray-300">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <div className="relative isolate bg-white pt-24 pb-32 sm:pt-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[max(50%,38rem)] aspect-1313/771 w-328.25 bg-linear-to-tr from-[#ff80b5] to-[#9089fc]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="ml-[-22rem] aspect-1313/771 w-328.25 flex-none origin-top-right rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] xl:mr-[calc(50%-12rem)] xl:ml-0"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">Built for busy founders and sales teams</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Our customers have made thousands of dollars by sending the right emails to the right people
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm/6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold tracking-tight text-gray-900 sm:p-12 sm:text-xl/8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
              <img
                alt=""
                src={featuredTestimonial.author.imageUrl}
                className="size-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className="font-semibold text-gray-900">{featuredTestimonial.author.name}</div>
                <div className="text-gray-600">{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              <img alt="" src={featuredTestimonial.author.logoUrl} className="h-10 w-auto flex-none" />
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
              {columnGroup.map((column, columnIdx) => (
                <div
                  key={columnIdx}
                  className={classNames(
                    (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                      ? 'xl:row-span-2'
                      : 'xl:row-start-1',
                    'space-y-8',
                  )}
                >
                  {column.map((testimonial) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                    >
                      <blockquote className="text-gray-900">
                        <p>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <img alt="" src={testimonial.author.imageUrl} className="size-10 rounded-full bg-gray-50" />
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                          <div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BoostCTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Start getting better leads tomorrow morning
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
          I built this because I was tired of cold scraping and spending more time on spreadsheets than customers. If that’s you too, try the tool and let it prove itself.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/#"
              className="rounded-md bg-white/15 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            {/* <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-300">
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
      >
        <circle r={512} cx={512} cy={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function OnboardingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [step, setStep] = useState('website');
  const [transitioning, setTransitioning] = useState(false);
  const websiteRef = useRef(null);
  const emailRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleWebsiteSubmit = (e) => {
    e.preventDefault();
    setTransitioning(true);
    setTimeout(() => {
      setStep('email');
      setTransitioning(false);
    }, 300);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);
    const emailValue = emailRef.current?.value || "";
    const websiteValue = websiteRef.current?.value || "";
    if (!emailValue || !websiteValue) {
      setErrorMsg("Email and website are required.");
      setLoading(false);
      return;
    }
    try {
      // Insert into Supabase and get the campaign UUID
      const { data, error } = await supabase
        .from('campaign')
        .insert([{ email: emailValue, url: websiteValue }])
        .select();
      if (error) throw error;
      const campaignId = data && data[0] && data[0].id;
      if (!campaignId) throw new Error('Campaign ID (uuid) not returned from Supabase');

      // Prepare the JSON payload for Loops.so
      const payload = {
        email: emailValue,
        url: websiteValue,
        userGroup: "Waiting List",
        campaign_id: campaignId
      };
      console.log('Sending to Loops:', payload);

      const loopsRes = await fetch(
        "/api/loops-proxy",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );
      if (!loopsRes.ok) {
        const errText = await loopsRes.text();
        throw new Error(`Loops API error: ${loopsRes.status} ${errText}`);
      }
      setSubmitted(true);
      // Trigger n8n webhook (env-based URL)
      const n8nWebhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
      if (!n8nWebhookUrl) {
        console.error('N8N webhook URL is not set in NEXT_PUBLIC_N8N_WEBHOOK_URL');
      } else {
        try {
          await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: websiteValue,
              email: emailValue,
              campaign_id: campaignId,
            }),
          });
        } catch (n8nError) {
          console.error('n8n webhook error:', n8nError);
        }
      }
      // Show 'Redirecting...' message before redirect
      setTimeout(() => {
        router.push(`/leads/${campaignId}`);
      }, 1000);
    } catch (error) {
      console.error('Error in handleEmailSubmit:', error);
      setErrorMsg(error instanceof Error ? error.message : 'Unknown error');
    } finally {
      setLoading(false);
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
                    <div className="absolute left-0 top-0 w-full flex items-center justify-center transition-opacity duration-300 opacity-100 z-10 min-h-[56px] gap-2">
                      <svg className="animate-spin h-5 w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                      <span className="text-lg font-medium text-gray-800 text-center">Redirecting...</span>
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
                        disabled={loading}
                      />
                      <button
                        type="submit"
                        className="flex-none rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 cursor-pointer h-12"
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : 'Get the free leads'}
                      </button>
                      {errorMsg && (
                        <div className="text-red-600 text-sm ml-4 flex items-center">{errorMsg}</div>
                      )}
                    </form>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-16 flow-root sm:mt-24">
              <div className="flex justify-center">
                <img
                  alt="Lead card"
                  src="/preview.png"
                  width={1920}
                  height={1000}
                  className="w-screen h-auto rounded-md shadow-xl ring-1 ring-gray-900/10 mx-auto"
                />
              </div>
            </div>
           
          </div>
        </div>
         
         <DeployFeaturesSection />
         {/* <FeaturesSection /> */}
         <TestimonialsSection />
         <BoostCTA />
         {/*<PricingComponent />*/}
         {/*<FAQSection />*/}
        
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
            &copy; 2025, Yuzuu. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

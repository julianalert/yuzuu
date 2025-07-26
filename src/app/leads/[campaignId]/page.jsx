import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  // { name: 'Team', href: '#', current: false },
  // { name: 'Projects', href: '#', current: false },
  // { name: 'Calendar', href: '#', current: false },
  // { name: 'Reports', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Add LinkedIn SVG icon
function LinkedInIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
    </svg>
  );
}

// Add Location SVG icon
function LocationIcon(props) {
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" {...props}>
      <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6c0 4.418 5.373 9.293 5.601 9.507a1 1 0 001.398 0C10.627 17.293 16 12.418 16 8a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z" clipRule="evenodd" />
    </svg>
  );
}

// Next.js 15: params and searchParams are plain objects, not Promises
export default async function LeadsPage({ params, searchParams }) {
  const { campaignId } = params;
  const page = searchParams?.page ? parseInt(searchParams.page, 10) : 1;
  const LEADS_PER_PAGE = 100;
  const from = (page - 1) * LEADS_PER_PAGE;
  const to = from + LEADS_PER_PAGE - 1;

  // Fetch campaign for website URL
  const { data: campaignData, error: campaignError } = await supabase
    .from('campaign')
    .select('url')
    .eq('id', campaignId)
    .single();
  const websiteUrl = campaignData?.url || '';

  // Fetch leads with count
  const { data: leads, error: unknownError, count } = await supabase
    .from('leads')
    .select('*', { count: 'exact' })
    .eq('campaign_id', campaignId)
    .eq('sent', 'yes')
    .order('created_at', { ascending: false })
    .range(from, to);
  const error = unknownError;

  if (error || campaignError) return notFound();

  const displayUrl = websiteUrl.replace(/^https?:\/\//, '');
  const totalPages = count ? Math.ceil(count / LEADS_PER_PAGE) : 1;

  return (
    <>
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                {typeof count === 'number' ? `${count} ` : ''}
                {websiteUrl ? `Leads for ${displayUrl}` : 'Leads'}
              </h1>
            </div>
          </header>
        </div>
        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow-sm sm:px-6">
              {/* Leads Table */}
              {error ? (
                <div className="p-8 text-red-600">Error loading leads: {error instanceof Error ? error.message : 'Unknown error'}</div>
              ) : !leads || leads.length === 0 ? (
                <div className="p-8 flex flex-col items-center justify-center gap-4">
                  <svg className="animate-spin h-8 w-8 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  <div className="text-center text-gray-700 text-lg font-medium max-w-md">
                    We are getting your leads ready. <br />You will receive them by email in the coming hour. <br />You can close this tab.
                  </div>
                </div>
              ) : (
      <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-300">
          <thead>
                      <tr>
                        <th scope="col" className="py-3.5 pr-3 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                          Lead
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Company
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Location
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Email
                        </th>
            </tr>
          </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {leads.map((lead) => (
                        <tr key={lead.id}>
                          <td className="py-5 pr-3 pl-4 text-sm whitespace-nowrap sm:pl-0">
                            <div className="flex items-center">
                              <div className="size-11 shrink-0">
                  {lead.photo_url ? (
                                  <img alt="" src={lead.photo_url} className="size-11 rounded-full object-cover" />
                  ) : (
                                  <div className="size-11 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-bold">
                                    {lead.full_name ? lead.full_name.split(' ').map((n) => n[0]).join('').slice(0,2).toUpperCase() : '?'}
                    </div>
                  )}
                              </div>
                              <div className="ml-4">
                                <div className="font-medium text-gray-900 flex items-center gap-2">
                                  {lead.full_name || '-'}
                                  {lead.linkedin_url && (
                                    <a href={lead.linkedin_url} target="_blank" rel="noopener noreferrer">
                                      <LinkedInIcon className="h-4 w-4 text-blue-700 hover:text-blue-800" />
                                    </a>
                                  )}
                                </div>
                                {lead.job_title && (
                                  <div className="text-gray-500 text-sm mt-1">
                                    {lead.job_title.length > 30 ? lead.job_title.slice(0, 30) + '...' : lead.job_title}
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                            <div className="text-gray-900 font-medium">
                              {lead.company_name
                                ? lead.company_name.length > 30
                                  ? lead.company_name.slice(0, 30) + '...'
                                  : lead.company_name
                                : '-'}
                            </div>
                            <div className="flex items-center gap-2 mt-1">
                              {lead.company_website ? (
                                <a
                                  href={lead.company_website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:underline"
                                >
                                  {lead.company_website.length > 25
                                    ? lead.company_website.slice(0, 25) + '...'
                                    : lead.company_website}
                                </a>
                              ) : (
                                <span>-</span>
                              )}
                              {lead.company_linkedin_url && (
                                <a href={lead.company_linkedin_url} target="_blank" rel="noopener noreferrer">
                                  <LinkedInIcon className="h-4 w-4 text-blue-700 hover:text-blue-800" />
                                </a>
                              )}
                            </div>
                          </td>
                          <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">
                            <div className="flex items-center gap-2 text-gray-900 font-medium">
                              <LocationIcon className="h-4 w-4 text-gray-500" />
                              {lead.country || '-'}
                            </div>
                            <div className="mt-1 text-gray-500">
                              {lead.city || '-'}
                            </div>
                          </td>
                          <td className="px-3 py-5 text-sm whitespace-nowrap text-gray-500">{lead.lead_email || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
              )}
            </div>
          </div>
        </main>
        {/* Only show pagination if leads exist and leads.length > 0 */}
        {leads && leads.length > 0 && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <a
              href={`?page=${page - 1}`}
              className={`px-4 py-2 rounded bg-gray-800 text-white ${page === 1 ? 'opacity-50 pointer-events-none' : ''}`}
              aria-disabled={page === 1}
            >
              Previous
            </a>
            <span className="text-gray-700">Page {page} of {totalPages}</span>
            <a
              href={`?page=${page + 1}`}
              className={`px-4 py-2 rounded bg-gray-800 text-white ${page === totalPages ? 'opacity-50 pointer-events-none' : ''}`}
              aria-disabled={page === totalPages}
            >
              Next
            </a>
          </div>
        )}
        {/* After the pagination controls, add a div with mb-16 for whitespace */}
        <div className="mb-16" />
    </div>
    </>
  );
} 
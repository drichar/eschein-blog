import Link from 'next/link'
import DateComponent from './date'

export default function PodcastsContent({ allPodcasts }) {
  return (
    <div className="my-16">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Schein On: All Episodes
          </h2>
        </div>
        {/* <div className="mt-4 flex md:mt-0 md:ml-4">
          <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Edit
          </button>
          <button type="button" className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Publish
          </button>
        </div> */}
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md mt-8">
        <ul className="divide-y divide-gray-200">
          {allPodcasts.map((podcast) => (
            <li>
              <Link as={`/podcasts/${podcast.slug}`} href="/podcasts/[slug]">
                <a href="#" className="block hover:bg-gray-50">
                  <div className="flex items-center px-4 py-4 sm:px-6">
                    <div className="min-w-0 flex-1 flex items-center">
                      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                        <div>
                          <p className="text-sm font-medium text-blue-600 truncate">{podcast.title}</p>
                        </div>
                        <div className="hidden md:block">
                          <div>
                            <p className="text-sm text-gray-900">
                              <DateComponent dateString={podcast.date} />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                    {/* Heroicon name: chevron-right */}
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

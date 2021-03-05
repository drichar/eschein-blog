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

      <div className="mt-8">
        <ul>
          {allPodcasts.map((podcast) => (
            <li key={podcast.id} className="mb-16 shadow-xl">
              <iframe
                src={`https://webplayer.adorilabs.com/${podcast.id}`}
                style={{
                  minWidth: '610px',
                  maxHeight: '304px'
                }}
                width='100%'
                height='304'
                title={podcast.title}
                frameBorder='0'
                scrolling='no'
                allow='autoplay'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

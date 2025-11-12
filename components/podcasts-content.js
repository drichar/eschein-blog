import PodcastsHeader from './podcasts-header'
import DateComponent from './date'

export default function PodcastsContent({ allPodcasts }) {
  return (
    <div className="my-16">
      <PodcastsHeader />

      <div className="mt-8">
        <ul>
          {allPodcasts.map((podcast, i) => (
            <li key={podcast.id} className="mb-24 lg:mb-16 relative">
              <iframe
                src={`https://webplayer.adorilabs.com/${podcast.id}`}
                className="h-96 w-full mb-8 shadow-xl bg-black"
                title={podcast.title}
                frameBorder="0"
                scrolling="no"
                allow="autoplay"
              />
              <p className="absolute top-2 left-2">
                <span className="hidden adoriFull:inline-flex items-center px-3 py-0.5 rounded text-base font-medium bg-black text-gray-100 mb-4">
                  {`Episode ${podcast.episode}`}
                </span>
              </p>
              <h4 className="adoriFull:hidden text-gray-400 text-base font-bold mb-2">
                {`Episode ${podcast.episode}`}
              </h4>
              <h3 className="adoriFull:hidden text-xl font-bold mb-4">
                {podcast.title}
              </h3>
              <p className="adoriFull:hidden mb-5">{podcast.excerpt}</p>
              <p className="adoriFull:hidden text-gray-500 text-sm font-normal">
                <DateComponent dateString={podcast.date} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

import PodcastsHeader from './podcasts-header'
import DateComponent from './date'

export default function PodcastsContent({ allPodcasts }) {
  // Filter to only show podcasts with Spotify URLs
  const podcastsWithSpotify = allPodcasts.filter(
    (podcast) => podcast.spotifyEpisodeUrl,
  )

  return (
    <div className="my-16">
      <PodcastsHeader />

      <div className="mt-8">
        <ul>
          {podcastsWithSpotify.map((podcast) => {
            const embedUrl = podcast.spotifyEpisodeUrl.replace(
              'open.spotify.com/',
              'open.spotify.com/embed/',
            )

            return (
              <li key={podcast.episode} className="mb-16">
                <div className="mb-4">
                  <h4 className="text-gray-400 text-base font-bold mb-2">
                    {`Episode ${podcast.episode}`}
                  </h4>
                  <h3 className="text-2xl font-bold mb-3">{podcast.title}</h3>
                  <p className="text-gray-600 mb-3">{podcast.excerpt}</p>
                  <p className="text-gray-500 text-sm">
                    <DateComponent dateString={podcast.date} />
                  </p>
                </div>
                <iframe
                  data-testid="embed-iframe"
                  style={{
                    borderRadius: '12px',
                    width: '100%',
                  }}
                  src={`${embedUrl}?utm_source=generator`}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title={podcast.title}
                />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

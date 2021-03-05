import PodcastsHeader from './podcasts-header'

export default function PodcastsContent({ allPodcasts }) {
  return (
    <div className="my-16">
      <PodcastsHeader />

      <div className="mt-8">
        <ul>
          {allPodcasts.map((podcast) => (
            <li key={podcast.id} className="mb-16 shadow-xl">
              <iframe
                src={`https://webplayer.adorilabs.com/${podcast.id}`}
                className="h-96 w-full"
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

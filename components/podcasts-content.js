import PodcastsHeader from './podcasts-header'

export default function PodcastsContent({ allPodcasts }) {
  return (
    <div className="my-16">
      <PodcastsHeader />

      <div className="mt-8">
        <ul>
          {allPodcasts.map((podcast) => (
            <li key={podcast.id} className="mb-24 lg:mb-16">
              <iframe
                src={`https://webplayer.adorilabs.com/${podcast.id}`}
                className="h-96 w-full mb-8 shadow-xl"
                title={podcast.title}
                frameBorder='0'
                scrolling='no'
                allow='autoplay'
              />
              <h3 className="lg:hidden text-lg font-bold mb-4">{podcast.title}</h3>
              <p className="lg:hidden">{podcast.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

import PodcastsHeader from './podcasts-header'

export default function PodcastsContent({ allPodcasts }) {
  return (
    <div className="my-16">
      <PodcastsContent />

      <div className="mt-8">
        <ul>
          {allPodcasts.map((podcast) => (
            <li className="mb-16 shadow-xl">
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

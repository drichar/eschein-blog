import PostHeader from './post-header'
import PodcastBody from './podcast-body'

export default function PodcastContent({ podcast }) {
  return (
    <>
      <div className="relative px-4 sm:px-6 lg:px-8 my-16">
        <PostHeader
          title={podcast.title}
          date={podcast.date}
          author={podcast.author}
          topic="Podcast"
        />
        <PodcastBody podcast={podcast} />
      </div>
    </>
  )
}

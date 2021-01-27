import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PodcastPlayer from './podcast-player'

export default function PodcastBody({ podcast }) {
  return (
    <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
      <div className="mb-10">
        <PodcastPlayer url={podcast.url} />
      </div>
      {documentToReactComponents(podcast.content.json)}
    </div>
  )
}

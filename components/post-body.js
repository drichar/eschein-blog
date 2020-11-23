import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function PostBody({ content }) {
  return (
    <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
      {documentToReactComponents(content.json)}
    </div>
  )
}

import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
const readingTime = require('reading-time')

export default function ReadingTime({ document }) {
  const plainText = documentToPlainTextString(document)
  const stats = readingTime(plainText)
  return (
    <span>
      {stats.text}
    </span>
  )
}

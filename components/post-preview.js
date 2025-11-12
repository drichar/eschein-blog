import Link from 'next/link'
import Image from 'next/image'
import DateComponent from '../components/date'
import ReadingTime from '../components/reading-time'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  document,
}) {
  return (
    <Link
      as={`/posts/${slug}`}
      href="/posts/[slug]"
      className="flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden"
    >
      <div className="flex-shrink-0 relative h-48">
        <Image
          src={coverImage.url}
          alt={`Cover Image for ${title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-2xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{excerpt}</p>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <span className="sr-only">{author.name}</span>
            <img
              className="h-10 w-10 rounded-full"
              src={author.picture.url}
              alt={author.name}
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{author.name}</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <DateComponent dateString={date} />
              <span aria-hidden="true">&middot;</span>
              <ReadingTime document={document} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

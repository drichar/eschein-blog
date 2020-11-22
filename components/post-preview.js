import Link from 'next/link'
import DateComponent from '../components/date'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <Link as={`/posts/${slug}`} href="/posts/[slug]">
      <a className="flex flex-col rounded-lg shadow-lg hover:shadow-xl overflow-hidden">
        <div className="flex-shrink-0">
          <img src={coverImage.url} className="h-48 w-full object-cover" alt={`Cover Image for ${title}`} />
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
          <div className="flex-1">
            <p className="text-xl font-semibold text-gray-900">
              {title}
            </p>
            <p className="mt-3 text-base text-gray-500">
              {excerpt}
            </p>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <span className="sr-only">{author.name}</span>
              <img className="h-10 w-10 rounded-full" src={author.picture.url} alt={author.name} />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">
                {author.name}
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <DateComponent dateString={date} />
                <span aria-hidden="true">
                  &middot;
                </span>
                <span>
                  11 min read
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

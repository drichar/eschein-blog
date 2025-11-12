import PostTitle from './post-title'
import DateComponent from './date'
import ReadingTime from './reading-time'
import PostSocial from './post-social'
import Avatar from './avatar'

export default function PostHeader({ title, date, author, document, topic }) {
  return (
    <div className="mb-10 text-lg max-w-prose mx-auto">
      {topic && (
        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
          {topic}
        </h2>
      )}
      <PostTitle>{title}</PostTitle>
      <div className="mt-6 md:flex justify-between items-center">
        <div className="mb-10 md:mb-0 flex items-center">
          <Avatar name={author.name} picture={author.picture} />
          <div className="ml-3">
            <p className="text-base font-medium text-gray-900">{author.name}</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <DateComponent dateString={date} />
              {document && (
                <>
                  <span aria-hidden="true">&middot;</span>
                  <ReadingTime document={document} />
                </>
              )}
            </div>
          </div>
        </div>
        <PostSocial />
      </div>
    </div>
  )
}

import DateComponent from './date'
import ReadingTime from './reading-time'
import PostSocial from './post-social'
import Avatar from './avatar'

export default function PostHeader({ title, date, author, document }) {
  return (
    <div className="mb-10 text-lg max-w-prose mx-auto">
      <h1 className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      <div className="mt-6 md:flex justify-between items-center">
        <div className="mb-10 md:mb-0 flex items-center">
          <Avatar
            name={author.name}
            picture={author.picture}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              {author.name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <DateComponent dateString={date} />
              <span aria-hidden="true">
                &middot;
              </span>
              <ReadingTime document={document} />
            </div>
          </div>
        </div>
        <PostSocial />
      </div>
    </div>
  )
}

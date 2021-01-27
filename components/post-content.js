import CoverImage from './cover-image'
import PostDecorate from './post-decorate'
import PostHeader from './post-header'
import PostBody from './post-body'

export default function PostContent({ post }) {
  return (
    <>
      <CoverImage title={post.title} coverImage={post.coverImage} />
      <PostDecorate>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <PostHeader
            title={post.title}
            date={post.date}
            author={post.author}
            document={post.content.json}
          />
          <PostBody content={post.content} />
        </div>
      </PostDecorate>
    </>
  )
}

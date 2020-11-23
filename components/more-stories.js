import PostPreview from '../components/post-preview'

export default function MoreStories({ posts }) {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            document={post.content.json}
          />
        ))}
      </div>
    </section>
  )
}

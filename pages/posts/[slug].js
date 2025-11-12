import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import MoreStories from '../../components/more-stories'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import PostContent from '../../components/post-content'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {/* @todo: make this a proper spinner */}
        {router.isFallback ? (
          <div className="mb-10 text-lg max-w-prose mx-auto my-32">
            <PostTitle>Loading&hellip;</PostTitle>
          </div>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title} | Evan Schein</title>
                <meta property="og:image" content={post.coverImage.url} />
                <meta name="description" content={post.excerpt} />
              </Head>

              <PostContent post={post} />
            </article>
            <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview)

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug()
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  }
}

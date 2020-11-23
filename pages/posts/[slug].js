import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import MoreStories from '../../components/more-stories'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import CoverImage from '../../components/cover-image'
import DateComponent from '../../components/date'
import ReadingTime from '../../components/reading-time'
import PostDecorate from '../../components/post-decorate'
import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../lib/api'
import PostTitle from '../../components/post-title'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Evan Schein
                </title>
                <meta property="og:image" content={post.coverImage.url} />
              </Head>
              {/* <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              /> */}
              <CoverImage title={post.title} url={post.coverImage.url} />
              <div className="relative py-8 bg-white overflow-hidden">
                <PostDecorate />
                <div className="relative px-4 sm:px-6 lg:px-8">
                  <div className="mb-10 text-lg max-w-prose mx-auto">
                    <h1 className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                      {post.title}
                    </h1>
                    <div className="mt-6 flex items-center">
                      <div className="flex-shrink-0">
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.picture.url} alt={post.author.name} />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {post.author.name}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <DateComponent dateString={post.date} />
                          <span aria-hidden="true">
                            &middot;
                          </span>
                          <ReadingTime document={post.content.json} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <PostBody content={post.content} />
                </div>
              </div>
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

import { useRouter } from 'next/router'
import Head from 'next/head'
import ErrorPage from 'next/error'
import Container from '../../components/container'
// import MoreStories from '../../components/more-stories'
// import SectionSeparator from '../../components/section-separator'
import Layout from '../../components/layout'
import { getAllPodcastsWithSlug, getPodcast } from '../../lib/api'
import PostTitle from '../../components/post-title'
import PodcastContent from '../../components/podcast-content'

export default function Podcast({ podcast, preview }) {
  const router = useRouter()

  if (!router.isFallback && !podcast) {
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
                <title>{`${podcast.title} | Evan Schein`}</title>
                <meta property="og:image" content={podcast.ogImage.url} />
              </Head>

              <PodcastContent podcast={podcast} />
            </article>
            {/* <SectionSeparator />
            {morePosts && morePosts.length > 0 && (
              <MoreStories posts={morePosts} />
            )} */}
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getPodcast(params.slug, preview)

  return {
    props: {
      preview,
      podcast: data?.podcast ?? null,
      // morePosts: data?.morePosts ?? null,
    },
  }
}

export async function getStaticPaths() {
  const allPodcasts = await getAllPodcastsWithSlug()
  return {
    paths: allPodcasts?.map(({ slug }) => `/podcasts/${slug}`) ?? [],
    fallback: true,
  }
}

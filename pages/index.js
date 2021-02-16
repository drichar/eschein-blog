import Head from 'next/head'
import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Hero from '../components/hero'
import Layout from '../components/layout'
import PodcastCta from '../components/podcast-cta'
import LogoCloud from '../components/logo-cloud'
import { getAllPostsForHome } from '../lib/api'

export default function Index({ preview, allPosts }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Evan Schein</title>
      </Head>
      <Hero />
      <PodcastCta />
      <LogoCloud />
      <Container>
        <div className="mb-8">
          <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">Blog</h2>
          <p className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Recent articles</p>
          {/* <p class="mt-4 text-lg text-gray-500">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p> */}
        </div>
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}

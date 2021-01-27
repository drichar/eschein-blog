import Head from 'next/head'
import Container from '../components/container'
import Layout from '../components/layout'
import { getAllPodcastsForIndex } from '../lib/api'
import PodcastsContent from '../components/podcasts-content'

export default function Podcast({ preview, allPodcasts }) {
  return (
    <Layout preview={preview}>
      <Head>
        <title>Schein On Podcast | Evan Schein</title>
      </Head>
      <Container>
        <PodcastsContent allPodcasts={allPodcasts} />
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPodcasts = (await getAllPodcastsForIndex(preview)) ?? []
  return {
    props: { preview, allPodcasts },
  }
}

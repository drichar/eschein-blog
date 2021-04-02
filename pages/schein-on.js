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
        <meta
          name="description"
          content="Evan is a family law and divorce attorney in New York City, and a partner and the Head of Litigation at Berkman Bottger Newman &amp; Schein. He is the host of the podcast Schein On, where he and his guests tackle tough legal, financial, and life issues, and talk about sports whenever they have an excuse."
        />
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

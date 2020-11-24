import Container from '../components/container'
import Layout from '../components/layout'
import AboutContent from '../components/about-content'
import Head from 'next/head'

export default function About({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>About | Evan Schein</title>
        </Head>
        <AboutContent />
      </Layout>
    </>
  )
}

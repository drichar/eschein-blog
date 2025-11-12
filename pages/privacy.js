import Container from '../components/container'
import Layout from '../components/layout'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getContentById } from '../lib/api'

export default function PrivacyPolicy({ page }) {
  const options = {
    renderText: (text) => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment]
      }, [])
    },
  }

  return (
    <>
      <Layout>
        <Head>
          <title>Privacy Policy | Evan Schein</title>
        </Head>
        <Container className="pb-16">
          <div className="my-16 md:my-24 prose prose-blue prose-lg text-gray-500 text-sm md:text-base lg:text-lg mx-auto break-words">
            {documentToReactComponents(page?.content?.json, options)}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const data = await getContentById('privacy-policy')

  return {
    props: {
      page: data ?? null,
    },
  }
}

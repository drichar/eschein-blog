import Layout from '../components/layout'
import ContactContent from '../components/contact-content'
import Head from 'next/head'

export default function Contact({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Contact | Evan Schein</title>
        </Head>
        <ContactContent />
      </Layout>
    </>
  )
}

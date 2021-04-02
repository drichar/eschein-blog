import Layout from '../components/layout'
import ContactContent from '../components/contact-content'
import Head from 'next/head'

export default function Contact({ preview }) {
  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Contact | Evan Schein</title>
          <meta
            name="description"
            content="Evan is a family law and divorce attorney in New York City, and a partner and the Head of Litigation at Berkman Bottger Newman &amp; Schein. He is the host of the podcast Schein On, where he and his guests tackle tough legal, financial, and life issues, and talk about sports whenever they have an excuse."
          />
        </Head>
        <ContactContent />
      </Layout>
    </>
  )
}

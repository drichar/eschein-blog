import { useRouter } from 'next/router'
import cn from 'classnames'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  const { asPath } = useRouter()
  return (
    <>
      <Meta />
      <Nav />
      <main className={cn({ 'mt-20': asPath !== '/' })}>
        {children}
      </main>
      <Footer />
    </>
  )
}

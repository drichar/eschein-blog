import Nav from '../components/nav'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen pt-20">
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

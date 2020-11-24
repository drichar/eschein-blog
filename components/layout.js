import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Nav from './nav'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ children }) {
  const [navHeight, setNavHeight] = useState(0)
  const navRef = useRef(null)
  const { asPath } = useRouter()

  const handleResize = () => {
    if (navRef.current && asPath !== '/') {
      setNavHeight(navRef.current.offsetHeight)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <Meta />
      <Nav forwardedRef={navRef} />
      <main style={{ marginTop: navHeight }}>
        {children}
      </main>
      <Footer />
    </>
  )
}

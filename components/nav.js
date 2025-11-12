import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import Link from 'next/link'
import ActiveLink from './active-link'
import MenuIcon from './menu-icon'
import Button from './button'

export default function Nav({ forwardedRef }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const router = useRouter()
  const isHome = router.route === '/'

  const handleScroll = () => {
    const offset = window.scrollY
    if (offset > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const classes = {
    main: {
      inactive:
        isHome && !scrolled
          ? 'text-white-50 hover:text-white-90 lg:text-xl 3xl:text-2xl px-4 py-2'
          : 'text-black-50 hover:text-black-90 px-4 py-2',
      active:
        isHome && !scrolled
          ? 'text-white-90 lg:text-xl 3xl:text-2xl px-4 py-2 3xl:px-5 3xl:py-3'
          : 'text-black-90 px-4 py-2',
    },
    mobile: {
      inactive:
        'block px-4 py-2 rounded-md text-base font-semibold text-gray-900 hover:bg-gray-100',
      active:
        'block px-4 py-2 rounded-md text-base font-semibold text-white bg-gray-900',
    },
  }

  // matches '/' and '/posts/[slug]' and '/#blog'
  const blogRegex = /^(?:^\/(#blog|posts\/)|^\/$)/

  return (
    <nav
      className={cn(
        'fixed w-full top-0 left-0 z-40 bg-white transition-shadow duration-200',
        {
          'menu-home': isHome,
          'is-visible': scrolled || menuOpen,
          'shadow-md': scrolled || menuOpen,
        },
      )}
    >
      <div
        ref={forwardedRef}
        className="flex flex-row items-center justify-between py-3 px-3 md:py-4 md:px-5 3xl:py-5 3xl:px-6"
      >
        <div className="flex-none w-11 md:flex-1 md:w-auto flex justify-start">
          <ul className="hidden md:flex lg:text-lg font-semibold">
            <li>
              <ActiveLink
                href="/"
                matches={blogRegex}
                activeClassName={classes.main.active}
                inactiveClassName={classes.main.inactive}
              >
                Blog
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/schein-on"
                activeClassName={classes.main.active}
                inactiveClassName={classes.main.inactive}
              >
                Podcast
              </ActiveLink>
            </li>
            <li>
              <ActiveLink
                href="/about"
                activeClassName={classes.main.active}
                inactiveClassName={classes.main.inactive}
              >
                About
              </ActiveLink>
            </li>
          </ul>
          <div className="md:hidden">
            <MenuIcon
              isOpen={menuOpen}
              isHome={isHome}
              scrolled={scrolled}
              onMenuClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
        <div className="logo flex-grow md:flex-1 flex justify-center">
          <Link
            href="/"
            className="font-bold text-gray-900 text-2xl md:text-3xl 2xl:text-4xl tracking-tight px-4 py-1 rounded-md"
          >
            Evan Schein
          </Link>
        </div>
        <div
          className={cn(
            'flex-none w-11 md:flex-1 md:w-auto flex justify-end transition-opacity',
            {
              'opacity-0 pointer-events-none': isHome && !scrolled,
            },
          )}
        >
          <Link href="/contact" passHref>
            <Button
              variant="primary"
              size="responsive"
              className="hidden md:inline-block"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={cn('md:hidden', {
          block: menuOpen,
          hidden: !menuOpen,
        })}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <ActiveLink
            href="/"
            matches={blogRegex}
            activeClassName={classes.mobile.active}
            inactiveClassName={classes.mobile.inactive}
          >
            Blog
          </ActiveLink>
          <ActiveLink
            href="/schein-on"
            activeClassName={classes.mobile.active}
            inactiveClassName={classes.mobile.inactive}
          >
            Podcast
          </ActiveLink>
          <ActiveLink
            href="/about"
            activeClassName={classes.mobile.active}
            inactiveClassName={classes.mobile.inactive}
          >
            About
          </ActiveLink>
          <ActiveLink
            href="/contact"
            activeClassName={classes.mobile.active}
            inactiveClassName={classes.mobile.inactive}
          >
            Contact
          </ActiveLink>
        </div>
      </div>
    </nav>
  )
}

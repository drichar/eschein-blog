import React, { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import ActiveLink from './active-link'
import MenuIcon from './menu-icon'
import Button from './button';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const classes = {
    main: {
      inactive: 'text-gray-500 hover:text-gray-900 px-4 py-2',
      active: 'text-gray-900 px-4 py-2'
    },
    mobile: {
      inactive: 'block px-4 py-2 rounded-md text-base font-semibold text-gray-900 hover:bg-gray-100',
      active: 'block px-4 py-2 rounded-md text-base font-semibold text-white bg-gray-900'
    }
  }

  return (
    <nav className="fixed w-full top-0 left-0 bg-white">
      <div className="flex flex-row items-center justify-between py-3 px-3 md:py-4 md:px-5">
        <div className="flex-none w-11 md:flex-1 md:w-auto flex justify-start">
          <ul className="hidden md:flex lg:text-lg font-semibold">
            <li>
              <ActiveLink activeClassName={classes.main.active} href="/">
                <a className={classes.main.inactive}>Blog</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={classes.main.active} href="/podcast">
                <a className={classes.main.inactive}>Podcast</a>
              </ActiveLink>
            </li>
            <li>
              <ActiveLink activeClassName={classes.main.active} href="/about">
                <a className={classes.main.inactive}>About</a>
              </ActiveLink>
            </li>
          </ul>
          <div className="md:hidden">
            <MenuIcon
              isOpen={menuOpen}
              onMenuClick={() => setMenuOpen(!menuOpen)}
            />
          </div>
        </div>
        <div className="flex-grow md:flex-1 flex justify-center">
          <Link href="/">
            <a className="font-bold text-2xl md:text-3xl 2xl:text-4xl tracking-tight px-4 py-1 rounded-md">
              Evan Schein
            </a>
          </Link>
        </div>
        <div className="flex-none w-11 md:flex-1 md:w-auto flex justify-end">
          <Button
            variant="primary"
            size="responsive"
            className="hidden md:inline-block"
          >
            Contact
          </Button>
        </div>
      </div>
      <div
        className={cn('md:hidden', {
          'block': menuOpen,
          'hidden': !menuOpen
        })}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <ActiveLink activeClassName={classes.mobile.active} href="/">
            <a className={classes.mobile.inactive}>
              Blog
            </a>
          </ActiveLink>
          <ActiveLink activeClassName={classes.mobile.active} href="/podcast">
            <a className={classes.mobile.inactive}>
              Podcast
            </a>
          </ActiveLink>
          <ActiveLink activeClassName={classes.mobile.active} href="/about">
            <a className={classes.mobile.inactive}>
              About
            </a>
          </ActiveLink>
          <ActiveLink activeClassName={classes.mobile.active} href="/contact">
            <a className={classes.mobile.inactive}>
              Contact
            </a>
          </ActiveLink>
        </div>
      </div>
    </nav>
  );
}

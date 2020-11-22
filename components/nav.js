import React, { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import MenuIcon from './menu-icon'
import Button from './button';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white">
      <div className="flex flex-row items-center justify-between py-3 px-3 md:py-4 md:px-5">
        <div className="flex-none w-11 md:flex-1 md:w-auto flex justify-start">
          <ul className="hidden md:flex lg:text-lg font-semibold">
            <li>
              <Link href="/">
                <a className="text-gray-500 hover:text-gray-900 px-4 py-2">Blog</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-gray-500 hover:text-gray-900 px-4 py-2">Podcast</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="text-gray-500 hover:text-gray-900 px-4 py-2">About</a>
              </Link>
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
          <Link href="/">
            <a className="block px-4 py-2 rounded-md text-base font-semibold text-white bg-gray-900">
              Blog
            </a>
          </Link>
          <Link href="/">
            <a className="block px-4 py-2 rounded-md text-base font-semibold text-gray-900 hover:bg-gray-100">
              Podcast
            </a>
          </Link>
          <Link href="/">
            <a className="block px-4 py-2 rounded-md text-base font-semibold text-gray-900 hover:bg-gray-100">
              About
            </a>
          </Link>
          <Link href="/">
            <a className="block px-4 py-2 rounded-md text-base font-semibold text-gray-900 hover:bg-gray-100">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

import React, { useState } from 'react'
import cn from 'classnames'
import Link from 'next/link'
import MenuIcon from './menu-icon'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 left-0 bg-white">
      <div className="flex flex-row items-center justify-between py-3 px-3 md:py-4 md:px-5">
        <div className="flex-none w-11 md:flex-1 md:w-auto flex justify-start">
          <ul className="hidden md:flex lg:text-lg font-semibold">
            <li className="mr-2">
              <Link href="/">
                <a className="px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Blog</a>
              </Link>
            </li>
            <li className="mr-2">
              <Link href="/">
                <a className="px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Podcast</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">About</a>
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
            <a className="font-bold text-2xl md:text-3xl 2xl:text-4xl tracking-tight px-4 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Evan Schein
            </a>
          </Link>
        </div>
        <div className="flex-none w-11 md:flex-1 md:w-auto flex justify-end">
          <button className="hidden md:inline-block py-2 px-4 2xl:py-3 2xl:px-6 2xl:text-xl bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Contact
          </button>
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
            <a className="block px-4 py-2 rounded-md text-base font-medium text-white bg-gray-900">
              Blog
            </a>
          </Link>
          <Link href="/">
            <a className="block px-4 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
              Podcast
            </a>
          </Link>
          <Link href="/">
            <a className="block px-4 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
              About
            </a>
          </Link>
          <Link href="/">
            <a className="block px-4 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
              Contact
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

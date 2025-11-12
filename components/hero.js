import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="home-hero lg:relative lg:flex lg:items-center bg-blue-800">
      <div className="mx-auto max-w-full w-full text-center py-28 md:py-36 lg:py-48 lg:text-left lg:z-10">
        <div className="px-4 lg:w-full sm:px-8 lg:pl-8 lg:pr-0 xl:pl-16 2xl:pl-24">
          <h1 className="hero-title text-6xl tracking-tighter font-extrabold text-gray-100 sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Evan Schein
          </h1>
          <p className="hero-subtitle mt-2 mx-auto text-2xl text-white-50 tracking-tight sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">
            New York Divorce Lawyer
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-green-600 hover:bg-green-500 lg:py-4 md:text-xl md:px-10 xl:text-2xl"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Image
          src="/images/hero.jpg"
          className="object-cover object-left"
          alt="Evan standing in front of New York City street"
          fill
          sizes="50vw"
          priority
        />
      </div>
    </section>
  )
}

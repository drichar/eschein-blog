import Link from 'next/link'
import Image from 'next/image'

export default function PodcastCta() {
  return (
    <div className="bg-gray-50 mb-16">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl xl:text-5xl">
            <span className="block">Marriage. Money. Divorce.</span>
            <span className="block text-blue-600">And More.</span>
          </h2>
          <div className="my-4 prose prose-blue prose-lg xl:prose-xl text-gray-500">
            <p>Evan is a family law and divorce attorney in New York City, and a partner and the Head of Litigation at <a href="https://www.berkbot.com/" target="_blank">Berkman Bottger Newman &amp; Schein</a>. He is the host of the podcast <Link href="/schein-on"><a><em>Schein On</em></a></Link>, where he and his guests tackle tough legal, financial, and life issues, and talk about sports whenever they have an&nbsp;excuse.</p>
          </div>
        </div>
        <div className="mt-10 flex lg:mt-0 lg:ml-16 lg:flex-shrink-0">
          <Link href="/schein-on">
            <a>
              <Image
                className="rounded-lg shadow-lg m-auto md:m-0"
                src="/images/schein-on.png"
                alt="Schein On Podcast"
                width={320}
                height={320}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

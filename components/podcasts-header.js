import Image from 'next/image'

export default function PodcastsHeader() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto pb-16 lg:flex lg:justify-between lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">Schein On Podcast</h2>
          <p className="my-5 text-xl text-gray-500">Subscribe wherever you get your podcasts:</p>
          <div className="flex flex-wrap">
            <a href="https://podcasts.apple.com/us/podcast/schein-on/id1541360422" target="_blank" className="mt-4 mr-6">
              <Image
                className="rounded"
                src="/images/subscribe-apple.png"
                alt="Listen on Apple Podcasts"
                width={125*1.25}
                height={32*1.25}
              />
            </a>
            <a href="https://open.spotify.com/show/5p57nZfu9ymZU7eS4z3hea?si=NjKS_TqeQKezsGJGwya7rQ" target="_blank" className="mt-4 mr-6">
              <Image
                src="/images/subscribe-spotify.png"
                alt="Spotify"
                width={107*1.25}
                height={32*1.25}
              />
            </a>
            <a href="https://www.breaker.audio/p/schein-on" target="_blank" className="mt-4 mr-6">
              <Image
                src="/images/subscribe-breaker.png"
                alt="Listen on Breaker"
                width={124*1.25}
                height={32*1.25}
              />
            </a>
            <a href="https://castbox.fm/channel/id3545929?country=us" target="_blank" className="mt-4 mr-6">
              <Image
                src="/images/subscribe-castbox.png"
                alt="Castbox"
                width={87*1.25}
                height={32*1.25}
              />
            </a>
            <a href="https://radiopublic.com/schein-on-8gx1gZ" target="_blank" className="mt-4 mr-6">
              <Image
                src="/images/subscribe-radiopublic-red.png"
                alt="Radio Public"
                width={95*1.25}
                height={32*1.25}
              />
            </a>
            <a href="https://www.stitcher.com/show/schein-on" target="_blank" className="mt-4 mr-6">
              <Image
                src="/images/subscribe-stitcher-blk.png"
                alt="Stitcher"
                width={77*1.25}
                height={32*1.25}
              />
            </a>
          </div>
        </div>
        <div className="hidden lg:block mt-10 w-full max-w-xs">
          <Image
            className="rounded-lg shadow-lg m-auto md:m-0"
            src="/images/schein-on.png"
            alt="Schein On Podcast"
            width={320}
            height={320}
          />
        </div>
      </div>
    </div>
  )
}

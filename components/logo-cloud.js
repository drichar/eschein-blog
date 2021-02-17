import Image from 'next/image'

export default function LogoCloud() {
  return (
    <div className="bg-white lg:mb-8 opacity-70">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-x-16 gap-y-4 md:grid-cols-6 lg:hidden">
          <div className="col-span-1 flex justify-center md:col-span-2">
            <Image
              src="/images/logo-aacfl.png"
              className="h-12"
              alt="American Academy for Certified Financial Litigators"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2">
            <Image
              src="/images/logo-superlawyers.png"
              className="h-12"
              alt="Rated by Super Lawyers"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2">
            <Image
              src="/images/logo-avvo.png"
              className="h-12"
              alt="Avvo Rating 10.0 Superb Top Family Attorney"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3">
            <Image
              src="/images/logo-nyacp.png"
              className="h-12"
              alt="New York Association of Collaborative Professionals"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3">
            <Image
              src="/images/logo-martindale.png"
              className="h-12"
              alt="Martindale-Hubbell Client Champion Silver 2021"
              width={300}
              height={300}
            />
          </div>
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-16 grid-cols-5">
          <div className="col-span-1 flex justify-center col-span-1">
            <Image
              src="/images/logo-aacfl.png"
              className="h-12"
              alt="American Academy for Certified Financial Litigators"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1 flex justify-center col-span-1">
            <Image
              src="/images/logo-martindale.png"
              className="h-12"
              alt="Martindale-Hubbell Client Champion Silver 2021"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1 flex justify-center col-span-1">
            <Image
              src="/images/logo-superlawyers.png"
              className="h-12"
              alt="Rated by Super Lawyers"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-1 flex justify-center col-span-1">
            <Image
              src="/images/logo-nyacp.png"
              className="h-12"
              alt="New York Association of Collaborative Professionals"
              width={300}
              height={300}
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <Image
              src="/images/logo-avvo.png"
              className="h-12"
              alt="Avvo Rating 10.0 Superb Top Family Attorney"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

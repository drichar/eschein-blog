export default function Hero() {
  return (
    <section className="mb-16 home-hero lg:relative lg:flex lg:items-center bg-blue-700">
      <div className="mx-auto max-w-full w-full text-center py-20 sm:py-24 md:py-36 lg:py-48 lg:text-left">
        <div className="px-4 lg:w-1/2 sm:px-8 lg:pl-8 lg:pr-0">
          <h1 className="text-6xl tracking-tighter font-extrabold text-gray-100 sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
            Evan Schein
          </h1>
          <p className="mt-3 mx-auto text-2xl text-white-50 tracking-tight sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl md:mt-5">
            New York Divorce Lawyer
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 md:py-4 md:text-lg md:px-10">
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <img className="absolute inset-0 w-full h-full object-cover object-left" src="images/hero.jpg" alt="" />
      </div>
    </section>
  )
}

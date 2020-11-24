import Image from 'next/image'

export default function AboutContent() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto pt-8 pb-16 lg:pt-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
        <div className="mx-auto text-base max-w-prose lg:max-w-none">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About</h2>
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Evan Schein</h3>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
              <defs>
                <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    src="/images/about.jpg"
                    className="rounded-lg shadow-lg object-cover object-center"
                    alt="Evan standing in front of New York City street"
                    width={1075}
                    height={1400}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <svg className="flex-none w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2">Photograph by Lorem Ipsum</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            {/* <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">Evan is a New York City-based divorce and family law attorney, and the Head of Litigation at <a href="https://www.berkbot.com/" target="_blank">Berkman Bottger Newman &amp; Schein LLP</a>.</p>
            </div> */}
            {/* <div className="mt-5 prose prose-blue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"> */}
            <div className="prose prose-blue prose-lg text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>Evan is a New York City-based divorce and family law attorney, and the Head of Litigation at <a href="https://www.berkbot.com/" target="_blank">Berkman Bottger Newman &amp; Schein LLP</a>. During his career, he has litigated high-conflict custody cases and complex financial matters involving hedge funds, businesses, real estate, trusts, sports, entertainment, art, wine, cars and more. He has helped clients find post-divorce happiness and build successful financial lives, advocated to protect children and fought for the rights of victims of domestic violence. He has learned more than a few things about family, money, and the law, things that every spouse or parent in America should know.</p>
              <p>As a divorce lawyer in America&#39;s unofficial capital city, Evan&#39;s been lucky to meet fascinating people and work with top experts in fields like finance, trust and estates, real estate, sports, entertainment, psychology, and more. On his podcast Schein On, Evan pulls back the curtain and gives an inside and unfiltered look into the world of marriage, money and divorce. He breaks down topics and provides a unique perspective. Schein On will feature guests and leading experts such as sports and entertainment agents, financial advisors, business managers, prominent trust and estate attorneys, therapists and more.</p>
              <p>Prior to becoming a family law attorney, Evan was a sports agent, where he learned about the lives and finances of athletes and their families. He has analyzed thousands of sports and entertainment playing contracts and marketing and endorsement deals. Evan understands the nuanced and complex financial structure of these agreements. He has used this understanding to negotiate successful and lucrative settlements for his clients. Now, Evan represents athletes in family law matters.</p>
              <p>Evan has been recognized in the <a href="https://profiles.superlawyers.com/new-york-metro/new-york/lawyer/evan-d-schein/13801bf1-53bd-4815-b44b-936db0ad1623.html" target="_bllank">New York Metro Super Lawyers Edition</a> from 2013 to 2020. He is a frequent lecturer for various organizations and bar associations in New York and across the country. Evan has been cited in publications for his work on prominent New York family law cases. He has achieved the top rating of 10 at <a href="https://www.avvo.com/attorneys/10175-ny-evan-schein-1790370.html" target="_blank">Avvo</a>, the prominent attorney-ranking database. Evan is active in the matrimonial community and in 2019, Evan was selected for inclusion in the Westchester Business Council’s prestigious <a href="https://thebcw.org/rising-stars-shine-at-million-air/" target="_blank">40 Under 40 list</a>.</p>
              <p>Evan lives in Manhattan with his wife and his daughter.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

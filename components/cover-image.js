import Image from 'next/image'

export default function CoverImage({ title, coverImage }) {
  return (
    <div className="pb-4 sm:mx-0 cover-image text-center">
      <Image
        src={coverImage.url}
        alt={`Cover Image for ${title}`}
        width={coverImage.width}
        height={coverImage.height}
        className="mx-auto"
        priority
      />
    </div>
  )
}

export default function CoverImage({ title, url }) {
  return (
    <div className="pb-4 sm:mx-0">
      <img
        src={url}
        alt={`Cover Image for ${title}`}
        className="shadow-small"
      />
    </div>
  )
}

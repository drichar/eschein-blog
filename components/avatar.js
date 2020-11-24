export default function Avatar({ name, picture }) {
  return (
    <div className="flex-shrink-0">
      <span className="sr-only">{name}</span>
      <img className="h-12 w-12 rounded-full" src={picture.url} alt={name} />
    </div>
  )
}

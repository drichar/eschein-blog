export default function Avatar({ name, picture }) {
  return (
    <div className="flex-shrink-0">
      <span className="sr-only">{name}</span>
      <img className="h-10 w-10 rounded-full" src={picture.url} alt={name} />
    </div>
  )
}

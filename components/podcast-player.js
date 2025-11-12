export default function PodcastPlayer({ spotifyEpisodeUrl }) {
  if (!spotifyEpisodeUrl) {
    return null
  }

  // Convert Spotify URL to embed format
  // Example: https://open.spotify.com/episode/0EuokVAyWxP61NUo3T0SmT
  // Becomes: https://open.spotify.com/embed/episode/0EuokVAyWxP61NUo3T0SmT
  const embedUrl = spotifyEpisodeUrl.replace(
    'open.spotify.com/',
    'open.spotify.com/embed/',
  )

  return (
    <iframe
      data-testid="embed-iframe"
      style={{
        borderRadius: '12px',
        width: '100%',
      }}
      src={`${embedUrl}?utm_source=generator`}
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  )
}

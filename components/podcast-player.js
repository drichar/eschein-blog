export default function PodcastPlayer({ url }) {
  const embedUrl = url.replace('podcasts.apple.com', 'embed.podcasts.apple.com')

  return (
    <iframe
      allow="autoplay *; encrypted-media *; fullscreen *"
      frameBorder="0"
      height="175"
      style={{
        width: '100%',
        overflow: 'hidden',
        background: 'transparent',
      }}
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
      src={embedUrl}
    ></iframe>
  )
}

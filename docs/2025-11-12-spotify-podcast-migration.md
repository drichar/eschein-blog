# Migration: Podcast Hosting to Spotify for Creators

**Date:** November 12, 2025
**Branch:** `feat/spotify-podcast-embeds`
**Migration Duration:** ~2 hours

## Overview

This migration moves podcast episode embeds from Adori Labs and Apple Podcasts to Spotify for Creators, providing a unified, modern player experience across all podcast pages.

## Summary of Changes

### Previous State
- **Podcast list page** (`/schein-on`): Used Adori Labs web player (`https://webplayer.adorilabs.com/{id}`)
- **Individual podcast pages** (`/podcasts/{slug}`): Used Apple Podcasts embed player
- Custom Tailwind breakpoint `adoriFull: 816px` for Adori player responsive behavior

### New State
- **All podcast pages**: Now use Spotify for Creators embed player
- **Unified experience**: Same player design across list and detail views
- **Modern UI**: Spotify's native player with rounded corners and consistent styling
- **Better mobile responsiveness**: No custom breakpoints needed

## Contentful Schema Changes

### New Field Added
Added to **Podcast** content type:
- **Field name**: `Spotify Episode URL`
- **Field ID**: `spotifyEpisodeUrl`
- **Field type**: Short text
- **Purpose**: Store the Spotify episode URL (e.g., `https://open.spotify.com/episode/{episode-id}`)

### Migration Strategy
- **Proof of Concept**: Started with 3 episodes to validate the approach
- **Gradual Rollout**: Episodes without Spotify URLs will not display (graceful degradation)
- **Complete Migration**: Remaining 90 episodes to be updated after POC validation

## Code Changes

### 1. GraphQL API Updates
**File:** [lib/api.js](../lib/api.js:22-29)

Added `spotifyEpisodeUrl` to `PODCAST_GRAPHQL_FIELDS`:
```javascript
const PODCAST_GRAPHQL_FIELDS = `
id
title
excerpt
episode
date
spotifyEpisodeUrl
`
```

### 2. Podcast Player Component
**File:** [components/podcast-player.js](../components/podcast-player.js)

**Before:**
- Accepted `url` prop (Apple Podcasts URL)
- Converted to Apple Podcasts embed format
- Fixed height of 175px

**After:**
- Accepts `spotifyEpisodeUrl` prop
- Converts Spotify URL to embed format: `open.spotify.com/embed/episode/{id}`
- Standard Spotify height of 352px
- Returns `null` if no URL provided (graceful degradation)

**Key Changes:**
```javascript
// URL conversion
const embedUrl = spotifyEpisodeUrl.replace(
  'open.spotify.com/',
  'open.spotify.com/embed/',
)

// Spotify-specific iframe attributes
<iframe
  style={{ borderRadius: '12px', width: '100%' }}
  src={`${embedUrl}?utm_source=generator`}
  width="100%"
  height="352"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
/>
```

### 3. Podcast List Component
**File:** [components/podcasts-content.js](../components/podcasts-content.js)

**Before:**
- Adori Labs iframe embedded in complex layout
- Episode info displayed conditionally based on `adoriFull` breakpoint
- Episode info overlaid on top of player

**After:**
- Episode metadata displayed above player (episode number, title, excerpt, date)
- Spotify embed below metadata
- Cleaner, more semantic HTML structure
- Episodes without Spotify URLs are filtered out

**Layout Changes:**
```javascript
// Episode metadata first
<div className="mb-4">
  <h4>Episode {episode}</h4>
  <h3>{title}</h3>
  <p>{excerpt}</p>
  <p>{date}</p>
</div>

// Spotify player second
<iframe src={embedUrl} ... />
```

### 4. Tailwind Configuration
**File:** [tailwind.config.js](../tailwind.config.js:8-10)

Removed Adori-specific breakpoint:
```diff
screens: {
-  adoriFull: '816px',
   '3xl': '1920px',
}
```

## Proof of Concept Episodes

The following 3 episodes were migrated as POC:

1. **Divorce Financial Strategist Rhonda Noordyk**
   - Spotify URL: `https://open.spotify.com/episode/0EuokVAyWxP61NUo3T0SmT`

2. **Author & 'Whole 30' Co-Founder Melissa Urban**
   - Spotify URL: `https://open.spotify.com/episode/3MFwfZbTBNEOn4eeabduty`

3. **Navigating Divorce and Addiction with Recovery Coach Lisa Smith**
   - Spotify URL: `https://open.spotify.com/episode/0OIAJG00USQjT6ZriiyIsi`

## Testing Checklist

- [x] Dev server starts without errors
- [x] Podcast list page (`/schein-on`) displays 3 POC episodes with Spotify players
- [x] Episodes without Spotify URLs are filtered out (don't display)
- [x] Spotify players load and are playable
- [x] Individual podcast pages display Spotify player
- [x] Episode metadata displays correctly (title, excerpt, episode number, date)
- [x] Responsive behavior works across mobile, tablet, desktop
- [x] No console errors or warnings

## Next Steps

### Remaining Work
1. **Get Spotify URLs for remaining 90 episodes** from Spotify for Creators
2. **Batch update Contentful** with all Spotify episode URLs
3. **Verify all episodes** display correctly on staging
4. **Production deployment** after client approval

### How to Get Spotify Episode URLs
1. Go to podcast show page: `https://open.spotify.com/show/5p57nZfu9ymZU7eS4z3hea`
2. For each episode, right-click → Share → Copy link to episode
3. Format: `https://open.spotify.com/episode/{episode-id}`

### Bulk Update Options
- **Manual**: Update each episode in Contentful UI
- **Script**: Use Contentful Management API to batch update
- **CSV Import**: Export Contentful data, add URLs, re-import

## Rollback Instructions

If issues arise, rollback steps:

1. **Revert code changes:**
   ```bash
   git checkout staging
   git branch -D feat/spotify-podcast-embeds
   ```

2. **Contentful (optional):**
   - Remove `spotifyEpisodeUrl` field from Podcast content type
   - Or simply leave it - old code will still work with Adori/Apple embeds

3. **Note:** Episodes without Spotify URLs will not display with new code. Ensure rollback is complete before testing.

## Benefits of Migration

### User Experience
- **Consistent player** across all podcast pages
- **Modern design** with Spotify's native UI
- **Better mobile experience** without custom breakpoints
- **Familiar interface** for Spotify users

### Technical
- **Simplified codebase** - removed Adori-specific styling
- **Easier maintenance** - one embed format instead of two
- **Better performance** - Spotify's optimized player
- **Future-proof** - Spotify for Creators is actively maintained

### Analytics
- Spotify for Creators provides analytics dashboard
- Episodes streamed via embed are tracked (if user is logged in)

## Known Limitations

1. **Analytics tracking**: Streams only counted if user is logged into Spotify
2. **No auto-play**: Spotify embeds require user interaction to play
3. **Episodes without URLs**: Will not display until Spotify URL is added

## References

- [Spotify Embed Documentation](https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed)
- [Spotify for Creators](https://creators.spotify.com/)
- [Contentful GraphQL API](https://www.contentful.com/developers/docs/references/graphql/)

---

**Generated:** November 12, 2025
**Last Updated:** November 12, 2025
**Maintained By:** Doug Richar (drichar@gmail.com)

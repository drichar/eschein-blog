# Migration: Next.js 12 → 14 & React 16 → 18

**Date:** November 12, 2025
**Branch:** `feat/modernize-dependencies-tooling`
**Migration Duration:** ~1 day

## Overview

This migration modernizes the codebase from 5-year-old dependencies to current stable versions, focusing on minimal breaking changes while addressing security vulnerabilities and improving developer experience.

## Summary of Changes

### Package Manager
- **Migrated:** yarn → pnpm
- **Files Removed:** `yarn.lock`
- **Files Added:** `pnpm-lock.yaml`

### Major Dependency Updates

| Package | Before | After | Breaking Changes |
|---------|--------|-------|------------------|
| React | 16.14.0 | 18.3.1 | ✓ (see below) |
| React DOM | 16.14.0 | 18.3.1 | ✓ (see below) |
| Next.js | 12.3.1 | 14.2.33 | ✓ (see below) |
| Tailwind CSS | 2.0.1 | 3.4.18 | ✓ (see below) |
| axios | 0.21.1 | 1.13.2 | Security fix |
| date-fns | 2.14.0 | 3.6.0 | Minor API changes |

### Security Fixes
- **axios:** Upgraded from 0.21.1 (known vulnerabilities) to 1.13.2

## New Development Tooling

### Added
- **Prettier** (`3.6.2`) - Code formatting with format-on-save
- **ESLint** (`8.57.1`) - Linting with Next.js config
- **VSCode Settings** - Consistent editor behavior across team

### Configuration Files Created
- `.prettierrc.json` - Prettier configuration
- `.prettierignore` - Files to exclude from formatting
- `.eslintrc.json` - ESLint with Next.js and Prettier integration
- `.vscode/settings.json` - Editor settings for format-on-save

## Breaking Changes & Fixes

### 1. Next.js Link Component (v13+)
**Issue:** `<Link>` no longer accepts `<a>` tags as children

**Files Changed:**
- `components/active-link.js` - Complete refactor to use `className` prop
- `components/nav.js` - Updated all Link usages (9 instances)
- `components/footer.js` - Updated all Link usages (6 instances)
- `components/header.js` - Updated Link usage
- `components/hero.js` - Updated Link usage
- `components/hero-post.js` - Updated Link usage
- `components/podcast-cta.js` - Updated Link usages (2 instances)
- `components/post-preview.js` - Updated Link usage

**Before:**
```jsx
<Link href="/about">
  <a className="text-white">About</a>
</Link>
```

**After:**
```jsx
<Link href="/about" className="text-white">
  About
</Link>
```

### 2. Next.js Image Component (v13+)
**Issue:** Legacy `layout` and `objectFit` props deprecated

**Files Changed:**
- `components/hero.js` - Updated to use `fill` with `sizes`
- `components/post-preview.js` - Updated to use `fill` with `sizes`
- `components/cover-image.js` - Added `mx-auto` for centering, added `priority`
- `components/logo-cloud.js` - Fixed sizing by removing conflicting `h-12` class

**Before:**
```jsx
<Image
  src={url}
  layout="fill"
  objectFit="cover"
/>
```

**After:**
```jsx
<Image
  src={url}
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  className="object-cover object-center"
  priority  // for above-the-fold images
/>
```

### 3. React 18 Hydration Warnings
**Issue:** Title elements receiving arrays instead of single text nodes

**Files Changed:**
- `pages/posts/[slug].js`
- `pages/podcasts/[slug].js`

**Before:**
```jsx
<title>{post.title} | Evan Schein</title>
```

**After:**
```jsx
<title>{`${post.title} | Evan Schein`}</title>
```

### 4. Tailwind CSS 3 Configuration
**File:** `tailwind.config.js`

**Changes:**
- `purge` → `content` (new property name)
- `colors.lightBlue` → `colors.sky` (renamed color)
- `colors.blueGray` → `colors.slate` (renamed color)
- Updated content paths to include pages directory

### 5. PostCSS Configuration
**File:** `postcss.config.js`

**Issue:** Null plugin warning in development mode

**Before:**
```js
plugins: [
  'tailwindcss',
  process.env.NODE_ENV === 'production' ? [...] : undefined,
  'postcss-preset-env'
]
```

**After:**
```js
plugins: {
  tailwindcss: {},
  ...(process.env.NODE_ENV === 'production' ? {...} : {}),
  'postcss-preset-env': {}
}
```

### 6. Next.js Image Configuration
**File:** `next.config.js`

**Before:**
```js
images: {
  domains: ['images.ctfassets.net']
}
```

**After:**
```js
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'images.ctfassets.net'
    }
  ]
}
```

## Performance Optimizations

### Image Loading
- Added `sizes` prop to all `fill` images for proper responsive sizing
- Added `priority` prop to above-the-fold images (cover images, hero image)
- Improves Core Web Vitals (LCP - Largest Contentful Paint)

## Testing Checklist

- [x] Dev server starts without errors
- [x] Production build completes successfully
- [x] All pages render correctly (34 static pages)
- [x] No console warnings (except informational large page data warning)
- [x] Images display at correct sizes and positions
- [x] Navigation links work correctly
- [x] Blog post pages load with proper titles
- [x] Podcast pages load correctly

## Known Issues / Non-Critical Warnings

### Large Page Data (Informational)
```
Warning: data for page "/" is 241 kB which exceeds the threshold of 128 kB
```
This is an informational warning suggesting potential optimization. The homepage loads all blog post data. Consider implementing pagination in the future if this becomes a performance concern.

## Rollback Instructions

If issues arise, rollback steps:

1. **Checkout previous commit:**
   ```bash
   git log --oneline  # Find commit before migration
   git checkout <commit-hash>
   ```

2. **Reinstall old dependencies:**
   ```bash
   rm -rf node_modules pnpm-lock.yaml
   yarn install  # or npm install if using npm
   ```

3. **Restore old branch:**
   ```bash
   git checkout main
   ```

## Future Considerations

### Not Included in This Migration
- App Router migration (Next.js 13+) - Still using Pages Router
- React Server Components - Not needed for current use case
- TypeScript conversion - Keeping JavaScript for now
- Tailwind CSS 4 - Staying on v3 for stability

### Next Steps (Optional)
- Consider migrating to Next.js App Router when stable
- Implement pagination for homepage to reduce page data size
- Update to React 19 when Next.js officially supports it
- Consider adding TypeScript for better type safety

## Commits

This migration consists of the following semantic commits:

1. **feat: modernize dependencies and development tooling**
   - Package manager migration (yarn → pnpm)
   - Major dependency upgrades
   - Development tooling setup (Prettier, ESLint, VSCode config)
   - Next.js 13+ Link component compatibility fixes

2. **fix: resolve Next.js 14 deprecation warnings**
   - Update Image components to modern syntax
   - Fix PostCSS null plugin warning
   - Update next.config.js to use remotePatterns

3. **fix: resolve React hydration warning in page titles**
   - Fix title tag JSX interpolation

4. **fix: correct Next.js Image component sizing issues**
   - Center cover images
   - Fix logo badge sizing

5. **perf: add Next.js Image optimization props for better performance**
   - Add `sizes` props for responsive images
   - Add `priority` props for LCP optimization

## Documentation Structure

For future documentation, follow this pattern:

```
docs/
├── README.md (index of all documentation)
├── YYYY-MM-DD-brief-description.md
└── YYYY-MM-DD-another-feature.md
```

### Naming Convention
- `YYYY-MM-DD-brief-description.md`
- Example: `2025-11-12-next14-react18-migration.md`, `2025-11-12-spotify-podcast-integration.md`

### Template Sections
1. Overview
2. Summary of Changes
3. Breaking Changes & Fixes
4. Testing Checklist
5. Known Issues
6. Rollback Instructions
7. Future Considerations

## References

- [Next.js 13 Upgrade Guide](https://nextjs.org/docs/pages/building-your-application/upgrading/version-13)
- [Next.js 14 Upgrade Guide](https://nextjs.org/docs/pages/building-your-application/upgrading/version-14)
- [React 18 Upgrade Guide](https://react.dev/blog/2022/03/08/react-18-upgrade-guide)
- [Tailwind CSS v3 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Next.js Image Component Docs](https://nextjs.org/docs/pages/api-reference/components/image)

---

**Generated:** November 12, 2025
**Last Updated:** November 12, 2025
**Maintained By:** Doug Richar (drichar@gmail.com)

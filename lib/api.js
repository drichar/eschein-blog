const POST_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
date
author {
  name
  picture {
    url
  }
}
excerpt
content {
  json
}
`

const PODCAST_GRAPHQL_FIELDS = `
slug
title
url
date
author {
  name
  picture {
    url
  }
}
excerpt
ogImage {
  url
}
content {
  json
}
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

// Posts

function extractPost(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items?.[0]
}

function extractPostEntries(fetchResponse) {
  return fetchResponse?.data?.postCollection?.items
}

export async function getPreviewPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

export async function getAllPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPostEntries(entries)
}

export async function getAllPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      postCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPostEntries(entries)
}

export async function getPostAndMorePosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    post: extractPost(entry),
    morePosts: extractPostEntries(entries),
  }
}

// Podcasts

function extractPodcast(fetchResponse) {
  return fetchResponse?.data?.podcastCollection?.items?.[0]
}

function extractPodcastEntries(fetchResponse) {
  return fetchResponse?.data?.podcastCollection?.items
}

export async function getAllPodcastsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      podcastCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${PODCAST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractPodcastEntries(entries)
}

export async function getAllPodcastsForIndex(preview) {
  const entries = await fetchGraphQL(
    `query {
      podcastCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${PODCAST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractPodcastEntries(entries)
}

export async function getPodcast(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      podcastCollection(where: { slug: "${slug}" }, preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${PODCAST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  // const entries = await fetchGraphQL(
  //   `query {
  //     postCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
  //     preview ? 'true' : 'false'
  //   }, limit: 2) {
  //       items {
  //         ${POST_GRAPHQL_FIELDS}
  //       }
  //     }
  //   }`,
  //   preview
  // )
  return {
    podcast: extractPodcast(entry),
    // morePosts: extractPostEntries(entries),
  }
}

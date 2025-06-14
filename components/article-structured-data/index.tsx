import Script from 'next/script'

interface ArticleStructuredDataProps {
  title: string
  description: string
  url: string
  image?: string
  publishedAt: Date
  author?: {
    name: string
    url?: string
  }
  organization?: {
    name: string
    url: string
  }
}

export default function ArticleStructuredData({
  title,
  description,
  url,
  image,
  publishedAt,
  author = {
    name: "Hundefreunde Herzogenrath e.V.",
    url: "https://hundefreunde-herzogenrath.de/team"
  },
  organization = {
    name: "Hundefreunde Herzogenrath e.V.",
    url: "https://hundefreunde-herzogenrath.de"
  }
}: ArticleStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishedAt.toISOString(),
    "dateModified": publishedAt.toISOString(),
    "author": {
      "@type": "Organization",
      "name": author.name,
      "url": author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": organization.name,
      "url": organization.url
    },
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    }),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <Script
      id="article-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

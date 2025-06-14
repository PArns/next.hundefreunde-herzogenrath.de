import Script from 'next/script'

interface GalleryStructuredDataProps {
  name: string
  description: string
  url: string
  images: Array<{
    url: string
    width?: number
    height?: number
    description?: string
  }>
  datePublished: Date
  organization?: {
    name: string
    url: string
    logo: string
  }
}

export default function GalleryStructuredData({
  name,
  description,
  url,
  images,
  datePublished,
  organization = {
    name: "Hundefreunde Herzogenrath e.V.",
    url: "https://hundefreunde-herzogenrath.de",
    logo: "https://hundefreunde-herzogenrath.de/theme/logo.png"
  }
}: GalleryStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": name,
    "description": description,
    "url": url,
    "datePublished": datePublished.toISOString(),
    "publisher": {
      "@type": "Organization",
      "name": organization.name,
      "url": organization.url,
      "logo": {
        "@type": "ImageObject",
        "url": organization.logo
      }
    },
    "image": images.map(img => ({
      "@type": "ImageObject",
      "url": img.url,
      "description": img.description || name,
      ...(img.width && { "width": img.width }),
      ...(img.height && { "height": img.height })
    })),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <Script
      id="gallery-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

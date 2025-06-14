import Script from 'next/script'

interface LocalBusinessStructuredDataProps {
  name: string
  description: string
  url: string
  telephone?: string
  email?: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  logo?: string
  image?: string
  priceRange?: string
}

export default function LocalBusinessStructuredData({
  name,
  description,
  url,
  telephone,
  email,
  address,
  geo,
  openingHours,
  logo,
  image,
  priceRange
}: LocalBusinessStructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry
    },
    ...(telephone && { "telephone": telephone }),
    ...(email && { "email": email }),
    ...(geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": geo.latitude,
        "longitude": geo.longitude
      }
    }),
    ...(openingHours && { "openingHours": openingHours }),
    ...(logo && {
      "logo": {
        "@type": "ImageObject",
        "url": logo
      }
    }),
    ...(image && {
      "image": {
        "@type": "ImageObject",
        "url": image
      }
    }),
    ...(priceRange && { "priceRange": priceRange }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "27"
    }
  }

  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

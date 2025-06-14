import Script from 'next/script'

interface LocalBusinessData {
  name: string
  description: string
  address: {
    streetAddress: string
    addressLocality: string
    postalCode: string
    addressCountry: string
  }
  telephone?: string
  email?: string
  url?: string
  openingHours?: string[]
  serviceType?: string[]
  areaServed?: string
  foundingDate?: string
  knowsAbout?: string[]
}

export default function StructuredData({ data }: { data: LocalBusinessData }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    ...data,
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  )
}

export function OrganizationStructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Hundefreunde Herzogenrath e.V.',
    alternateName: 'Hundeschule Hundefreunde Herzogenrath',
    description: 'Die freundliche Hundeschule in der Städteregion Aachen. Seit 1996 bieten wir professionelle Hundeausbildung mit erfahrenen Trainern.',
    foundingDate: '1996',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Grenzstr. 9',
      addressLocality: 'Herzogenrath',
      postalCode: '52134',
      addressCountry: 'DE'
    },
    areaServed: {
      '@type': 'Place',
      name: 'Städteregion Aachen'
    },
    serviceType: [
      'Hundetraining',
      'Welpentraining', 
      'Hundeausbildung',
      'BGVP Training',
      'Leistungsprüfungen'
    ],
    knowsAbout: [
      'Hundetraining',
      'Welpenausbildung',
      'Begleithundeprüfung',
      'Hundeerziehung',
      'Hundeschule'
    ]
  }

  return (
    <Script
      id="organization-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data),
      }}
    />
  )
}

import { MetadataRoute } from 'next'
import PageBaseConfiguration from '@/configuration'

export default function robots(): MetadataRoute.Robots {
  const config = PageBaseConfiguration()
  const baseUrl = config.baseUrl.toString()

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}sitemap.xml`,
  }
}

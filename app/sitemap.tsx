import { MetadataRoute } from 'next'
import PageBaseConfiguration from '@/configuration'
import { GetAllBlogPostSlugs } from '@/data-provider/contentful/provider/blog-post-provider'
import { GetAllGallerySlugs } from '@/data-provider/contentful/provider/gallery-provider'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const config = PageBaseConfiguration()
  const baseUrl = config.baseUrl.toString()

  // Statische Seiten
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}kurse`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}anfahrt`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}bilder`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}aktuelles`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.6,
    },
    {
      url: `${baseUrl}impressum`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamische Blog-Artikel mit tatsächlichen Publish-Daten
  const blogPosts = await GetAllBlogPostSlugs() || []
  const now = new Date()
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000)
  
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => {
    // Neue Posts haben höhere Priorität und häufigere Updates
    const pubDate = new Date(post.publishedAt)
    const isRecent = pubDate > thirtyDaysAgo
    const lastModified = isNaN(pubDate.getTime()) ? now : pubDate

    return {
      url: `${baseUrl}aktuelles/artikel/${post.slug}`,
      lastModified,
      changeFrequency: isRecent ? 'weekly' as const : 'monthly' as const,
      priority: isRecent ? 0.7 : 0.5,
    }
  })

  // Dynamische Bildergalerien mit Datum-basierter Priorität
  const galleries = await GetAllGallerySlugs() || []
  const galleryPages: MetadataRoute.Sitemap = galleries.map((gallery) => {
    const pubDate = new Date(gallery.publishedAt)
    const isRecent = pubDate > thirtyDaysAgo
    const lastModified = isNaN(pubDate.getTime()) ? now : pubDate

    return {
      url: `${baseUrl}bilder/${gallery.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: isRecent ? 0.6 : 0.4,
    }
  })

  // Blog-Übersichtsseiten mit dynamischer Paginierung
  const totalBlogPosts = blogPosts.length
  const postsPerPage = 10
  const totalPages = Math.ceil(totalBlogPosts / postsPerPage)
  
  const blogPaginationPages: MetadataRoute.Sitemap = Array.from(
    { length: totalPages },
    (_, index) => {
      const pageNumber = index + 1
      return {
        url: `${baseUrl}aktuelles/seite/${pageNumber}`,
        lastModified: new Date(),
        changeFrequency: 'daily' as const,
        priority: pageNumber === 1 ? 0.6 : Math.max(0.3, 0.6 - (pageNumber * 0.1)),
      }
    }
  )

  return [...staticPages, ...blogPages, ...galleryPages, ...blogPaginationPages]
}

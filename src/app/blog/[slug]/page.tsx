import React from 'react'
import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { ArrowLeft, Calendar } from 'lucide-react'
import { notFound } from 'next/navigation'

export const revalidate = 60

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
  if (!post) return { title: 'Artigo não encontrado' }
  
  return {
    title: `${post.title} | G Compass`,
    description: post.excerpt,
    openGraph: {
      images: post.mainImage ? [urlForImage(post.mainImage)?.url()] : [],
    }
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
  
  if (!post) {
    notFound()
  }

  // AEO / SEO: JSON-LD Genérico
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.mainImage ? [urlForImage(post.mainImage)?.url()] : [],
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Growth Compass',
      url: 'https://gcompass.com.br'
    }
  }

  return (
    <article className="min-h-screen bg-[#050505] text-slate-200">
      {/* Script AEO Invisível */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto px-6 py-20 relative z-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white uppercase tracking-widest mb-10 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest mb-6">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-8">
            {post.title}
          </h1>
          
          {post.mainImage && (
            <div className="w-full aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
              <img 
                src={urlForImage(post.mainImage)?.url() || ''} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        <div className="prose prose-invert prose-lg prose-purple max-w-none 
                        prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
                        prose-p:text-slate-300 prose-p:leading-relaxed
                        prose-a:text-purple-400 prose-a:no-underline hover:prose-a:text-purple-300
                        prose-img:rounded-2xl">
          <PortableText value={post.body} />
        </div>
      </div>
    </article>
  )
}

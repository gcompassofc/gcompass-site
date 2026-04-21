import React from 'react'
import { client } from '../../../sanity/lib/client'
import { urlForImage } from '../../../sanity/lib/image'
import { PortableText } from '@portabletext/react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Share2, Clock, User } from 'lucide-react'
import { notFound } from 'next/navigation'
import { BottomCTA } from '../../../components/BottomCTA'

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

// Componentes customizados para o PortableText (Sanity)
const ptComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-12 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img
              src={urlForImage(value).url()}
              alt={value.alt || 'Imagem do artigo'}
              className="w-full h-auto object-cover"
            />
            {value.caption && (
              <div className="p-4 bg-black/50 backdrop-blur-sm border-t border-white/5 text-sm text-slate-400">
                {value.caption}
              </div>
            )}
          </div>
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-16 mb-8 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl font-bold text-white mt-12 mb-6 tracking-tight">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-purple-500 bg-purple-500/5 p-8 my-12 rounded-r-2xl italic text-slate-200 text-xl font-medium leading-relaxed">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="space-y-4 my-8 list-none">
        {React.Children.map(children, (child: any) => (
          <li className="flex gap-3 text-slate-300">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
            <span>{child.props.children}</span>
          </li>
        ))}
      </ul>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
      return (
        <a href={value.href} rel={rel} className="text-purple-400 hover:text-purple-300 font-bold underline decoration-purple-500/30 underline-offset-4 transition-colors">
          {children}
        </a>
      )
    },
    strong: ({ children }: any) => (
      <strong className="font-bold text-white">{children}</strong>
    ),
  },
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, { slug })
  
  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: post.mainImage ? [urlForImage(post.mainImage)?.url()] : [],
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'G Compass',
      url: 'https://gcompass.com.br'
    }
  }

  return (
    <div className="relative">
      {/* Glow Background Effects */}
      <div className="fixed top-[10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/10 blur-[120px] pointer-events-none" />

      <article className="relative z-10 pt-32 pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <div className="max-w-4xl mx-auto px-6">
          {/* Breadcrumb / Back Link */}
          <div className="flex justify-between items-center mb-12">
            <Link 
              href="/blog" 
              className="group inline-flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-white uppercase tracking-widest transition-all"
            >
              <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:border-purple-400 transition-all">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Voltar ao Blog
            </Link>
            
            <button className="text-slate-400 hover:text-white transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>

          {/* Article Header */}
          <header className="mb-16 text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full glass border-purple-500/20">
                <Calendar className="w-3 h-3" />
                {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                <Clock className="w-3 h-3" />
                5 min de leitura
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.05] mb-10">
              {post.title.split(' ').map((word: string, i: number) => (
                <span key={i} className={i % 4 === 3 ? 'text-gradient' : ''}>
                  {word}{' '}
                </span>
              ))}
            </h1>

            <div className="flex items-center justify-center gap-4 mb-12 text-slate-400">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center p-[1px]">
                <div className="w-full h-full rounded-full bg-[#050505] flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white uppercase tracking-wider">Time G Compass</p>
                <p className="text-xs text-slate-500 uppercase tracking-widest">Especialistas em Estratégia</p>
              </div>
            </div>
            
            {post.mainImage && (
              <div className="relative group mx-auto max-w-5xl">
                <div className="absolute -inset-4 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 rounded-[2.5rem] blur-2xl opacity-50"></div>
                <div className="relative w-full aspect-[21/9] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src={urlForImage(post.mainImage)?.url() || ''} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            )}
          </header>

          {/* Article Body */}
          <div className="relative">
            {/* Sidebar with some social/meta info (Optional/Floating) */}
            
            <div className="max-w-3xl mx-auto">
              <div className="glass rounded-[2.5rem] p-8 md:p-16 border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-transparent to-blue-500 opacity-30" />
                
                <div className="prose prose-invert prose-lg max-w-none 
                                prose-headings:font-black prose-headings:tracking-tighter prose-headings:text-white
                                prose-p:text-slate-300 prose-p:leading-relaxed prose-p:text-lg
                                prose-strong:text-white prose-strong:font-bold
                                prose-img:rounded-2xl prose-img:border prose-img:border-white/10
                                selection:bg-purple-500/30">
                  <PortableText value={post.body} components={ptComponents} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <BottomCTA />
        </div>
      </article>
    </div>
  )
}


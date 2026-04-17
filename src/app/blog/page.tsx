import React from 'react'
import Link from 'next/link'
import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import { ArrowRight, Calendar } from 'lucide-react'

// O Next.js revalidará essa página de tempos em tempos (SSG)
export const revalidate = 60; // 60 segundos

export default async function BlogIndex() {
  const posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage
  }`)

  return (
    <div className="min-h-screen bg-[#050505] text-slate-200">
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="mb-16 text-center md:text-left">
          <Link href="/" className="text-sm font-bold text-slate-400 hover:text-white uppercase tracking-widest mb-6 inline-flex items-center gap-2">
            Voltar para o Início
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            Insights & Estratégia
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            Artigos aprofundados sobre estruturação de negócios, M&A e crescimento estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block">
              <div className="bg-[#0f0f13] border border-white/5 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-purple-900/20 hover:-translate-y-2 hover:border-white/10 h-full flex flex-col">
                {post.mainImage ? (
                  <div className="h-48 w-full relative overflow-hidden">
                    <img 
                      src={urlForImage(post.mainImage)?.url() || ''} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="h-48 w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-slate-600 font-bold tracking-widest">G COMPASS</span>
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    Ler Artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <h3 className="text-2xl font-bold text-slate-500">Nenhum artigo publicado ainda.</h3>
              <p className="text-slate-600 mt-2">Acesse /studio para criar o seu primeiro post.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

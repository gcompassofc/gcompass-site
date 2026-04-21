import React from 'react'
import Link from 'next/link'
import { client } from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { BottomCTA } from '../../components/BottomCTA'

export const revalidate = 60;

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
    <div className="relative pt-32">
      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/15 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-purple-500/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-6">
            Conhecimento & Estratégia
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6">
            Insights para <span className="text-gradient">Escalar seu Negócio</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Artigos aprofundados sobre estruturação de negócios, M&A, IA aplicada e crescimento estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block">
              <div className="glass glass-hover rounded-[2rem] overflow-hidden h-full flex flex-col transition-all duration-500">
                {post.mainImage ? (
                  <div className="h-64 w-full relative overflow-hidden">
                    <img 
                      src={urlForImage(post.mainImage)?.url() || ''} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
                  </div>
                ) : (
                  <div className="h-64 w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-slate-600 font-bold tracking-widest">G COMPASS</span>
                  </div>
                )}
                
                <div className="p-8 flex flex-col flex-1 relative">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      <Clock className="w-3 h-3" />
                      5 min
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4 line-clamp-2 group-hover:text-purple-300 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-slate-400 text-sm mb-8 line-clamp-3 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-purple-400 transition-colors">
                    Ler Artigo Completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {posts.length === 0 && (
            <div className="col-span-full py-20 text-center glass rounded-3xl">
              <h3 className="text-2xl font-bold text-slate-500">Nenhum artigo publicado ainda.</h3>
              <p className="text-slate-600 mt-2">Acesse o painel administrativo para criar o seu primeiro post.</p>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div className="mt-20">
          <BottomCTA />
        </div>
      </div>
    </div>
  )
}


import fs from 'node:fs';
import path from 'node:path';

// Sites em pasta dentro de public/revisao/ (os que tem index.html).
// Lido em tempo de build: basta commitar a pasta que a rota passa a existir.
function pastasDeRevisao() {
  const dir = path.join(process.cwd(), 'public', 'revisao');
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && fs.existsSync(path.join(dir, e.name, 'index.html')))
    .map((e) => e.name);
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async rewrites() {
    return [
      // Sites em pasta: uma regra explicita por pasta existente, entao
      // /revisao/<slug> so e desviado quando a pasta realmente existe.
      // Precede o rewrite de arquivo unico (o primeiro que casa vence).
      ...pastasDeRevisao().map((slug) => ({
        source: `/revisao/${slug}`,
        destination: `/revisao/${slug}/index.html`,
      })),
      {
        // /revisao/nome -> serve public/revisao/nome.html sem expor a extensao.
        // O :slug nao casa com barras, entao /revisao (indice) segue no App Router.
        source: '/revisao/:slug',
        destination: '/revisao/:slug.html',
      },
    ];
  },
  async headers() {
    return [
      {
        // Material de revisao: nunca indexar.
        source: '/revisao/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive'
          }
        ]
      },
      {
        // Applica esses headers a todas as rotas do site
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          }
        ]
      }
    ];
  }
};

export default nextConfig;

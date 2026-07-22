import type { MetadataRoute } from "next";

const BASE_URL = "https://gcompass.com.br";

/**
 * Sitemap das páginas públicas de marketing.
 * Não inclui rotas internas (formulários, /studio, /opacronograma, etc.),
 * que são bloqueadas ou não indexáveis.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/bio", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/imobiliaria", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/elite", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/gratao", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

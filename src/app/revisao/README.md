# Como publicar HTMLs em /revisao

Qualquer arquivo `.html` colocado em `public/revisao/` vira uma página online.

```
public/revisao/proposta-saltur.html  ->  https://gcompass.com.br/revisao/proposta-saltur
```

## Como publicar

1. Salve o HTML em `public/revisao/`.
2. Commit + push para a `main`.
3. O deploy sobe automático e a página fica no ar.

## Regras do nome do arquivo

O nome do arquivo é a URL. Use **letras minúsculas, números e hífens**, sem
espaços nem acentos:

- ✅ `proposta-saltur.html` → `/revisao/proposta-saltur`
- ❌ `Proposta Saltur.html` (espaços viram `%20` na URL)

## Notas

- O HTML é servido exatamente como está — sem layout ou CSS do site em volta.
- Tudo aqui é bloqueado de buscadores (`robots.txt` + header `X-Robots-Tag`).
  São links privados, não páginas secretas: quem tiver a URL consegue abrir.
- O índice em `/revisao` lista os arquivos automaticamente, usando o `<title>`
  de cada um como nome. Vale a pena colocar um `<title>` descritivo.
- Imagens e outros anexos podem ficar em subpastas (ex.: `public/revisao/img/`)
  e ser referenciados como `/revisao/img/foto.jpg`.

## Sites em pasta (com CSS, JS e imagens próprios)

Quando o material não é um `.html` sozinho, use uma pasta com `index.html`:

```
public/revisao/nome-do-site/index.html  ->  https://gcompass.com.br/revisao/nome-do-site
```

Os arquivos de apoio (`img/`, `fonts/`, `.js`, `.css`) ficam dentro da própria
pasta e são referenciados com caminho relativo (`img/foto.jpg`, não
`/img/foto.jpg`).

**Obrigatório:** a URL publicada não tem barra final, então o navegador
resolveria os caminhos relativos contra `/revisao/`. Coloque um `<base>` no
`<head>`, antes de qualquer `<script>`, `<link>` ou `<img>`:

```html
<base href="/revisao/nome-do-site/">
```

Sem ele o site abre, mas sem CSS, imagens nem JS.

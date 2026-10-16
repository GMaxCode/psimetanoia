# Psicaanalise Metanoia

Landing page responsiva para a clínica de psicanálise Psicaanalise Metanoia, em Ji-Paraná, Rondônia. A página apresenta os atendimentos, informações de contato e localização, com o vídeo do cliente na abertura do site.

## Stack

- Next.js 15 com App Router
- TypeScript em modo strict
- Tailwind CSS 4
- Framer Motion e Lucide React
- Geist Sans + Geist Mono
- ESLint + Prettier

## Instalação

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

Para validar a versão de produção:

```bash
npm run lint
npm run build
npm run start
```

## Variáveis de ambiente

Copie o arquivo `.env.example` para `.env.local` e ajuste os valores antes de publicar:

```bash
cp .env.example .env.local
```

Variáveis principais:

- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_WHATSAPP_MESSAGE`
- `NEXT_PUBLIC_CLIENT_NAME`
- `NEXT_PUBLIC_CITY`
- `NEXT_PUBLIC_INSTAGRAM`
- `NEXT_PUBLIC_FACEBOOK`
- `NEXT_PUBLIC_LINKEDIN`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_ADDRESS`
- `NEXT_PUBLIC_HOURS`
- `NEXT_PUBLIC_SITE_URL`

## Como personalizar o conteúdo

- Textos, cards e sections da landing page: `components/landing-page.tsx`
- Cores e layout: `app/globals.css`
- Metadata e SEO: `app/layout.tsx`
- Sitemap e robôs da busca: `app/sitemap.ts` e `app/robots.ts`
- Vídeo do hero: `public/videos/video2.mp4`

## Deploy na Vercel

1. Crie um repositório e envie o projeto.
2. Conecte o repositório à Vercel.
3. Configure as variáveis do arquivo `.env.example` na aba de Environment Variables.
4. Defina `NEXT_PUBLIC_SITE_URL` com o domínio definitivo, por exemplo `https://www.seudominio.com.br`.
5. Faça o deploy e valide o comportamento do vídeo, WhatsApp e SEO.

## Como apontar o domínio

1. Compre ou tenha o domínio do cliente.
2. No painel da Vercel, clique em `Settings > Domains`.
3. Adicione o domínio e siga as instruções do provedor DNS.
4. Configure os registros A/CNAME conforme solicitado pela Vercel.
5. Aguarde a validação do certificado HTTPS.

O horário de atendimento ainda não foi informado; a landing page solicita a consulta pelo WhatsApp até que esse dado seja cadastrado.

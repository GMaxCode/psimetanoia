# Psicanálise Metanoia

Landing page responsiva da Psicanálise Metanoia, com foco em brasileiros que vivem no exterior e buscam atendimento online em português. A página aborda os desafios emocionais da imigração, explica como funciona o atendimento e oferece contato direto pelo WhatsApp.

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
- `NEXT_PUBLIC_INSTAGRAM`
- `NEXT_PUBLIC_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_THERAPIST_NAME` (opcional)
- `NEXT_PUBLIC_PROFESSIONAL_REGISTRATION` (opcional)

## Como personalizar o conteúdo

- Textos, cards, perguntas e seções da landing page: `components/landing-page.tsx`
- Cores e layout: `app/globals.css`
- Metadata e SEO: `app/layout.tsx`
- Sitemap e robôs da busca: `app/sitemap.ts` e `app/robots.ts`
- Imagem principal do hero: `public/images/expatriado-janela.jpg`
- Foto ilustrativa da seção profissional: `public/images/terapeuta.jpg`
- Ilustração do atendimento online: `public/images/rota-global.svg`

Antes de publicar, configure o nome e o registro profissional, se houver, e substitua `public/images/terapeuta.jpg` por uma foto profissional aprovada pela terapeuta. O e-mail e o WhatsApp também devem ser confirmados com a cliente. O CTA usa a mensagem de origem definida em `NEXT_PUBLIC_WHATSAPP_MESSAGE`.

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

Os horários são combinados para acomodar os diferentes fusos. Confirme as informações profissionais e os dados de contato antes de publicar o site.

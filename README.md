# TEMPO - LANDING PAGE BERITA
Landing page berita Tempo
dibangun dengan Next.js (App Router) + Tailwind CSS, memuat daftar berita terkini dari Tempo via API publik, serta formulir kontak dengan EmailJS.

## Fitur
1. Pagination dan Search Berita
   * Menyediakan daftar berita dari Tempo terbaru dengan navigasi menuju halaman berita sumber serta dilengkapi dengan fitur pencarian berdasarkan judul berita.
3. Contact Service by Email
   * Formulir kontak yang terintegrasi dengan EmailJS yang memungkinkan pengguna mengirim pesan dari website ke email.

## Stack
1. Next.js (App Router)
2. Tailwind CSS
3. Emailjs
4. react-toastify
5. shadcn ui
6. Berita Indo API - Tempo
   * Sumber: https://berita-indo-api.vercel.app/v1/tempo-news/
   * Repo: https://github.com/satyawikananda/berita-indo-api

## Running

```bash
# install dependencies
npm install
# atau
yarn
# atau
bun install

# running
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Konfigurasi Environment

```bash
# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```
## Deploy on Vercel
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

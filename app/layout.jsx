import { roboto } from './font';
import "./globals.css";

export const metadata = {
  title: "Tempo",
  description: "Berita Tempo",
  generator: 'Next.Js',
  applicationName: 'Tempo',
  referrer: 'origin-when-cross-origin',
  keywords: ['Tempo', 'Berita Tempo', 'Berita Terkini'],
  authors: [{ name: 'Jonathan' }, { name: ' Next.Js', url: 'https://nextjs.org' }],
  creator: 'Jonathan',
  publisher: 'Tempo',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        {children}
      </body>
    </html>
  );
}

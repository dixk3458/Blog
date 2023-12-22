import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: "Woongs' Blog",
    template: "Woong's %s",
  },
  description: '프론트엔드 개발자 지망생 정재웅의 블로그',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex flex-col max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow m-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

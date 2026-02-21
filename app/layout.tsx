import './globals.css';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { getLocale } from 'next-intl/server';

export const metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
};

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} className='h-full'>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.className} h-full min-w-[460px] bg-[#011627] flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
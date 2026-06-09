import './globals.css';
import type { ReactNode } from 'react';
import { Inter, Roboto } from 'next/font/google';
import { getLocale } from 'next-intl/server';

export const metadata = {
  title: 'Portfolio',
  description: 'Personal portfolio website',
};

const roboto = Roboto({ subsets: ['latin'] });

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();

  return (
    <html lang={locale} className='h-full'>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${roboto.className} h-full min-w-[460px] flex flex-col text-[14px]`}>
        {children}
      </body>
    </html>
  );
}
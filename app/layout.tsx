import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Playfair_Display, Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header';
import NextTopLoader from 'nextjs-toploader';
import React from 'react';

const playfairDisplay = Playfair_Display({
    variable: '--font-playfair-display',
    subsets: ['latin'],
});

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
    weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
    title: "Furqan's Book - A Journey of Stories",
    description:
        'Immerse yourself in captivating tales and adventures penned by an emerging author. Start reading now and dive into the world of creativity.',
    generator: 'Next.js',
    applicationName: 'Book Publishing Platform',
    keywords: [
        'Books',
        'Stories',
        'Creative Writing',
        'Publishing',
        'Novels',
        'Reading',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${playfairDisplay.variable} ${roboto.variable} antialiased`}
            >
                <NextTopLoader
                    color="#ffd1ba"
                    height={10}
                    showSpinner={false}
                />
                <Header />
                {children}
            </body>
        </html>
    );
}

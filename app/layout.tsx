import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header';

const playfairDisplay = Playfair_Display({
    variable: '--font-playfair-display',
    subsets: ['latin'],
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
            <body className={`${playfairDisplay.variable} antialiased`}>
                <Header />
                {children}
            </body>
        </html>
    );
}

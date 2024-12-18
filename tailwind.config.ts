import type { Config } from 'tailwindcss';
import tailwindcssAnimate from 'tailwindcss-animate';

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                black: 'var(--black)',
                lavender: 'var(--lavender)',
                peach: 'var(--peach)',
                subTexts: '#484848',
            },
            fontFamily: {
                playfairDisplay: 'var(--font-playfair-display)',
                roboto: 'var(--font-roboto)',
                relation: 'relationship of mélodrame',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
        },
    },
    plugins: [tailwindcssAnimate],
} satisfies Config;

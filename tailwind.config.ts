import type { Config } from 'tailwindcss';

export default {
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
            },
            fontFamily: {
                playfairDisplay: 'var(--font-playfair-display)',
            },
        },
    },
    plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {
    darkMode: ['class'],
    content: [
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/config/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            neutral: colors.neutral,
        },
        boxShadow: {
            inner: '0px 0px 8px 0px rgba(0, 0, 0, 0.2) inset',
        },
        extend: {
            colors: {
                foreground: {
                    DEFAULT: 'rgb(var(--foreground) / 1)',
                    muted: 'rgb(var(--foreground-muted) / 1)',
                },
                background: {
                    DEFAULT: 'rgb(var(--background) / 1)',
                    glass: {
                        DEFAULT: 'rgb(var(--background) / 0.5)', // Should be 0.2 for dark mode
                        accent: 'rgb(var(--background-glass-accent) / 0.1)',
                    },
                },
                border: 'rgb(var(--border) / 0.3)',
            },
            boxShadow: {
                'inner-none': '0px 0px 0px 0px rgba(0, 0, 0, 0) inset',
            },
            borderRadius: {
                canvas: '2rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.3s ease-out',
                'accordion-up': 'accordion-up 0.3s ease-out',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.glass-blur': {
                    'backdrop-filter': 'blur(25px)',
                },
                '.border-glass-inside': {
                    background:
                        'linear-gradient(rgba(38, 38, 38, 0.7), rgba(38, 38, 38, 0.7)) padding-box, linear-gradient(to bottom, rgba(218, 218, 218, 20), rgba(218, 218, 218, 80)) border-box',
                    border: '1px solid transparent',
                },
            });
        }),
        require('tailwindcss-animate'),
    ],
};

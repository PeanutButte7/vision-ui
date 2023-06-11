/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            neutral: colors.neutral,
            red: colors.red,
            rose: colors.rose,
            glass: {
                20: 'rgba(255, 255, 255, 0.2)',
                50: 'rgba(119, 116, 114, 0.5)',
                60: 'rgba(64, 64, 64, 0.6)',
                70: 'rgba(64, 64, 64, 0.7)',
            },
        },
        boxShadow: {
            inner: '0px 0px 8px 0px rgba(0, 0, 0, 0.2) inset',
        },
        extend: {
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
    ],
};

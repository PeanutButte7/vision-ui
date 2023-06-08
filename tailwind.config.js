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
            glass: {
                20: 'rgba(255, 255, 255, 0.2)',
                50: 'rgba(119, 116, 114, 0.5)',
                70: 'rgba(64, 64, 64, 0.7)',
            },
        },
        extend: {
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
                '.gradient-glass-inside': {
                    background:
                        'linear-gradient(180deg, rgba(218, 218, 218, 0.16) 0%, rgba(218, 218, 218, 0.64) 100%)',
                },
            });
        }),
    ],
};

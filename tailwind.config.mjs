/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#1173d4',
                'primary-dark': '#0d5a9e',
            },
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
            },
        },
    },
    plugins: [],
};

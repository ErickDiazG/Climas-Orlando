/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e8f4fd',
                    100: '#d1e9fb',
                    200: '#a3d3f7',
                    300: '#5fb5f0',
                    400: '#2196e3',
                    500: '#1173d4',
                    600: '#0d5eae',
                    700: '#0a4a8a',
                    800: '#083a6d',
                    900: '#062c54',
                    950: '#041d38',
                },
                accent: {
                    50: '#fff8eb',
                    100: '#feecc7',
                    200: '#fdd889',
                    300: '#fcc04c',
                    400: '#fba823',
                    500: '#f5870a',
                    600: '#d96305',
                    700: '#b44308',
                    800: '#92340d',
                    900: '#782b0e',
                },
                success: {
                    50: '#edfcf2',
                    100: '#d3f8df',
                    200: '#aaf0c4',
                    300: '#73e2a3',
                    400: '#3bcd7e',
                    500: '#17b362',
                    600: '#0b914e',
                    700: '#097440',
                    800: '#0a5c35',
                    900: '#094b2d',
                },
            },
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'slide-in-left': 'slideInLeft 0.7s ease-out forwards',
                'slide-in-right': 'slideInRight 0.7s ease-out forwards',
                'count-up': 'countUp 2s ease-out forwards',
                'float': 'float 6s ease-in-out infinite',
                'gradient-text': 'gradientShift 4s ease-in-out infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
            },
        },
    },
    plugins: [],
};

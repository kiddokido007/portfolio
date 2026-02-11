/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'blob': 'blob 7s infinite',
                'spin-slow': 'spin 12s linear infinite',
                'spin-reverse-slow': 'spin 15s linear infinite reverse',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                }
            },
            fontFamily: {
                heading: ['Space Grotesk', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

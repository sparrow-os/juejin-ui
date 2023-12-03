/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
        // https://tailwindcss.com/docs/container
        // To center containers by default, set the center option to true in the theme.container section of your config file:
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    plugins: [daisyui, require('@mui/material')]
}

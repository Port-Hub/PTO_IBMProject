/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ["./src/**/*.{html,ts,tsx}","index.html"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['halloween'],
  },
  plugins: [daisyui],
}


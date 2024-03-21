/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin';

export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [prelinePlugin],
}


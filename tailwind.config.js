/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
				texth1: ['Libre Baskerville'],
        texth5: ['Petit Formal Script'],
			}
    },
  },
  plugins: [],
}


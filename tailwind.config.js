/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8D80D1', // Soft Purple
        accent: '#FF6584', // Pink/Red for highlights
        background: '#F9F8FC', // Light Lavender/Gray
        secondary: '#606060', // Neutral Gray for text/icons
        border: '#E5E5E5', // Light Gray for dividers
        button: '#3D3D3D', // Dark Gray for buttons
      },
    },
  },
  plugins: [],
}


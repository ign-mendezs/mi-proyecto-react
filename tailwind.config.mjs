/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //background: "var(--background)",
        foreground: "var(--foreground)",
        customGreen: '#2c6e49',
        primary: "#2c6e49", // Color del navbar
        secondary: "#d68c45", // Color de botones
        accent: "#4c956c", // Otro color de botones
        background: "#fcefef", // Fondo de la página
        textPrimary: "#283618", // Color de texto con fondo de la página
        textSecondary: "#fcefef" // Color de texto con fondo navbar
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        asthetic: "hsl(48, 100%, 99%)",
        "btn-red": "#ff4334",
        overlay: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};

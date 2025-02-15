/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        "lt-primary-text-color": "#1E3E62",
        "lt-secondary-text-color": "#0B192C",
        "d-primary-text-color": "#FFFFFF",
        "d-secondary-text-color": "#A1AFC3",
      },
      colors: {
        "lt-primary-border-color": "#E2E8F0",
        "lt-primary-bg-color": "#F8FAFC",
        "lt-secondary-bg-color": "#FFFFFF",
        "lt-primary-action-color": "#FF6500",
        "d-primary-border-color": "#33425B",
        "d-primary-bg-color": "#0B192C",
        "d-secondary-bg-color": "#1E3E62",
        "d-primary-action-color": "#FF6500",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")], // ✅ Corrected
};

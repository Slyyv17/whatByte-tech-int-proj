import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pryClr: "#0000ff",
        btnBg: "#003566",
        mainClr: "#ffffff",
      },
      fontFamily: {
        pryFF: ["Inter, serif"]
      }
    },
  },
  plugins: [],
} satisfies Config;

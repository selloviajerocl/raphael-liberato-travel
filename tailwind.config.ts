import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        "ink-soft": "#1A1917",
        ivory: "#F4EFE6",
        "ivory-dim": "#C9C2B4",
        copper: "#A8632C",
        "copper-bright": "#C97D3E",
        sand: "#D8C9AE",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;

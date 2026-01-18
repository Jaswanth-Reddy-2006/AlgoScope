/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#00E676",
        secondary: "#1DE9B6",
        "primary-dash": "#00FF7F",
        "primary-glow": "rgba(0, 255, 127, 0.4)",
        "accent-neon": "#00FF66",
        "background-light": "#F8FAFC",
        "background-dark": "#0B0E11",
        "surface-dark": "#12141C",
        "border-dark": "#30363D",
        "panel-dark": "#161B22",
        "card-dark": "rgba(18, 28, 22, 0.6)",
        "accent-dark": "#0d1a12",
        "sidebar-dark": "#050706",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "display": ["Inter", "Public Sans", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      },
      borderRadius: {
        "DEFAULT": "1rem",
        "lg": "1.5rem",
        "xl": "2.5rem",
        "2xl": "3.5rem",
        "full": "9999px"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.html"
    ],
    theme: {
        extend: {
            colors: {
                bg: "hsl(var(--bg))",
                fg: "hsl(var(--fg))",
                brand: "hsl(var(--brand))",
                // Primary colors (teal)
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    light: "hsl(var(--primary-light))",
                    dark: "hsl(var(--primary-dark))",
                    muted: "hsl(var(--primary-muted))",
                },
                // Accent colors (coral)
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    light: "hsl(var(--accent-light))",
                    dark: "hsl(var(--accent-dark))",
                    muted: "hsl(var(--accent-muted))",
                },
                // Tertiary colors (indigo)
                tertiary: {
                    DEFAULT: "hsl(var(--tertiary))",
                    light: "hsl(var(--tertiary-light))",
                    dark: "hsl(var(--tertiary-dark))",
                },
                // Consistent text colors
                'text-primary': "hsl(var(--text-primary))",
                'text-secondary': "hsl(var(--text-secondary))",
                'text-muted': "hsl(var(--text-muted))",
                'text-inverted': "hsl(var(--text-inverted))",
                // Surface colors
                surface: {
                    DEFAULT: "hsl(var(--surface))",
                    raised: "hsl(var(--surface-raised))",
                    sunken: "hsl(var(--surface-sunken))",
                },
            }
        },
    },
    plugins: [],
}
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
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    light: "hsl(var(--accent-light))",
                    dark: "hsl(var(--accent-dark))",
                    muted: "hsl(var(--accent-muted))",
                },
                // Consistent text colors
                'text-primary': "hsl(var(--text-primary))",
                'text-secondary': "hsl(var(--text-secondary))",
                'text-muted': "hsl(var(--text-muted))",
                'text-inverted': "hsl(var(--text-inverted))",
            }
        },
    },
    plugins: [],
}
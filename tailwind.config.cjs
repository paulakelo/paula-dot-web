module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.html"
    ],
    theme: {
        extend: {
            colors: {
               /*
               bg: "hsl(var(--bg))",
                fg: "hsl(var(--fg))",
                brand: "hsl(var(--brand))",
                accent: "hsl(var(--accent))",
                */
                'map-water': 'hsl(var(--map-water))',
                'map-water-deep': 'hsl(var(--map-water-deep))',
                'map-forest': 'hsl(var(--map-forest))',
                'map-moss': 'hsl(var(--map-moss))',
                'map-fern': 'hsl(var(--map-fern))',
                'map-sand': 'hsl(var(--map-sand))',
                'map-stone': 'hsl(var(--map-stone))',
                'map-paper': 'hsl(var(--map-paper))',
                'map-ink': 'hsl(var(--map-ink))',
            },
            boxShadow: {
                'card': '0 4px 8px rgba(0, 0, 0, 0.1)'
            },
            borderRadius: {
                'xl': '0.75rem'
            }
        },
    },
    plugins: [],
}
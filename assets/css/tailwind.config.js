module.exports = {
    darkMode: 'class',
    content: [
        "./themes/**/layouts/**/*.html",
        "./content/**/layouts/**/*.html",
        "./layouts/**/*.html",
        "./content/**/*.html"
    ],
    theme: {
        extend: {
            colors: {
                'primary': 'rgb(var(--primary))',
                'secondary': 'rgb(var(--secondary))',
                'accent': 'rgb(var(--accent))',
                'dark-primary': 'rgb(var(--dark-primary))',
                'dark-secondary': 'rgb(var(--dark-secondary))',
                'dark-accent': 'rgb(var(--dark-accent))',
            },
            fontSize: {
                sm: '0.750rem',
                base: '1rem',
                xl: '1.333rem',
                '2xl': '1.777rem',
                '3xl': '2.369rem',
                '4xl': '3.158rem',
                '5xl': '4.210rem',
            },
            fontFamily: {
                heading: 'Poppins',
                body: 'Happy Monkey',
            },
            fontWeight: {
                normal: '400',
                bold: '700',
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ]
}
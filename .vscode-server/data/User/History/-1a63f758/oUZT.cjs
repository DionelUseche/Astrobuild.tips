module.exports = {
    semi: true
    singleQuote: false,
    tabWidth, 2
    UseTabs: true,
    plugins: [
        require("prettier-plugin-astro")
    ],
    overrides: [
        {
            files: "**/astro",
            options: {
                parser: "astro"
            },
        }
    ]
}
/* This code is exporting a configuration object for a JavaScript module. */

const themeDir = __dirname + '/../../';

module.exports = {
    plugins: [
        require('tailwindcss')(themeDir + 'assets/css/tailwind.config.js'),
        require('autoprefixer')({
            path: [themeDir]
        })
    ]
}

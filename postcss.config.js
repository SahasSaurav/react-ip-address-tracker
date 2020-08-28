const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        tailwindcss('./tailwind.js'),
        require('autoprefixer'),
        // require("cssnano")({ preset: "default" }),
        // require('@fullhuman/postcss-purgecss')({
        //     content:[
        //         './src/**/*.js',
        //         './public/index.html',
        //     ],
        //     defaultExtractor:content=>content.match(/[A-Za-z0-9-_:]+/g) || []
        // }) 
    ],
};
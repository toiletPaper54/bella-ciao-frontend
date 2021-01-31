const tailwindcss = require('tailwindcss')
module.exports ={
    plugins: [
        require('tailwindcss'),
        require('postcss-nested'),
        require('autoprefixer')
    ]
}
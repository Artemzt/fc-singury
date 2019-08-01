if(process.env.NODE_ENV) {
    module.exports = {
        plugins: [
            require('autoprefixer'),
            require('cssnano')
        ]
    }
}
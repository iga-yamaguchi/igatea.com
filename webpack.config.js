module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: __dirname + '/bin/',
        filename: '[name].js'
    },
    devtool: 'inline-source-map',
};
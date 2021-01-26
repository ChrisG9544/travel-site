const path = require('path')

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

module.exports = {
    entry: './app/assets/scripts/App.js',
    output:{
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    // WebPack-Dev_server install reqments 
    devServer: {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true,
        port: 3000,
        // this allow devices on/same Netwrk access webpack-dev-server
        host: '0.0.0.0'
    },

    // comments
    mode: 'development',
    // watch: true, not needed use webpack-dev-server
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false', 
                {loader: 'postcss-loader', 
                options: {postcssOptions: 
                {plugins: postCSSPlugins}}}              
                ]
            }
        ]   
    } 
}  
//entry -> output 

const path = require('path');

module.exports = {
    entry : './src/app.js',
    output : {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude: /node_modules/
        },{
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool : 'cheap-module-eval-source-map', //devtool can help find us where the error is exactly
    
    devServer : {
        contentBase : path.join(__dirname,'public'),
        historyApiFallback:true // tell server that we are gonna handle routing via our client side code and it should return this page for all 404 routes 
    }
};



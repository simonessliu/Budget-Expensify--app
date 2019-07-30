//entry -> output 

const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) =>{
    const isProduction = env === 'production';

    return {
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
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    {
                        loader:'sass-loader',
                        options:{
                            sourceMap:true
                        }
                    }
                   
                ]
            }]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename:'styles.css'
            })
        ],
        devtool : isProduction ? 'source-map':'inline-source-map', //devtool can help find us where the error is exactly
        
        devServer : {
            contentBase : path.join(__dirname,'public'),
            historyApiFallback:true // tell server that we are gonna handle routing via our client side code and it should return this page for all 404 routes 
        }
    }
}





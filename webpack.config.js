//entry -> output 

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// heroku set this environment to 'production' 
process.env.NODE_ENV=process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test') {
    // we want to set process.env.firebase_api = .... 
    // basically we want to put everything in env.xxx file into here
    // node dotenv package helps us to put all info in .env.xxx file into here without manually typing it
    require('dotenv').config({ path:'.env.test' });
}else if (process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path:'.env.development' });
}

module.exports = (env) =>{
    const isProduction = env === 'production';

    return {
        entry : ['babel-polyfill','./src/app.js'],
        output : {
            path: path.join(__dirname,'public','dist'),
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
            }),

            new webpack.DefinePlugin({
                'process.env.FIREBASE_API_KEY':JSON.stringify(process.env.FIREBASE_API_KEY),
                'process.env.FIREBASE_AUTH_DOMAIN':JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
                'process.env.FIREBASE_DATABASE_URL':JSON.stringify(process.env.FIREBASE_DATABASE_URL),
                'process.env.FIREBASE_PROJECT_ID':JSON.stringify(process.env.FIREBASE_PROJECT_ID),
                'process.env.FIREBASE_STORAGE_BUCKET':JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
                'process.env.FIREBASE_MESSAGING_SENDER_ID':JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
                'process.env.FIREBASE_APP_ID':JSON.stringify(process.env.FIREBASE_APP_ID),
            })
        ],
        devtool : isProduction ? 'source-map':'inline-source-map', //devtool can help find us where the error is exactly
        
        devServer : {
            contentBase : path.join(__dirname,'public'),
            historyApiFallback:true, // tell server that we are gonna handle routing via our client side code and it should return this page for all 404 routes
            publicPath:'/dist/' 
        }
    }
}





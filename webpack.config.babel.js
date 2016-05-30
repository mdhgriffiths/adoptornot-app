/* eslint-disable no-console */
import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import HtmlWebpackPlugin from 'html-webpack-plugin';
const env = process.env.NODE_ENV;
const dev = env === 'development';
const prod = env === 'production';
const srcDir = path.resolve(__dirname, 'src');
const outDir = path.join(__dirname, 'dist');
const ext = prod ? '.min.js' : '.js';
const host = 'localhost';
const port = '9000';
const url = `http://${host}:${port}/`;
const config = {
    entry: {
        app: [
            dev ? 'react-hot-loader/patch' : false,
            dev ? `webpack-dev-server/client?${url}` : false,
            dev ? 'webpack/hot/only-dev-server' : false,
            path.resolve(srcDir, 'app.js')
        ].filter(v => !!v)
    },
    output: {
        path: outDir,
        filename: `js/[name]${ext}`,
        sourceMapFilename: 'map/[file].map',
        chunkFilename: `js/[name].[chunkhash:6]${ext}`,
        publicPath: dev ? url : ''
    },
    resolve: {
        root: srcDir,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.pug$/, exclude: /node_modules/, loader: 'pug-html-loader' },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=images/[name].[ext]'
            }, {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: env === 'development',
            'process.env': { NODE_ENV: JSON.stringify(env) }
        }),
        dev ? new webpack.HotModuleReplacementPlugin() : false,
        prod ? new webpack.NoErrorsPlugin() : false,
        prod ? new webpack.optimize.DedupePlugin() : false,
        prod ? new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                screw_ie8: true,
                warnings: false
            }
        }) : false,
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.js', (module) => (
            module.resource && module.resource.indexOf(srcDir) === -1
        )),
        new HtmlWebpackPlugin({
            template: 'src/views/index.pug',
            favicon: 'src/public/favicon.ico',
            title: 'Bong Sell Trade',
            description: 'Bong Sell Trade',
            trackingId: 'abc123'
        })
    ].filter(v => !!v),
    devtool: 'source-map',
    debug: dev,
    devServer: {
        contentBase: srcDir,
        noInfo: false,
        inline: true,
        hot: true
    }
};

if (env === 'development') {
    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        historyApiFallback: true,
        contentBase: srcDir,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000
        },
        stats: 'minimal',
        progress: true,
        inline: true,
        debug: true,
        hot: true
    }).listen(port, host, (err) => {
        if (err) console.log(err);
    });
    console.log('-------------------------');
    console.log(`Local web server runs at http://${host}:${port}`);
    console.log('-------------------------');
}

export default config;
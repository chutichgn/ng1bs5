const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'ng1bs5.js',
        library: {
            name: 'ng1bs5',
            type: 'umd',
            export: 'default'
        },
        globalObject: 'this'
    },
    module: {
        rules: [
            // TypeScript loader - NEW
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['babel-loader', {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true  // Faster builds, type-checking done separately
                    }
                }]  // ts-loader → babel-loader
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    externals: {
        angular: {
            commonjs: 'angular',
            commonjs2: 'angular',
            amd: 'angular',
            root: 'angular'
        }
    },
    resolve: {
        extensions: ['.ts', '.js', '.html'],  // Added .ts first
    },
    devtool: 'source-map'
};
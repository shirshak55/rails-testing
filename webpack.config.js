require("dotenv").config();

const path = require("path");
const WebpackNotifierPlugin = require("webpack-notifier");
const ManifestPlugin = require("webpack-manifest-plugin");

module.exports = (env, argv) => {
    const hmr = process.argv.includes("--hot");
    const production = argv.mode === "production";
    const devServerUrl = "http://localhost:8123";
    const assetFolder = production ? "/dist/" : "/build/";
    const assetPath = hmr ? `${devServerUrl}${assetFolder}` : assetFolder;

    return {
        mode: production ? "production" : "development",
        entry: {
            app: ["./app/js/main.tsx"]
        },
        output: {
            path: path.resolve(__dirname, "public" + assetFolder),
            filename: production ? "js/[name].[chunkhash].js" : "js/[name].js",
            publicPath: assetPath
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: "babel-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.(ts|tsx)?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                name: path => {
                                    if (!/node_modules/.test(path)) {
                                        return "images/[name].[ext]?[hash]";
                                    }

                                    return (
                                        `images/vendor-${name}/` +
                                        path
                                            .replace(/\\/g, "/")
                                            .replace(
                                                /((.*(node_modules))|images|image|img|assets)\//g,
                                                ""
                                            ) +
                                        "?[hash]"
                                    );
                                },
                                limit: 4096
                            }
                        }
                    ]
                },
                {
                    test: /\.(woff2?|ttf|eot|svg|otf)$/,
                    loader: "url-loader",
                    options: {
                        name: path => {
                            if (!/node_modules/.test(path)) {
                                return "fonts/[name].[ext]?[hash]";
                            }

                            return `fonts/vendor-${name}/[name].[ext]?[hash]`;
                        },
                        limit: 4096
                    }
                },
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".tsx", ".ts"],
            alias: {
                "@": path.resolve(__dirname, "app", "js"),
                "@images": path.resolve(__dirname, "app/js/images"),
            }
        },
        plugins: [
            new WebpackNotifierPlugin(),
            new ManifestPlugin({
                fileName: `manifest.json`,
                publicPath: assetPath,
                writeToFileEmit: true
            })
        ],
        optimization: {
            runtimeChunk: "single",
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        test: /[\\\/]node_modules[\\\/]/,
                        name: "vendors",
                        chunks: "all"
                    }
                }
            }
        },
        devServer: {
            contentBase: path.resolve(__dirname, "public"),
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000,
                ignored: /node_modules/
            },
            historyApiFallback: true,
            compress: true,
            noInfo: true,
            quiet: false,
            port: 8123
        }
    };
};
const mix = require('laravel-mix');
// let ImageminPlugin = require('imagemin-webpack-plugin').default;
// require('@ayctor/laravel-mix-svg-sprite');
// const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
require('laravel-mix-svg-sprite');
// const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */


mix

    .scripts([
        'resources/assets/js/jquery-3.4.1.min.js',
        'resources/assets/vendor/js/*.js',
        'resources/assets/js/app.js',
        'resources/assets/js/main.js'
    ], 'public/assets/js/plugins.js')
    // .js('resources/assets/js/main.js', "public/assets/js/main.js")
    // .styles([
    //     "public/assets/fonts/fonts.css",
    //     "public/assets/plugin/animate/animate.css",
    //     "public/assets/plugin/slinky/css/normalize.css",
    //     "public/assets/plugin/slinky/css/slinky.min.css",
    //     "public/assets/plugin/slinky/css/demo.css",
    //     "public/assets/plugin/slinky/css/devices.min.css",
    //     "public/assets/plugin/woocommerce/flexslider.css",
    //     "public/assets/plugin/OwlCarousel2-2.3.4/owl.carousel.min.css",
    //     "public/assets/plugin/OwlCarousel2-2.3.4/owl.theme.default.min.css",
    //     "public/assets/plugin/fancybox-master/jquery.fancybox.css",
    //     "public/assets/plugin/aos-master/aos.css",
    //     // "public/assets/plugin/font-awesome-4.7.0/css/font-awesome.css",
    // ], 'public/assets/mix/plugins.css')
    .sass('resources/assets/scss/app.scss', 'public/assets/css/vendor.css', {
    sourceMap: true,
})
    .styles('resources/assets/scss/vendor/styles/*.css', 'public/assets/css/plugins.css')
    // .webpackConfig({
    //     plugins: [
    //         new ImageminPlugin({
    //             pngquant: {
    //                 quality: '95-100',
    //             },
    //             test: /\.(jpe?g|png|gif|svg)$/i,
    //         }),
    //     ],
    // })
    .copy('resources/assets/images', 'public/assets/images', false)
    // .svgSprite({
    //     src: 'resources/assets/icons/*.svg',
    //     filename: 'public/assets/sprite.svg',
    //     prefix: ''
    // })
    // .copyDirectory('resources/assets/images', 'public/assets/images')
    //     .webpackConfig({
    //     plugins: [
    //         new CopyWebpackPlugin([{
    //             from: 'resources/assets/images',
    //             to: 'img', // Laravel mix will place this in 'public/img'
    //         }]),
    //         new ImageminPlugin({
    //             test: /\.(jpe?g|png|gif|svg)$/i,
    //             plugins: [
    //                 imageminMozjpeg({
    //                     quality: 80,
    //                 })
    //             ]
    //         })
    //     ]
    // })
    // .svgSprite(
    //     'resources/assets/icons',
    //     'public/assets/icons/sprite.svg'
    // )
    // .webpackConfig({
    //     plugins: [
    //         new SVGSpritemapPlugin({
    //             src:'assets/svg/icons/*.svg',
    //             filename: '/svg/icons.svg',
    //             prefix: '',
    //             svg4everybody: true,
    //             svgo: {
    //                 removeTitle: true,
    //                 removeStyleElement: true,
    //                 cleanupNumericValue: true,
    //             },
    //             output: { chunk: { keep: true } },
    //         })
    //     ]
    // })
    .browserSync({
        proxy: 'http://web-pack/'
    })
    .options({
        processCssUrls: false,
        // autoprefixer: {
        //     options: {
        //         grid: true,
        //     }
        // }
    })
    .sourceMaps()
    .webpackConfig({devtool: 'source-map'})

//
// Mix.listen('configReady', (webpackConfig) => {
//
//     // Add separate svg loader
//     webpackConfig.module.rules.push({
//         test: /\.(svg)$/,
//         include: /assets\/svg/,
//         loaders: [
//             {
//                 loader: 'file-loader',
//                 options: {
//                     name: 'svg/[name].[ext]?[hash]',
//                     publicPath: Config.resourceRoot
//                 }
//             },
//
//             {
//                 loader: 'img-loader',
//                 options: Config.imgLoaderOptions
//             }
//         ]
//     });
//
//     // Exclude local 'svg' folder from font loader
//     let fontLoaderConfig = webpackConfig.module.rules.find(rule => String(rule.test) === String(/\.(woff2?|ttf|eot|svg|otf)$/))
//     fontLoaderConfig.exclude = /(assets\/svg)/;
//
// });

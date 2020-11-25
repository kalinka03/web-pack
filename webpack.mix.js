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
        'resources/assets/vendor/js/*.js', 'resources/assets/js/main.js',
        'resources/assets/js/app.js',
    ], 'public/assets/js/plugins.js')

    .sass('resources/assets/scss/app.scss', 'public/assets/css/vendor.css', {
    sourceMap: true,
})
    .styles('resources/assets/scss/vendor/styles/*.css', 'public/assets/css/plugins.css')
    .copy('resources/assets/images', 'public/assets/images', false)
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

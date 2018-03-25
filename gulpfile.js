const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

// const svgSprite = require('gulp-svg-sprite');



const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug',
        dest: 'build/assets/'
    },
    styles: {
        src: 'src/styles/**/*scss',
        dest: 'build/assets/styles/'
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    },
    fonts: {
        src: "src/fonts/**/*.*",
        dest: "build/assets/fonts/"
    },
}

// gulp postcss
gulp.task('css', function () {
    var plugins = [
        autoprefixer({browsers: ['last 2 version']}),
        cssnano()
    ];
    return gulp.src('./build/assets/styles/app.min.css')
        .pipe(postcss(plugins))
        .pipe(rename('appOut.css'))
        .pipe(gulp.dest('./build/assets/styles/'));
});

// просто переносим картинка 
function images(){
    return gulp.src(paths.images.src)
        .pipe(gulp.dest(paths.images.dest));
}
function fonts() {
    return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));
}


// слежка 
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.templates.src, templates);
    gulp.watch(paths.images.src, images);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.fonts.src, fonts);

}

// следит за build и релоадим браузер 
function server(){
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/*.*', browserSync.reload);
}

//sprite
// function svg() {
//     return gulp.src('./src/images/**/*.svg')
//         .pipe(svgmin({
//             js2svg: {
//                 pretty: true
//             }
//         }))        
//         .pipe(cheerio({
//             run: function ($) {
//                 $('[fill]').removeAttr('fill');
//                 $('[stroke]').removeAttr('stroke');
//                 $('[style]').removeAttr('style');
//             }
//         }))
//         .pipe(replace('&gt;', '>'))
//         .pipe(svgSprite({
//             mode: {
//                 symbol: {
//                     sprite: "sprite.svg",
//                     example: {
//                         dest: 'spriteSvgDemo.html'
//                     }
//                 }
//             }
//         }))
//         .pipe(gulp.dest(paths.images.dest));
// }


// очистка 
function clean() {
    return del(paths.root);
}

// pug 
function templates() {
    return gulp.src(paths.templates.pages)
        .pipe(pug({pretty: true }))
        .pipe(gulp.dest(paths.root));
}

//scss 
function styles() {
    return gulp.src('./src/styles/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.styles.dest))
}

// webpack
function scripts() {
    return gulp.src('src/scripts/app.js')
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

exports.templates = templates;
exports.styles = styles;
exports.clean = clean;
exports.images = images;
// exports.svg = svg;
exports.fonts = fonts;


gulp.task('default', gulp.series(
    clean,
    gulp.parallel(styles, templates, images, scripts, fonts),
    gulp.parallel(watch, server)
));
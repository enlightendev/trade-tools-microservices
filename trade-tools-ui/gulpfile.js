const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sourcemaps = require('gulp-sourcemaps');
const htmlreplace = require('gulp-html-replace');
const replace = require('gulp-replace');

/**
 * http://digitaldrummerj.me/gulp-inject/
 *
 */

var paths = {

    //libraries that will be copied to lib folder using javascript_dest
    node_libs: [
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/angular2/bundles/http.dev.js',
        'node_modules/immutable/dist/immutable.js'
    ],

    //paths to update in index.html when creating a dist
    node_libs_dest: [
        'lib/angular2-polyfills.js',
        'lib/system.src.js',
        'lib/Rx.js',
        'lib/angular2.dev.js',
        'lib/router.dev.js',
        'lib/http.dev.js',
        'lib/immutable.js'
    ],

    bootstrap_libs: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ],

    bootstrap_libs_dest: [
        'lib/jquery.min.js',
        'lib/bootstrap.min.js'
    ],

    bootstrap_css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css'
    ],

    bootstrap_css_dest: [
        'css/bootstrap.min.css',
        'css/font-awesome.min.css'
    ],

    font_awesome_dependencies: [

    ],

    css: [
        './www/**/*.css',
        '!./www/css/ionic.app*.css',
        '!./www/lib/**'
    ],
    assets: [
        'app/**/*',
        'css/**/*',
        'assets/**/*',
        'index.html',
        'styles.css',
        '!app/**/*.ts'
    ]
};

// clean the contents of the distribution directory
gulp.task('clean', function () {
    return del('dist/**/*');
});

/**
 *
 */
gulp.task('copy:libs', function() {
    return gulp.src(paths.node_libs.concat(paths.bootstrap_libs))
        .pipe(gulp.dest('dist/lib'))
});

/**
 *
 */
gulp.task('copy:css', function() {
    return gulp.src(paths.bootstrap_css)
        .pipe(gulp.dest('dist/css'))
});

/**
 * copy static assets - i.e. non TypeScript compiled source
 */
gulp.task('copy:assets', function() {
    return gulp.src(paths.assets, { base : './' })
        .pipe(gulp.dest('dist'))
});

gulp.task('copy:fontawesome', function() {
    return gulp.src('node_modules/font-awesome/fonts/**.*')
        .pipe(gulp.dest('dist/fonts'));
});

/**
 * move everything from dist folder to web server
 */
gulp.task('deploy', function() {
    return gulp.src('dist/**/*')
        .pipe(gulp.dest('../trade-tools-web/src/main/resources/static'));
});

/**
 *
 */
gulp.task('assets', [
    'copy:assets',
    'copy:libs',
    'copy:css',
    'copy:fontawesome'
], function() {

});


// ---- update index.html in dist folder to reference new lib, css, etc paths.

/**
 * replace
 */
gulp.task('htmlreplace', function() {
    return gulp.src('dist/index.html')
        .pipe(htmlreplace({
            'bootstrap_css': paths.bootstrap_css_dest,
            'node_libs': paths.node_libs_dest,
            'bootstrap_libs': paths.bootstrap_libs_dest
        }))
        .pipe(gulp.dest('dist/'));
});

/**
 *
 */
gulp.task('jsreplace', [], function(){
    return gulp.src(['dist/index.html'])
        .pipe(replace('immutable\': \'node_modules/immutable/dist/immutable.js\'', 'immutable\': \'lib/immutable.js\''))
        .pipe(gulp.dest('dist/'));
});

// -------- BUILD TASKS -------
/**
 *
 */
gulp.task('compile', ['clean'], function () {
     gulp
         //.src('app/**/*.ts')
        .src(tscConfig.filesGlob)//get from tsconfig.
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/app'));
});

/**
 *
 */
gulp.task('build',
    [
        'compile',
        'htmlreplace',
        'jsreplace'
    ]);

gulp.task('default', ['build']);
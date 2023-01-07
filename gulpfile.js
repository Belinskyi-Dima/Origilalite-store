const {src, dest, watch, parallel, series} = require('gulp');

const scss         = require('gulp-sass')(require('sass'));
const concat       = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const ghPages 		 = require('gulp-gh-pages');
// const del          = require('del');



function browsersync() {
	browserSync.init({
		server: {
			baseDir: 'app/'
		}
	})
}

// function cleanDist() {
// 	return del('dist')
// }

function images() {
	return src('app/img/**/*')
	  .pipe(imagemin(
		 [
			imagemin.gifsicle({ interlaced: true }),
			imagemin.mozjpeg({ quality: 75, progressive: true }),
			imagemin.optipng({ optimizationLevel: 5 }),
			imagemin.svgo({
			  plugins: [
				 { removeViewBox: true },
				 { cleanupIDs: false }
			  ]
			})
		 ]
	  ))
	  .pipe(dest('dist/images'))
 }

function scripts() {
	return src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/slick-carousel/slick/slick.js',
		// 'node_modules/mixitup/dist/mixitup.js',
		// 'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
		'app/js/main.js'
	])
	.pipe(concat('main.min.js'))
	.pipe(uglify())
	.pipe(dest('app/js'))
	.pipe(browserSync.stream())

}
function styles() {
	return src('app/sass/style.scss')
	.pipe(scss({outputStyle: 'compressed'}))
	.pipe(concat('style.min.css'))
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 10 version'],
		grid: true
	}))
	.pipe(dest('app/css'))
	.pipe(browserSync.stream())
}

function build() {
	return src([
	  'app/css/style.min.css',
	  'app/fonts/**/*',
	  'app/js/main.min.js',
	  'app/*.html'
	], {base: 'app'})
	  .pipe(dest('dist'))
 }

function watching() {
	watch(['app/sass/**/*.scss'], styles);
	watch(['app/js/**/*.js','!app/js/main.min.js'], scripts);

	watch(['app/*.html']).on('change', browserSync.reload)
}
 function deploy () {
	return gulp.src('./dist/**/*')
	  .pipe(ghPages());
 };
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
// exports.cleanDist = cleanDist;

exports.build = series(images,   build);
exports.default = parallel(styles, scripts, browsersync, watching);
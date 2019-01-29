import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import browserSync from 'browser-sync';

const server = browserSync.create();
const PRODUCTION = yargs.argv.prod;

export const serve = (done) => {
	server.init({
		proxy: "http://localhost"
	});
	done();
}

export const reload = (done) => {
	server.reload();
	done();
}

// export const hello = (done) => {
//     console.log(PRODUCTION);
//     done();
// }

const paths = {
	styles: {
		src: ['src/assets/scss/bundle.scss','src/assets/scss/admin.scss'],
		dest: 'dist/assets/css'
	}
}



// gulp stream
export const styles = (done) => {
	return gulp.src(paths.styles.src)
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(sass().on('error',sass.logError))
		.pipe(gulpif(PRODUCTION, cleanCss({compatibility:'ie8'})))
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(server.stream());
}

export const watch = () => {
	gulp.watch('src/assets/scss/**/*.scss', styles);
	// gulp.watch('src/assets/js/**/*.js', gulp.series(scripts, reload));
	// gulp.watch('**/*.php', reload);
	// gulp.watch(paths.images.src, gulp.series(images, reload));
	// gulp.watch(paths.other.src, gulp.series(copy, reload));
} 

export const dev = gulp.series( styles, serve, watch);
// export default hello;
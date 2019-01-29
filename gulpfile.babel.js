import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';

const PRODUCTION = yargs.argv.prod;

// export const hello = (done) => {
//     console.log(PRODUCTION);
//     done();
// }

const paths = {
	styles: {
		src: ['src/assets/scss/bundle.scss'],
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
		.pipe(gulp.dest(paths.styles.dest));
}

// export default hello;
import gulp from 'gulp';
import mjml from 'gulp-mjml';

const paths = {
  dist: 'dist/',
  src: 'src/',
};

// const defaultTask = done => {
//   console.log('foobar');
//   done();
// };

// function build () {
//   return gulp.src(paths.src + '*.mjml')
//     .pipe(mjml())
//     .pipe(gulp.dest(paths.dist))
// }

const build = () => {
  return gulp.src(paths.src + '*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest(paths.dist))
};


// gulp.task('default', build);

export default build;

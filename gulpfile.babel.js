import gulp from 'gulp';
import del from 'del';
import browserSync from 'browser-sync';
import mjml from 'gulp-mjml';

const paths = {
  dist: 'dist/',
  src: 'src/',
};

const server = browserSync.create();

function reload(done) {
  server.reload();
  done();
}

function serve(done) {
  server.init({
    server: { baseDir: paths.dist },
    ui: false,
    open: false,
    reloadOnRestart: true,
    notify: false
  });
  done();
}

const clean = () => del([paths.dist]);

const build = () => {
  return gulp.src(paths.src + '*.mjml')
    .pipe(mjml())
    .pipe(gulp.dest(paths.dist))
};

const watch = () => gulp.watch(paths.src, gulp.series(build, reload));

const dev = gulp.series(clean, build, serve, watch);

export default dev;

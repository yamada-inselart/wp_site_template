const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const babel = require("gulp-babel");
const browserSync = require('browser-sync');

// コンパイル対象のファイルを指定
const srcDir = "src/";
const src = {
  sass: srcDir + "sass/style.scss",
  js: srcDir + "js/*.js",
};

// 出力先を指定
const destDir = "assets/";
const dest = {
  css: destDir + "css",
  js: destDir + "js",
};

// SASS
gulp.task("sass", () => {
  return gulp
    .src(src.sass)
		.pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(
      autoprefixer()
    )
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest.css));
});
// Babel
gulp.task("babel", () => {
  return gulp
    .src(src.js)
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest(dest.js));
});

// ブラウザの自動リロード
gulp.task("server", () => {
  browserSync({
    files: ["./**"],
    proxy: 'themetemplate.net',
    open: 'external'
  });
});


//タスクの監視
gulp.task("watch", () => {
  gulp.watch("src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch(src.js, gulp.series("babel"));
});


gulp.task("default",gulp.series(gulp.parallel(['server', 'watch'])) );
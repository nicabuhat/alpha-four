function defaultTask(cb) {
    console.log("Gulp is working!");
    cb();
  }
  exports.default = defaultTask;

const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
function css() {
  return src("./src/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/css/"));
}
exports.css = css;

const concat = require("gulp-concat");
function js() {
  return src("./src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(dest("./dist/js/"));
}
exports.js = js;

const pug = require("gulp-pug");
function html() {
  return src("./src/*.pug")
    .pipe(pug({pretty: true,}))
    .pipe(dest("./dist"));
}
exports.html = html;

const gulp = require('gulp');
const image = require('gulp-image');
 
gulp.task('image', function () {
  gulp.src('./src/images/*.*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'));
});
 
exports.image = image;


exports.watch = function () {
    watch("./src/css/**/*.scss", css);
    watch("./src/css/*/*.scss", css);
    watch("./src/**/*.pug", html);
    watch("./src/js/*.js", js);
    watch("./src/images/*.*", js);
  };
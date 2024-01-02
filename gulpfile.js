const gulp = require("gulp");

//gulp plugins
const fileInclude = require("gulp-file-include");

const html = () => {
  return gulp
    .src("./src/html/*.html")
    .pipe(fileInclude())
    .pipe(gulp.dest("./public"));
};

exports.html = html;

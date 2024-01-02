const gulp = require("gulp");

// config
const path = require("../config/path.js");

//gulp plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const size = require("gulp-size"); // TODO update version

const html = () => {
  return gulp
    .src(path.html.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "HTML",
          message: error.message,
        })),
      })
    )
    .pipe(fileInclude())
    .pipe(size())
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      })
    )
    .pipe(size())
    .pipe(gulp.dest(path.html.dest));
};

module.exports = html;

const gulp = require("gulp");

// config
const path = require("../config/path.js");
const app = require("../config/app.js");

//gulp plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const cssImport = require("gulp-cssimport");

const css = () => {
  return gulp
    .src(path.css.src, { sourcemaps: true })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: "CSS",
          message: error.message,
        })),
      })
    )
    .pipe(concat("main.css"))
    .pipe(cssImport())
    .pipe(gulp.dest(path.css.dest, { sourcemaps: true }));
};

module.exports = css;

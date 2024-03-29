const gulp = require("gulp");

// config
const path = require("../config/path.js");
const app = require("../config/app.js");

//gulp plugins
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const fileInclude = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");

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
    .pipe(htmlmin(app.htmlmin))
    .pipe(gulp.dest(path.html.dest));
};

module.exports = html;

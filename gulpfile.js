const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// config
const path = require("./config/path.js");

// tasks
const clear = require("./task/clear.js");
const html = require("./task/html.js");
const css = require("./task/css.js");

// server
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
  });
};

const watcher = () => {
  gulp.watch(path.html.watch, html).on("all", browserSync.reload);
  gulp.watch(path.css.watch, css).on("all", browserSync.reload);
};

// tasks
exports.html = html;
exports.css = css;

// build
exports.dev = gulp.series(
  clear,
  gulp.parallel(html, css),
  gulp.parallel(watcher, server)
);

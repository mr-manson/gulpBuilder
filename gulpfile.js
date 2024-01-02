const gulp = require("gulp");
const browserSync = require("browser-sync").create();

// tasks

const clear = require("./task/clear.js");
const html = require("./task/html.js");

// server
const server = () => {
  browserSync.init({
    server: {
      baseDir: "./public",
    },
  });
};

const watcher = () => {
  gulp.watch("./src/html/**/*.html", html).on("all", browserSync.reload);
};

// tasks
exports.watch = watcher;
exports.clear = clear;

// build
exports.dev = gulp.series(clear, html, gulp.parallel(watcher, server));

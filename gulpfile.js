/**
 * !==============================================
 * * 1. Mes Variables
 * !==============================================
 */
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const pipeline = require("readable-stream").pipeline;
const browserSync = require("browser-sync").create();
/**
 * !==============================================
 * * 2. Mes tâches
 * !==============================================
 */

// remplace la moulinette de SASS qui va transformer nos .scss en .css
gulp.task("sassification", function () {
  return gulp
    .src("dev/css/*.scss")
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(
      rename(function (path) {
        path.basename += ".min";
      })
    )
    .pipe(sourcemaps.write(""))
    .pipe(gulp.dest("prod/css"));
});

gulp.task("assetsification", function () {
  return pipeline(gulp.src("dev/assets/**/*"), gulp.dest("prod/assets"));
});

gulp.task("htmlification", function () {
  return pipeline(gulp.src("dev/*.html"), gulp.dest("prod"));
});

gulp.task("jsification", function () {
  return pipeline(
    gulp.src("dev/js/*.js"),
    uglify(),
    rename(function (path) {
      path.basename += ".min";
    }),
    gulp.dest("prod/js")
  );
});

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "prod/",
    },
  });
});

/**
 * !==============================================
 * * 3. Exécution des tâches
 * !==============================================
 */
gulp.task(
  "observation",
  gulp.parallel(
    "browser-sync",
    "htmlification",
    "sassification",
    "jsification",
    "assetsification",
    function () {
      gulp.watch("dev/assets/**/*", gulp.series("assetsification"));
      gulp.watch("dev/css/**/*.scss", gulp.series("sassification"));
      gulp.watch("dev/*.html", gulp.series("htmlification"));
      gulp.watch("dev/js/*.js", gulp.series("jsification"));
      gulp.watch("prod/**/*").on("change", browserSync.reload);
    }
  )
);

gulp.task("default", gulp.series("observation"));

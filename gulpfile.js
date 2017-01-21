const gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
prefix = require("autoprefixer"),
imports = require("postcss-import");
/*#################################################################################*/
gulp.task("default", function(){
	console.log("DEFAULT TASK");
})
gulp.task("css", function(){
	return gulp.src("./app/assets/styles/styles.css")
	.pipe(postcss([imports, prefix]))
	.pipe(gulp.dest("./app/temp/styles/"));
})
gulp.task("watch", function(){
	watch("./app/assets/styles/**/*.css", function(){
		gulp.start("css");
	})
})
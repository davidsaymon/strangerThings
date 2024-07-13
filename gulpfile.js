const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

function styles() {
    return gulp.src('./src/styles/*.scss') //recupera os arquivos
        .pipe(sass({outputStyle: 'compressed'})) //encadear os arquivos (estilo de saida comprimido)
        .pipe(gulp.dest('./dist/css')); //enviar os arquivos comprimidos para uma pasta
}

function images() {
    return gulp.src('./src/images/**/*', {encoding: false}) //recupera os arquivos
        .pipe(imagemin()) //encadear os arquivos (estilo de saida comprimido)
        .pipe(gulp.dest('./dist/images')); //enviar os arquivos comprimidos para uma pasta
}


exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') //recupera os arquivos
        .pipe(sass({outputStyle: 'compressed'})) //encadear os arquivos (estilo de saida comprimido)
        .pipe(gulp.dest('./dist/css')); //enviar os arquivos comprimidos para uma pasta
}

exports.default = styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}
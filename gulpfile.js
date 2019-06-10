const gulp = require('gulp')
const sass = require('gulp-sass')
const prefixer = require('gulp-autoprefixer')

gulp.task('sass', () => 
    gulp.src('sources/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(prefixer({
            versions: ['last 2 browsers']
        }))
        .pipe(gulp.dest('deploy/css/'))
)
gulp.task('watch', () => {
    gulp.watch('sources/scss/**/*.scss', gulp.series('sass'))
})

gulp.task('default', gulp.parallel('sass', 'watch'))
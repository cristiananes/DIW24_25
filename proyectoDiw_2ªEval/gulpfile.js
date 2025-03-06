// Importar los módulos de Gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const htmlclean = require('gulp-htmlclean');
const htmlmin = require('gulp-htmlmin');
const purgecss = require('gulp-purgecss');
const imagemin = require('gulp-imagemin');

// Variable de entorno para elegir entre desarrollo o producción
const desarrollo = true; // Cambiar a `false` para empaquetar código

// Rutas de archivos de desarrollo y producción
const rutas = {
    scss: {
        src: 'dev/scss/**/*.scss',
        dest: 'pub/css'
    },
    html: {
        src: 'dev/**/*.html',
        dest: 'pub/'
    },
    imagenes: {
        src: 'dev/img/**/*',
        dest: 'pub/img'
    }
};

// Tarea para compilar SCSS a CSS
gulp.task('compilar-css', function () {
    return gulp.src(rutas.scss.src)
        .pipe(desarrollo ? sourcemaps.init() : gulp.noop()) // Activa sourcemaps solo en desarrollo
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(desarrollo ? gulp.noop() : cleanCSS()) // Minifica solo en producción
        .pipe(desarrollo ? sourcemaps.write('.') : gulp.noop()) // Escribe sourcemaps solo en desarrollo
        .pipe(gulp.dest(rutas.scss.dest));
});

// Tarea para limpiar comentarios del HTML
gulp.task('limpiar-html', function () {
    return gulp.src(rutas.html.src)
        .pipe(htmlclean())
        .pipe(gulp.dest(rutas.html.dest));
});

// Tarea para minificar HTML en producción
gulp.task('minificar-html', function () {
    return gulp.src(rutas.html.dest + '**/*.html')
        .pipe(desarrollo ? gulp.noop() : htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest(rutas.html.dest));
});

// Tarea por defecto
gulp.task('predeterminado', function (done) {
    console.log("✅ Gulp está funcionando correctamente");
    done();
});

// Tarea para observar cambios en SCSS, HTML e imágenes y ejecutar las tareas necesarias
gulp.task('observar', function () {
    gulp.watch(rutas.scss.src, gulp.series('compilar-css', 'eliminar-css-no-usado'));
    gulp.watch(rutas.html.src, gulp.series('limpiar-html', 'minificar-html'));
    gulp.watch(rutas.imagenes.src, gulp.series('minificar-imagenes'));
});

// Tarea para eliminar el CSS no utilizado
gulp.task('eliminar-css-no-usado', function () {
    return gulp.src(rutas.scss.dest + '/**/*.css') // Archivos CSS generados
        .pipe(purgecss({
            content: ['dev/**/*.html'] // Revisa qué clases se usan en los archivos HTML
        }))
        .pipe(gulp.dest(rutas.scss.dest)); // Guarda el CSS optimizado en `pub/css`
});

// Tarea para minimizar imágenes
gulp.task('minificar-imagenes', function () {
    return gulp.src(rutas.imagenes.src)
        .pipe(imagemin()) // Minifica las imágenes
        .pipe(gulp.dest(rutas.imagenes.dest));
});

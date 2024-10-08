//Install and configute Gulp for your assignment
var {src, dest, watch} = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function css() {
    return src('src/*.scss')
    .pipe(sass())
    .pipe(dest('dist/css'))
};

exports.default = function () {
    watch('src/*.scss', css);
    watch('src/modules/*.scss', css);
}

// exports.default = css;
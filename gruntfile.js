module.exports = function (grunt) {

    grunt.initConfig({
        serve: {
            options: {
                port: 9000
            }
        },
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            // 2. Настройка для объединения файлов находится тут
            dist: {
                src: [
                    'city/*.js', // Все JS в папке libs
                    'filters/*.js', // Все JS в папке libs
                    'weather/*.js',
                    'AppController.js',
                    "bower_components/*/*.js"
                ],
                dest: 'js/build/weather.js',
            }
        },
        uglify: {
            build: {
                src: 'js/build/weather.js',
                dest: 'js/build/weather.min.js'
            }
        },
        wiredep: {
            task: {
                src: [
                    'index.html'
                ],
                cwd: '.',
                overrides: {
                    'bootstrap': {
                        'main': ['less/bootstrap.less', 'dist/css/bootstrap.min.css', 'dist/js/bootstrap.min.js']
                    }
                },
                fileTypes: {
                    html: {
                        replace: {
                            js: '<script src="/{{filePath}}"></script>',
                            css: '<link rel="stylesheet" href="/{{filePath}}" />'
                        }
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-wiredep');

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-serve');
    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify']);

};
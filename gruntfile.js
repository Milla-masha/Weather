module.exports = function (grunt) {

    var appConfig = {
        app: 'app',
        target: './dist',
        dependencies: './dist'
    };

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        config: appConfig,
        copy: {
            distDebug: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.target %>',
                    src: [
                        'favicon.ico',
                        '*.json',
                        'images/{,*/}**/*.{png,jpg,jpeg,gif}',
                        'resources/{,*/}**/*.{js,json}',
                        'scripts/{,*/}**/*.js',
                        'styles/{,*/}**/*.css',
                        'views/{,*/}**/*.html',
                        'assets/**',
                        'bower_components/**',
                        '*.html',
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '<%= config.dependencies %>/bower_components',
                    dest: '<%= config.target %>/bower_components',
                    src: [
                        '**'
                    ]
                }]
            }
        },
        useminPrepare: {
            html: ['<%= config.app %>/.index.html'],
            options: {
                dest: '<%= config.target %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglify'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },
        injector: {
            options: {},
            bower_dependencies: {
                files: {
                    'dist/source/html/index.html': ['dist/source/js/AppController.js', 'dist/source/js/city/*.js', 'dist/source/js/filters/*.js', 'dist/source/js/weather/*.js', 'dist/source/css/css/style.css'],
                }
            }
        },
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
                    'dist/source/js/city/*.js', // Все JS в папке libs
                    'dist/source/js/filters/*.js', // Все JS в папке libs
                    'dist/source/js/weather/*.js',
                    'dist/source/js/AppController.js'
                ],
                dest: 'dist/app/weather.js'
            },
            library: {
                src: [
                    'dist/source/js/bower_components/*/*.js'
                ],
                dest: 'dist/lib/library.js'
            }
        },
        uglify: {
            build: {
                src: 'dist/app/weather.js',
                dest: 'dist/app/weather.min.js'
            },
            library: {
                src: 'dist/lib/library.js',
                dest: 'dist/lib/library.min.js'
            }
        },
        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= config.target %>/{,*/}*.html'],
            css: ['<%= config.target %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= config.target %>', '<%= config.target %>/images']
            }
        },
        wiredep: {
            task: {
                src: [
                    'dist/source/html/index.html'
                ],
                cwd: '.',
                overrides: {
                    'bootstrap': {
                        'main': ['dist/css/bootstrap.min.css', 'dist/js/bootstrap.min.js']
                    }
                },
                html: {
                    block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                    detect: {
                        js: /<script.*src=['"]([^'"]+)/gi,
                        css: /<link.*href=['"]([^'"]+)/gi
                    },
                    replace: {
                        js: '<script src="{{filePath}}"></script>',
                        css: '<link rel="stylesheet" href="{{filePath}}" />'
                    }
                },
            }
        }
    });
    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('dev', ['copy:distDebug']);
};
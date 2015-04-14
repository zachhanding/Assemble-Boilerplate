/*
 * Generated on 2014-07-03
 * generator-assemble v0.4.12
 * https://github.com/assemble/generator-assemble
 *
 * Copyright (c) 2014 Hariadi Hinta
 * Licensed under the MIT license.
 */

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// '<%= config.src %>/templates/pages/{,*/}*.hbs'
// use this if you want to match all subfolders:
// '<%= config.src %>/templates/pages/**/*.hbs'

module.exports = function(grunt) {

	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({

		config: {
			src: 'src',
			dist: 'dist'
		},

		watch: {
			assemble: {
				files: ['<%= config.src %>/{content,data,templates}/**/*.{md,hbs,yml,json}'],
				tasks: ['assemble']
			},
			css: {
				files: '**/*.scss',
				tasks: ['build']
			},
			configFiles: {
				files: [ 'Gruntfile.js' ],
				options: {
					reload: true
				}
			},
			handlebars: {
				files: ['<%= config.dist %>/assets/hbs/**/*.hbs'],
				tasks: ['build']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= config.dist %>/{,*/}*.html',
					'<%= config.dist %>/assets/{,*/}*.css',
					'<%= config.dist %>/assets/{,*/}*.js',
					'<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= config.src %>/sass/',
					src: '**/*.scss',
					dest: '<%= config.dist %>/assets/css/',
					ext: '.css'
				}]
			}
		},

		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'<%= config.dist %>',
						'<%= config.src %>'
					]
				}
			}
		},

		assemble: {
			pages: {
				options: {
					flatten: true,
					assets: '<%= config.dist %>/assets',
					layout: 'home.hbs',
					layoutdir: '<%= config.src %>/templates/layouts',
					data: '<%= config.src %>/data/*.{json,yml}',
					partials: '<%= config.src %>/templates/partials/**/*.hbs'
				},
				files: {
					'<%= config.dist %>/': ['<%= config.src %>/templates/pages/*.hbs']
				}
			}
		},

		handlebars: {
			options: {
			    namespace: 'Templates',
			    processName: function(filePath) {
			        return filePath.replace(/^dist\/assets\/hbs\//, '').replace(/\.hbs$/, '');
			    }
			},
		    all: {
		        files: {
		            "<%= config.dist %>/assets/js/templates.js": ["<%= config.dist %>/assets/js/templates/**/*.hbs"]
		        }
		    }
		},

		// Before generating any new files,
		// remove any previously-created files.
		clean: ['<%= config.dist %>/**/*.{html,xml}']

	});

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-handlebars');

	grunt.registerTask('server', [
		'clean',
		'sass',
		'assemble',
		'handlebars',
		'connect:livereload',
		'watch'
	]);

	grunt.registerTask('build', [
		'clean',
		'sass',
		'assemble',
		'handlebars'
	]);

	grunt.registerTask('default', [
		'build'
	]);

};

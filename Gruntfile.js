module.exports = function(grunt) {

	// Project Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['Gruntfile.js', 'app/scripts/main.js']
		},
		sass: {
			dist: {
				compass: true,
				loadPath: 'app/styles',
				trace: true,
				files: {
					'./dist/styles/main.css' : 'app/styles/main.scss'
				}
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'app/styles',
					cssDir: 'dist/styles',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'app/styles',
					cssDir: 'dist/styles'
				}
			}
		}
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Default tasks
	grunt.registerTask('default', ['jshint', 'sass', 'compass']);
};

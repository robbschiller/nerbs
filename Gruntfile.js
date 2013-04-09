module.exports = function(grunt) {

	// Project Config
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				compass: true,
				loadPath: 'app/styles',
				trace: true,
				files: {
					'./dist/styles/main.css' : 'app/styles/main.scss'
				},
			},
		},
	});

	// Load the plugins
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default tasks
	grunt.registerTask('default', ['sass']);
};

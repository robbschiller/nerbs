module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.initConfig({
		sass: {
			dist: {
				compass: true,
				loadPath: 'app/styles',
				trace; true,
				files: {
					'app/styles/main.css' : 'app/styles/main.scss'
				},
			},
		},
	});
};

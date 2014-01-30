module.exports = (grunt) ->
	
	grunt.loadNpmTasks 'grunt-contrib-watch'
	grunt.loadNpmTasks 'grunt-contrib-jshint'
	grunt.loadNpmTasks 'grunt-contrib-sass'
	grunt.loadNpmTasks 'grunt-contrib-connect'
	grunt.loadNpmTasks 'grunt-open'
	grunt.loadNpmTasks 'grunt-autoprefixer'
	grunt.loadNpmTasks 'grunt-contrib-copy'
	grunt.loadNpmTasks 'grunt-contrib-clean'
	grunt.loadNpmTasks 'grunt-contrib-uglify'


	grunt.initConfig
		

		jshint:
			options:
				debug: true
				globals:
				    jQuery: true
				    debugger: true
			build: 'src/js/progressify.jquery.js'


		clean:
			build: ["build/*"]

		sass:
			options:
				style: 'compressed'
			build:
				files:
					'build/progressify.min.css': 'src/sass/progressify.scss'

		autoprefixer:
			build:
				expand: true
				flatten: true
				src: 'build/progressify.min.css'
				dest: 'build/'

		uglify:
			options:
				compress:
					drop_console: true
			build:
				files:
					'build/progressify.jquery.min.js': ['src/js/progressify.jquery.js']



		copy:
			demo:
				files: [{
					expand: true,
					cwd: 'build',
					dest: 'demo',
					src: [
						'progressify.jquery.min.js',
						'progressify.min.css'
					]
				}]


		connect:
			demo:
				options:
					port: 9000
					hostname: 'localhost'
					base: './demo'
		
		open:
			demo:
				path: 'http://localhost:9000/'

		watch:
			options:
				livereload: true
			sass:
				files: 'src/sass/progressify.scss'
				tasks: ['sass', 'autoprefixer', 'copy']
			html:
				files: ['demo/index.html']
			javascript:
				files: 'dev/js/*.js'
				tasks: ['jshint', 'uglify', 'copy']


	

	# Publishing build folder
	grunt.registerTask 'build', [
		'jshint',
		'clean',
		'sass', 'autoprefixer',
		'uglify'
	]

	# Publishing demo folder
	grunt.registerTask 'demo', [
		'jshint',
		'clean',
		'sass', 'autoprefixer',
		'uglify:build'

		'copy',
		'connect', 'open', 'watch'
	]









/*
 * Assemble, component generator for Grunt.js
 * https://github.com/assemble/
 *
 * Copyright (c) 2013 Upstage
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    grunticon: {
      icons: {
        files: [{
            expand: true,
            cwd: 'app/assets/icons/svg/',
            src: ['*.svg', '*.png'],
            dest: 'app/assets/icons'
        }],
        options: {
          cssprefix: '.i-',
          // define vars that can be used in filenames if desirable, e.g. foo.colors-primary-secondary.svg
          // colors: {
          //   primary: "red",
          //   secondary: "#666"
          // }
        }
      }
    },


  });


  // Load npm plugins to provide necessary tasks.
  grunt.loadNpmTasks('grunt-grunticon');

  // Default task to be run.
  grunt.registerTask('default', ['grunticon']);
};

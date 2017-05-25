{
  "name": "contrib",
  "description": "Sistema de controle de contribuição",
  "version": "0.0.1",
  "author": "Andre Agunzi",
  "engines": {
    "node": "0.10.x",
    "npm": "1.4.x"
  },
//  "scripts": {
//    "start": "grunt build",
//    "test": "karma start karma.conf.js",
//    "postinstall": "bower install --config.interactive=false"
//  },
"scripts": {
    "postinstall": "grunt uglify",
    "start": "node web.js"
  },
  "dependencies": {
    "angular-dynamic-locale": "^0.1.32",
    "angular-i18n": "^1.6.4",
    "async": "~0.9.0",
    "bower": "~1.3.8",
    "bower-installer": "^1.3.6",
    "chalk": "~0.5",
    "glob": "~4.0.5",
    "grunt": "^0.4.5",
    "grunt-angular-templates": "^1.1.0",
    "grunt-cli": "0.1.13",
    "grunt-concurrent": "^1.0.1",
    "grunt-contrib-clean": "^0.5.0",
    "grunt-contrib-concat": "^0.3.0",
    "grunt-contrib-connect": "^0.5.0",
    "grunt-contrib-jshint": "^0.6.5",
    "grunt-contrib-uglify": "0.2.7",
    "grunt-contrib-watch": "^0.5.3",
    "grunt-exec": "^0.4.7",
    "grunt-injector": "^0.5.4",
    "load-grunt-tasks": "^0.5.0",
    "time-grunt": "^1.0.0"
  },
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-clean": "~0.5.0",
    "grunt-contrib-concat": "~0.3.0",
    "grunt-contrib-connect": "~0.5.0",
    "grunt-concurrent": "^1.0.0",
    "grunt-contrib-jshint": "~0.6.4",
    "grunt-contrib-uglify": "~0.2.4",
    "grunt-contrib-watch": "~0.5.3",
    "grunt-exec": "^0.4.6",
    "grunt-injector": "^0.5.4",
    "grunt-angular-templates": "^1.0.2",
    "load-grunt-tasks": "^0.5.0",
    "time-grunt": "^0.3.2",
    "karma": "~0.12.0",
    "karma-chrome-launcher": "~0.1.2",
    "karma-coverage": "~0.2.0",
    "karma-firefox-launcher": "~0.1.3",
    "karma-spec-reporter": "0.0.23",
    "karma-jasmine": "~0.2.1",
    "karma-phantomjs-launcher": "~0.1.2"
  }
}

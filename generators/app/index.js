'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('Chassis') + ', a ready-to-rock web scaffolding generator'
    ));

    var dir = this.destinationRoot()
    if (dir.split("/").length > 1) {
      dir = dir.split("/")
      dir = dir[dir.length-1]
    }

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'Project name',
      default: dir
    },{
      type: 'input',
      name: 'description',
      message: 'Project description',
      default: ""
    },{
      type: 'input',
      name: 'repo',
      message: 'Git repository',
      default: ""
    },{
      type: 'input',
      name: 'realname',
      message: 'Your name',
      default: ""
    },{
      type: 'input',
      name: 'email',
      message: 'Your email',
      default: ""
    },{
      type: 'input',
      name: 'licence',
      message: 'Project licence',
      default: "MIT"
    },{
      type: 'input',
      name: 'homepage',
      message: 'Project homepage',
      default: ""
    }];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('package.json'),
        this.destinationPath('package.json'),
        this.props
      );
      this.fs.copyTpl(
        this.templatePath('bower.json'),
        this.destinationPath('bower.json'),
        this.props
      );
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      // Copy HTML
      this.fs.copy(
        this.templatePath("src/*"),
        this.destinationPath("src")
      );
      // Copy resources & code
      var subdirs = ["coffee", "handlebars", "img", "less"];
      for(var i=0;i<subdirs.length;i++) {
        var subdir = subdirs[i];
        this.fs.copy(
          this.templatePath("src/" + subdir + "/*"),
          this.destinationPath("src/" + subdir + "/")
        );
      }
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});

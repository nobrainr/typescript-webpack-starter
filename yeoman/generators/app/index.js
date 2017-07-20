'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = Generator.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fine ' + chalk.red('generator-ts-webpack') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: this.appname
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    // --- Copy init configuration files
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), 
      {
        name: this.props.name
      }
    );

    this.fs.copyTpl(
      this.templatePath('_bower.json'),
      this.destinationPath('bower.json'), 
      {
        name: this.props.name
      }
    );

    // --- Copy the configuration files

    this.fs.copy(
      this.templatePath('_webpack.config.js'),
      this.destinationPath('webpack.config.js')
    );

    this.fs.copy(
      this.templatePath('_tsconfig.json'),
      this.destinationPath('tsconfig.json')
    );

    this.fs.copy(
      this.templatePath('_typings.json'),
      this.destinationPath('typings.json')
    );

    this.fs.copy(
      this.templatePath('_tslint.json'),
      this.destinationPath('tslint.json')
    );

    this.fs.copy(
      this.templatePath('_jsconfig.json'),
      this.destinationPath('jsconfig.json')
    );

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );


    // -- Copy the application files

    this.fs.copy(
      this.templatePath('src/_vendor.ts'),
      this.destinationPath('src/vendor.ts')
    );

    this.fs.copy(
      this.templatePath('src/_index.ts'),
      this.destinationPath('src/index.ts')
    );

    this.fs.copy(
      this.templatePath('src/_index.html'),
      this.destinationPath('src/index.html')
    );

  },

  install: function () {
    this.installDependencies();
  }
});

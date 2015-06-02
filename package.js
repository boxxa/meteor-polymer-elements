Package.describe({
  name: 'boxxa:polymer-elements',
  version: '1.0.0',
  summary: 'Adds Polymer 1.0.0 Elements to Meteor',
  git: 'https://github.com/boxxa/meteor-polymer-elements.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
    api.use('boxxa:polymer@1.0.0');
    api.use('underscore');
    api.versionsFrom('METEOR@0.9.0');
	api.addFiles('boxxa:polymer-elements.js', 'server');
});

Npm.depends({
	bower: '1.3.12'
});

#Meteor-Polymer-Elements
The version [ecwyne:polymer](http://github.com/ecwyne/meteor-polymer-elements) hasn't been updated so forked it and am keeping the version updated as Polymer updates theirs so I would suggest rolling your own bower and package version for anything in production as this will stay current with Polymer. I am keeping this package version consistent with polymer. See below to install Polymer versions specific to your needs.


Same as the original, this package adds the base functionality of Polymer. If you want to include [core-elements and paper-elements](http://www.polymer-project.org/docs/elements/) simply run below as I keep both in sync or copy your own into public folder for bower_components.

##How to Install

```bash
meteor add boxxa:polymer-elements
```

This package version will remain consistent with Polymer so if you want to install this release in the future, run:
```bash
meteor add boxxa:polymer-elements@=0.5.4
```
##How to Use
After your first `meteor run` you can browse your `[APP_DIR]/public/bower_components/` directory to find installed elements. See below for how to `<link rel="import"` these elements and start using them!

###Example
index.html
```html
<head>
  <!-- Add any <link rel="import" href="[path/to/element]"> tags you will use -->
	<link rel="import" href="bower_components/paper-checkbox/paper-checkbox.html">
</head>
<body>
  <!-- Simply use elements in body or in templates -->
	<paper-checkbox checked></paper-checkbox>
</body>
```
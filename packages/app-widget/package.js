Package.describe({
  summary: "Managing widget for passwords and services"
});

Package.on_use(function (api, where) {
  api.use(['templating', 'handlebars'], 'client');

  api.add_files([
    'lib/client/widget.html',
    'lib/client/widget.js'
  ],
    'client');
});

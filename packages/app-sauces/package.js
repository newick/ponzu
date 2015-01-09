Package.describe({
  summary: "Managing sauces"
});

Package.on_use(function (api, where) {
  api.use(['templating', 'handlebars'], 'client');

  api.add_files([
    'lib/client/main.js',
    'lib/client/sauces.html',
    'lib/client/sauces.js'
  ],
    'client');
});

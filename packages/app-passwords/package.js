Package.describe({
  summary: "Managing passwords"
});

Package.on_use(function (api, where) {
  api.use(['templating', 'handlebars'], 'client');

  api.add_files([
    'lib/client/main.js',
    'lib/client/passwords.html',
    'lib/client/passwords.js'
  ],
    'client');
});

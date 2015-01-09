Package.describe({
  summary: "Password generator pairing with service"
});

Package.on_use(function (api, where) {
  api.add_files(['lib/client/pwgen.js'], 'client');

  if (api.export) {
    api.export(['Pwgen']);
  }
});

Package.on_test(function(api) {
  api.use('app-pwgen', 'client');
  api.use(['tinytest', 'test-helpers'], 'client');

  api.add_files('pwgen_test.js', 'client');
});

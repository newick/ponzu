Meteor.startup(function () {
  Session.setDefault("indexPassword", 0);
  passwords = [
    {name: "azerty"},
    {name: "qwerty"},
  ];
});

Meteor.startup(function () {
  Session.setDefault("indexSauce", 0);
  sauces = [
    {name: "teriyaki"},
    {name: "soy"},
  ];
});

Meteor.startup(function () {
  sauces = [
    {name: "soja"},
    {name: "teriyaki"},
    {name: "wasabi"},
  ];

  Session.setDefault("indexSauce", 0);
});

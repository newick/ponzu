Meteor.startup(function () {
  sauces = [
    {name: "teriyaki"},
    {name: "soy"},
    {name: "rayu"},
  ];

  Session.setDefault("indexSauce", Math.floor(Math.random() * sauces.length));
});

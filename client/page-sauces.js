var sauces = [
  {name: "terryaki"},
  {name: "soy"},
];


Template.tplSauces.helpers({
  currentSauce: function () {
    return sauces[Session.get("indexSauce")].name;
  },
});

Template.tplSauces.events({

  'click .next': function (event) {
    var index = Session.get("indexSauce") + 1;

    event.preventDefault();

    if (index === sauces.length)
      index = 0;

    Session.set("indexSauce", index);
  },

  'click .prev': function (event) {
    var index = Session.get("indexSauce") - 1;

    event.preventDefault();

    if (index < 0)
      index = sauces.length - 1;

    Session.set("indexSauce", index);
  },
});

Template.tplSauces.helpers({
  sauces: function () { return Sauces.find(); },
  currentSauce: function () {
    return nameByIndex(Sauces, Session.get("indexSauce"));
  }
});

Template.tplSauces.events({

  'click .next': function (event) {

    var index = Session.get("indexSauce") + 1;

    if (index === Sauces.find().count())
      index = 0;

    Session.set("indexSauce", index);
  },

  'click .prev': function (event) {
    var index = Session.get("indexSauce") - 1;

    if (index < 0)
      index = Sauces.find().count() - 1;

    Session.set("indexSauce", index);
  },
});
Template.tplSauces.sauces = function () {
  return Sauces.find();
};

Template.tplSauces.currentSauce = function () {
  var index = Session.get('indexSauce');
  var currentSauce = "";
  
  if (Sauces.find().fetch()[index])
    currentSauce = Sauces.find().fetch()[index].name;

  return currentSauce;
};

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
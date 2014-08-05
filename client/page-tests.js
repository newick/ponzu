Template.tplTests.services = function () {
  return Services.find();
};

Template.tplTests.currentService = function() {
  var index = Session.get("indexService");
  var currentService = "";

  if (Services.find().fetch()[index])
    currentService = Services.find().fetch()[index].name;

  return currentService;
};
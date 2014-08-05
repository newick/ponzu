Template.tplTests.soluce = function () {
  var password = nameByIndex(Passwords, Session.get("indexPassword"));
  var sauce = nameByIndex(Sauces, Session.get("indexSauce"));
  var service = nameByIndex(Services, Session.get("indexService"));
  var soluce = new Pwgen(sauce, password, service);
  
  if (soluce.isSauce())
    return soluce.gen();
  
  return "no";
};

Template.tplTests.services = function () {
  return nameByIndex(Services, Session.get("indexService"));
};

Template.tplTests.currentSauce = function () {
  return nameByIndex(Sauces, Session.get("indexSauce"));
};

Template.tplTests.currentPassword = function () {
  return nameByIndex(Passwords, Session.get("indexPassword"));
};

Template.tplTests.currentService = function() {
  var index = Session.get("indexService");
  var currentService = "";

  if (Services.find().fetch()[index])
    currentService = Services.find().fetch()[index].name;

  return currentService;
};
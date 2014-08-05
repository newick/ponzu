Template.tplTests.soluce = function () {
  var password = nameByIndex(Passwords, Session.get("indexPassword"));
  var sauce = nameByIndex(Sauces, Session.get("indexSauce"));
  var service = nameByIndex(Services, Session.get("indexService"));
  var soluce = new Pwgen(sauce, password, service);
  
  if (soluce.isSauce())
    return soluce.gen();
  
  return "no";
};


Template.tplTests.currentSauce = function () {
  return nameByIndex(Sauces, Session.get("indexSauce"));
};

Template.tplTests.currentPassword = function () {
  return nameByIndex(Passwords, Session.get("indexPassword"));
};

Template.tplTests.currentService = function() {
  return nameByIndex(Services, Session.get("indexService"));
};

Template.tplTests.events({
  'submit form': function (event) {
    var userPassword = $('input#userPassword').val();
    var soluce = $('input#soluce').val();
    
    event.preventDefault();
    
    if (userPassword === soluce)
      alert("PANZER PONZU");
    else
      alert("boulette");
  }
});

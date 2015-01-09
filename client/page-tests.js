Template.tplTests.helpers({
  currentSauce: function () {
    return nameByIndex(Sauces, Session.get("indexSauce"));
  },

  currentPassword: function () {
    return nameByIndex(Passwords, Session.get("indexPassword"));
  },

  currentService: function() {
    return nameByIndex(Services, Session.get("indexService"));
  }
});

Template.tplTests.events({

  'click .next': function (event) {
    var index = Session.get("indexService") + 1;

    event.preventDefault();

    if (index === Services.find().count()) {
      index = 0;
    }

    Session.set("indexService", index);
  },

  'click .prev': function (event) {
    var index = Session.get("indexService") - 1;

    event.preventDefault();

    if (index < 0) {
      index = Services.find().count() - 1;
    }

    Session.set("indexService", index);
  },

  'submit form': function (event) {
    var password = $('input.password').val();
    var sauce = nameByIndex(Sauces, Session.get("indexSauce"));
    var service = nameByIndex(Services, Session.get("indexService"));
    var soluce = new Pwgen(sauce, password, service);
    var userPassword = $('input#userPassword').val();

    event.preventDefault();

    console.log("userPassword", userPassword)
    console.log("soluce", soluce.gen())

    if (userPassword === soluce.gen()) {
      $(".result").removeClass("invalid");
      $(".result").html("Bien joué, tu as tout compris !");
      $(".result").addClass("valid");
    } else {
      $(".result").html("Ce n'est pas ça, essaye encore !");
      $(".result").addClass("invalid")
    }
  }
});

Template.tplPasswords.helpers({
  passwords: function () {
    return Passwords.find();
  },
  currentPassword: function () {
    return nameByIndex(Passwords, Session.get("indexPassword"));
  }
});

Template.tplPasswords.events({

  'click .next': function (event) {
    var index = Session.get("indexPassword") + 1;

    if (index === Passwords.find().count())
      index = 0;

    Session.set("indexPassword", index);
  },

  'click .prev': function (event) {
    var index = Session.get("indexPassword") - 1;

    if (index < 0)
      index = Passwords.find().count() - 1;

    Session.set("indexPassword", index);
  }
 });

Template.passwordsWidget.helpers({
  currentPassword: function () {
    return passwords[Session.get("indexPassword")].name;
  },
});

Template.passwordsWidget.events({

  'click .next': function (event) {
    var index = Session.get("indexPassword") + 1;

    event.preventDefault();

    if (index === passwords.length)
      index = 0;

    Session.set("indexPassword", index);
  },

  'click .prev': function (event) {
    var index = Session.get("indexPassword") - 1;

    event.preventDefault();

    if (index < 0)
      index = passwords.length - 1;

    Session.set("indexPassword", index);
  }
});

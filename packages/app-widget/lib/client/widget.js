var changeChoice = function (context, nextOrPrev) {
    var index = Session.get(context.sessionName);

    (nextOrPrev === 'next') && index++;
    (nextOrPrev === 'prev') && index--;

    index = (index === context.choices.length) ? 0 : index;
    index = (index < 0) ? context.choices.length - 1 : index;

    Session.set(context.sessionName, index);
};

var randomByDefault = function (context) {
  var sessionName = context.sessionName;
  var choices = context.choices;

  Session.setDefault(sessionName, Math.floor(Math.random() * choices.length));
}


Template.widget.helpers({
  currentChoice: function () {
    randomByDefault(this.context);

    return this.context.choices[Session.get(this.context.sessionName)];
  }
});

Template.widget.events({
  'click': function (event) {
    event.preventDefault();

    changeChoice(this.context, event.currentTarget.className);
  }
});

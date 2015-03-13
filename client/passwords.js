Meteor.startup(function () {
  Session.setDefault('visitorPassword', '123456');
});

getLabel = function (value, callback) {
  $('div.passwords .label').map(function (index, label) {
    (label.text === value) && callback(label);
  });
}

setLabelsToDefault = function () {
  $('div.passwords .label').map(function (index, label) {
    label.className = 'label label-default';
  });
}

setLabelToActive = function (label) {
  setLabelsToDefault();
  label.className = 'label label-info';
}

Template.tplPasswords.helpers({
  labels: function () {
    getLabel(Session.get('visitorPassword'), setLabelToActive);

    return ['password', '123456', 'azerty', 'IloveYou', 'sézam69', 'p0nzü'];
  }
})

Template.tplPasswords.events({
  'click .label': function (e) {
    e.preventDefault();
    Session.set('visitorPassword', $(e.currentTarget).html());
  }
})

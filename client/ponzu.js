Meteor.startup(function(){
  Session.setDefault("indexPassword", 0);
  Session.setDefault("indexSauce", 0);

  Meteor.setTimeout(function () {
    var index = Math.ceil(Math.random()*Services.find().count()) - 1;

    Session.setDefault("indexService", index);
  }, 1000);
});

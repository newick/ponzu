Meteor.startup(function(){
  Passwords.remove({});
  
  passwords.forEach(function (password) {
    Passwords.insert(password); 
  });
});
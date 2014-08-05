Meteor.startup(function(){
  Passwords.remove({});
  
  passwords.forEach(function (password) {
    Passwords.insert(password); 
  });
  
  Sauces.remove({});
  
  sauces.forEach(function (sauce) {
    Sauces.insert(sauce);
  });
});
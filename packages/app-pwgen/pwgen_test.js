var newPass = new Pwgen("terryaki", "azerty", "twitter");

Tinytest.add("Simple method", function(test) {  
  test.equal(newPass.gen(), "erazertytw");
});

Tinytest.add("Simple method with short service", function(test) {
  newPass.service = "ovh";
  
  test.equal(newPass.gen(), "vhazertyov");
});
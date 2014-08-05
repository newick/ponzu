Tinytest.add("Simple method", function(test) {
  var newPass = new Pwgen("soya", "azerty", "twitter");
  
  test.equal(newPass.gen(), "erazertytw");
});
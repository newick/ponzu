Template.tplTests.events({
  'submit form': function (event) {
    var password = $('input.currentPassword').val();
    var sauce = $('span.currentSauce').html();
    var service = $('input.currentService').val();
    var soluce = new Pwgen(sauce, password, service);
    var userPassword = $('input#userPassword').val();

    event.preventDefault();

    console.log("password", password)
    console.log("sauce", sauce)
    console.log("service", service)

    console.log("soluce", soluce.gen())
    console.log("userPassword", userPassword)

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

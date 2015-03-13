Template.tplResult.events({
  'submit form': function (event) {
    var password = Session.get('visitorPassword');
    var sauce = $('span.currentSauce').html();
    var service = $('input.currentService').val();
    var soluce = new Pwgen(sauce, password, service);
    var userPassword = $('input#userPassword').val();

    event.preventDefault();

    console.log("soluce", soluce.gen())

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

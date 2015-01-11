Template.tplPasswords.helpers({
  context: function () {
    return {
      sessionName: "indexPassword",
      class: "currentPassword",
      choices: ["qwerty", "azerty"]
    };
  }
});

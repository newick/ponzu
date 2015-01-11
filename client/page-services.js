Template.tplServices.helpers({
  context: function () {
    return {
      sessionName: "indexServices",
      class: "currentService",
      choices: ["kiva", "twitter", "duckduckgo", "github"]
    };
  }
});

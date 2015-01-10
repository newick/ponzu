Template.tplServices.helpers({
  context: function () {
    return {
      sessionName: "indexServices",
      class: "service",
      choices: ["kiva", "twitter", "duckduckgo", "github"]
    };
  }
});

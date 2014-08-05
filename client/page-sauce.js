Template.tplSauces.sauces = function () {
  return Sauces.find();
};

Template.tplSauce.currentSauce = function () {
  var index = Session.get('indexSauce');
  var currentSauce = Sauces.find().fetch().index[index];
  
  return currentSauce;
};
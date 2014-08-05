nameByIndex = function (Collection, index) {  
  if (Collection.find().fetch()[index])
    return Collection.find().fetch()[index].name;

  return "";
}


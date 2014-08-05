Pwgen = function (sauce, password, service) {
  this.sauce = sauce;
  this.password = password; 
  this.service = service;
  
  this.methods = {
    terryaki: this.simpleMeth,
  };
}

Pwgen.prototype.isSauce = function () {
  var self = this;
  
  if (_.indexOf(_.keys(self.methods), self.sauce) === -1)
    return false;
  
  return true;
};

Pwgen.prototype.gen = function () {
  var self = this;
  
  return self.methods[self.sauce](this);
}

Pwgen.prototype.simpleMeth = function (self) {
  var password = [];
  
  password.push(self.service.substr(-2));
  password.push(self.password);
  password.push(self.service.substr(0, 2));
  
  return password.join('');
};
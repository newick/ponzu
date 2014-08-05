Methods = function (type, password, service) {
  this.type = type;
  this.password = password; 
  this.service = service;
  
  this.methods = {
    soya: this.simpleMeth,
  };
}

Methods.prototype.gen = function () {
  var self = this;
  
  return self.methods[self.type](this);
}

Methods.prototype.simpleMeth = function (self) {
  var password = [];
  
  password.push(self.service.substr(-2));
  password.push(self.password);
  password.push(self.service.substr(0, 2));
  
  return password.join('');
};
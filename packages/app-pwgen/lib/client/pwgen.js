Pwgen = function (sauce, password, service) {
  this.sauce = sauce;
  this.password = password;
  this.service = service;

  this.methods = {
    teriyaki: this.teriyakiMeth,
    soy: this.soyMeth,
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

  return self.methods[self.sauce](self);
}

Pwgen.prototype.teriyakiMeth = function (self) {
  var password = [];

  password.push(self.service.substr(-2));
  password.push(self.password);
  password.push(self.service.substr(0, 2));

  return password.join('');
};

Pwgen.prototype.soyMeth = function (self) {
  var password = [];

  password.push(self.service.substr(0, 2));
  password.push(self.password);
  password.push(self.service.substr(-2));

  return password.join('');
};

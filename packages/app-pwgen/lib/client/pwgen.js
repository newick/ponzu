Pwgen = function (sauce, password, service) {
  this.sauce = sauce;
  this.password = password;
  this.service = service;

  this.methods = {
    teriyaki: this.teriyakiMeth,
    soja: this.sojaMeth,
    wasabi: this.wasabiMeth,
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
  var vowels = self.service.match(/[aeiouy]/gi).length;
  var consonant = self.service.length - vowels;
  var password = [];

  password.push(vowels);
  password.push("!");
  password.push(self.password);
  password.push(consonant);
  password.push("&");
  password.push(self.service.substr(0, 2));

  return password.join('');
};

Pwgen.prototype.sojaMeth = function (self) {
  var password = [];

  password.push(self.service.substr(-2));
  password.push(self.password);
  password.push(self.service.substr(0, 2));

  return password.join('');
};

Pwgen.prototype.wasabiMeth = function (self) {
  var password = [];
  var end = "";

  if (self.service.length % 2) {
    password.push(self.password.substr(0, self.password.length / 2));
  }
  else {
    password.push(self.password.substr(self.password.length / 2, self.password.length));
  }

  end = self.service.substr(0, 3).split('').map(function (char) {
    if (/[zZ]/.test(char)) {
      return "a";
    }

    return String.fromCharCode(char.charCodeAt() + 1);
  });

  password.push(end.join(''));

  return password.join('');
};

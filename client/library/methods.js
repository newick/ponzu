var Methods = function (type, password) {
  this.type = type;
  this.password = password; 
}

Methods.prototype.gen = function () {
  var self = this;
  var password = [];
  
  password.push(substr(this.password.length, -2));
}
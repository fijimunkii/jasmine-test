function Bus() {
  this.passengers = [];
}

Bus.prototype.isEmpty = function() {
  return this.passengers.length === 0;
};

Bus.prototype.add = function(passenger) {
  if (!this.contains(passenger)) {
    this.passengers.push(passenger);
  } else {
    throw "Already in the bus!";
  }
};

Bus.prototype.contains = function(passenger) {
  return this.passengers.indexOf(passenger) !== -1;
};

Bus.prototype.getSize = function() {
  return this.passengers.length;
};

Bus.prototype.getPassengers = function() {
  var busPassengers = [],
      numPassengers = this.getSize();
  for (var i=0; i<numPassengers; i++) {
    busPassengers.push(this.passengers[i].name);
  }
  return busPassengers;
}

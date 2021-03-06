// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]


function destructivelyAppendDriver(name) {

  drivers.push(name)
  
}

function destructivelyPrependDriver (name) {

  drivers.unshift(name)
  
}

function destructivelyRemoveLastDriver(name) {
  
  drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
  
  drivers.shift(name)
  
}

function appendDriver(name){
  var newdrivers = drivers.slice();
  newdrivers.push(name);
  return newdrivers;
}


function prependDriver(name){
  var newdrivers = drivers.slice();
  newdrivers.unshift(name);
  return newdrivers;
}

function removeLastDriver(name){
  var newdrivers = drivers.slice();
  newdrivers.pop(name);
  return newdrivers;
}

function removeFirstDriver(name){
  var newdrivers = drivers.slice();
  newdrivers.shift(name);
  return newdrivers;
}

// Modules
const { john, peter } = require('./4-first-module');
const sayHi = require('./5-second-module-utils');
const data = require('./6-alt-mult-modules');
require('./7-mind-grenade');
sayHi('Jim');
sayHi(john);
sayHi(peter);

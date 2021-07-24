const { StoreModule } = require("@ngrx/store");


const sayHi = (name) => {
    console.log(`Hello there ${name}`);
}

module.exports = sayHi
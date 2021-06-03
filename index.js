var Cat = require('./Cat');
var Mouse = require('./mouse');

var cat = new Cat('Cỏ');
var mouse = new Mouse('Jerry')
cat.eat(mouse);
console.log(cat);
cat.sayHi();
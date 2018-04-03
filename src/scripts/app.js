const slider = require('./common/slider');
const $ = require('jquery');
console.log($);
const about = require('./common/about');
const block = require('./common/block');
const index = require('./common/index');
const burger = require('./common/burger');
const welcome = require('./common/welcome');

console.log($);

slider();  //   инициализируем слайдер
about();  // инициализируем about 
block();  // инициализируем block 
index();   // инициализируем index 
burger();  // инициализируем myworks 
welcome();   // инициализируем welcom 


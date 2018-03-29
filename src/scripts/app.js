const slider = require('./common/slider');
const $ = require('jquery');
const about = require('./common/about');
const block = require('./common/block');
const index = require('./common/index');
const myworks = require('./common/my-works');
const welcome = require('./common/welcome');

console.log($);

slider();  //   инициализируем слайдер
about();  // инициализируем about 
block();  // инициализируем block 
index();   // инициализируем index 
myworks();  // инициализируем myworks 
welcome();   // инициализируем welcom 


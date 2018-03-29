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

// var parallax = (function (){
//     var bg = document.querySelector('.hero');
//     var user = document.querySelector('.user');
//     var portfolio = document.querySelector('.portfolio__pic');


//     return {
//         move: function(block, windowScroll, strafeAmount) {
//             var strafe = windowScroll / -strafeAmount + '%';

//             var tr = 'translate3d(0,' + strafe + ',0)';

//             var style = block.style;

//             //style.top = strafe;

//             style.transform = tr;
//             style.webkitTransform = tr;
//         },

//         init: function(wScroll){
//             this.move(bg, wScroll, 45);
//             this.move(portfolio, wScroll, 20);
//             this.move(user, wScroll, 3);
//         }
//     }
// }());


// window.onscroll = function () {
//     var wScroll = window.pageYOffset;
//     console.log(wScroll);
//     parallax.init(wScroll);
// }
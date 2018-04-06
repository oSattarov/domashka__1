let menuClick = (function() {
  let button = document.getElementById('toggle');
  let menu = document.getElementById('overlay');
  // let body = document.querySelector("body");

  let toggleMenu = function(e) {
    button.classList.toggle("btn_container--active");
    menu.classList.toggle("overlay--open");
    // body.classList.toggle("body-active-menu");
  };

  let olimjon = function() {
    button.addEventListener('click', toggleMenu);

  };

  return {
    init: olimjon
  };
})();
  
menuClick.init();
  

////////////////////////  put 2   ////////////////////////
// let button = document.getElementById('toggle');
// let menu = document.getElementById('overlay');

// let toggleMenu = function(e) {
//   button.classList.toggle("btn_container--active");
//   menu.classList.toggle("overlay--open");
// };

// button.addEventListener('click', toggleMenu);

let menu = (function() {
    let button = document.querySelector('#toggle');
    let menu = document.querySelector('#overlay');
    let body = document.querySelector("body");
    console.log(button);
    console.log(menu);
  
    let toggleMenu = function(e) {
      button.classList.toggle("btn_container--active");
      menu.classList.toggle("overlay--open");
      body.classList.toggle("body-active-menu");
      console.log('overlay');
    };
  
    let addListeners = function() {
      button.addEventListener("click", toggleMenu);

    };
  
    return {
      init: addListeners
    };
})();
  
menu.init();
  
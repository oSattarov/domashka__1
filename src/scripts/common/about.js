var parallax = (function (){
    var bg = document.querySelector('.hero');
    var user = document.querySelector('.user');
    var portfolio = document.querySelector('.portfolio');


    return {
        move: function(block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';

            var tr = 'translate3d(0,' + strafe + ',0)';

            var style = block.style;

            //style.top = strafe;

            style.transform = tr;
            style.webkitTransform = tr;
        },

        init: function(wscroll){
            this.move(bg, wscroll, 45);
            this.move(portfolio, wscroll, 20);
            this.move(user, wscroll, 3);
        }
    }
})


window.onscroll = function () {
    var wscroll = window.pageYOffset;

    parallax.init(wscroll);
}
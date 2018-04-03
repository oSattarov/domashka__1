/////////////        animatsia gore i text foto //////////



var parallax = (function (){
    var bg = document.querySelector('.hero__header-img');
    var user = document.querySelector('.user');
    var portfolio = document.querySelector('.portfolio__pic');


    return {
        move: function(block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';

            var tr = 'translate3d(0,' + strafe + ',0)';

            var style = block.style;

            //style.top = strafe;

            style.transform = tr;
            style.webkitTransform = tr;
        },

        init: function(wScroll){
            this.move(bg, wScroll, 45);
            this.move(portfolio, wScroll, 20);
            this.move(user, wScroll, 10);
        }
    }
}());


window.onscroll = function () {
    var wScroll = window.pageYOffset;
    console.log(wScroll);
    parallax.init(wScroll);
}

// module.exports = about;
var linkLeft = document.getElementById('linkLeft');
var welcomeLink = document.getElementById('welcomeLink');

function flip() {
    
    var contCard = document.getElementsByClassName('cont-card')[0];
    contCard.classList.toggle('flipped');
    console.log('flip');
    
}
linkLeft.addEventListener('click', flip);
welcomeLink.addEventListener('click', flip);

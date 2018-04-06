/////////////        animatsia gore i text foto //////////



let parallax = (function (){
    let bg = document.querySelector('.hero__header-img');
    let user = document.querySelector('.user');
    let portfolio = document.querySelector('.portfolio__pic');


    return {
        move: function(block, windowScroll, strafeAmount) {
            let strafe = windowScroll / -strafeAmount + '%';

            let tr = 'translate3d(0,' + strafe + ',0)';

            let style = block.style;

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
    let wScroll = window.pageYOffset;
    parallax.init(wScroll);
}

// module.exports = about;
let card = (function() {
    let linkLeft = document.getElementById('linkLeft');
    let welcomeLink = document.getElementById('welcomeLink');
    let contCard = document.getElementsByClassName('cont-card')[0];

    let flip = function() {
        contCard.classList.toggle('flipped');
        console.log('flip');
    };
    let addCard = function() {
        linkLeft.addEventListener('click', flip);
        welcomeLink.addEventListener('click', flip);
    };

    return {
        init: addCard
    }
})();
card.init();
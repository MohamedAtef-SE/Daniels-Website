'use strict';

const navBar = document.querySelector('.fixed-pos');

let prevScrollPos = window.scrollY;

window.onscroll = function () {
    let currentScrollPos = window.scrollY;
    if (prevScrollPos < currentScrollPos) {
        navBar.style.top = '-70px';
    }
    else {
        navBar.style.top = '0px';
    }
    prevScrollPos = currentScrollPos;

}


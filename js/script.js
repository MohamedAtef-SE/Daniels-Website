'use strict';


//Nav-Bar

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


// About
const aboutSection = document.getElementById('about');
const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.getAttribute('data-progress');
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    })

}
function hideProgress() {
    progressBars.forEach(progressBar => {
        progressBar.style.opacity = '0';
        progressBar.style.width = `0%`;
    })

}

window.addEventListener('scroll', () => {
    const sectionTopFarFromView = aboutSection.getBoundingClientRect().top;
    const sectionBottomFarFromView = aboutSection.getBoundingClientRect().bottom;
    const screenView = window.innerHeight;
    if (sectionTopFarFromView < screenView / 4) {
        showProgress();
    } else {
        hideProgress();
    }
    if (sectionBottomFarFromView < screenView / 2) {
        hideProgress();
    }
})
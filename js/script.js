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
    if (sectionTopFarFromView < screenView / 4 && sectionBottomFarFromView > screenView / 2) {
        showProgress();
    } else {
        hideProgress();
    }
})


// Work

const workBoxs = document.querySelectorAll('.work-box');
const allBtn = document.getElementById('all-pill');
const brandBtn = document.getElementById('brand-pill');
const designBtn = document.getElementById('design-pill');
const graphicBtn = document.getElementById('graphic-pill');

allBtn.addEventListener('click', function () {
    for (let i = 0; workBoxs.length; i++) {
        workBoxs[i].classList.remove('w-0');
    }
})

brandBtn.addEventListener('click', function () {
    workBoxs[0].classList.add('w-0');
    workBoxs[1].classList.remove('w-0');
    workBoxs[2].classList.add('w-0');
    workBoxs[3].classList.remove('w-0');
    workBoxs[4].classList.add('w-0');
    workBoxs[5].classList.remove('w-0');
})

designBtn.addEventListener('click', function () {
    workBoxs[0].classList.remove('w-0');
    workBoxs[1].classList.add('w-0');
    workBoxs[2].classList.remove('w-0');
    workBoxs[3].classList.add('w-0');
    workBoxs[4].classList.remove('w-0');
    workBoxs[5].classList.add('w-0');
})

graphicBtn.addEventListener('click', function () {
    workBoxs[0].classList.remove('w-0');
    workBoxs[1].classList.remove('w-0');
    workBoxs[2].classList.remove('w-0');
    workBoxs[3].classList.remove('w-0');
    workBoxs[4].classList.add('w-0');
    workBoxs[5].classList.add('w-0');
})


// COUNTER

const counterSection = document.querySelector('.counter');
const numCounts = document.querySelectorAll('.numCount');
let start = false;

function startCount() {
    if (!start) {
        numCounts.forEach(num => {
            let sum = 0;
            const count = setInterval(() => {
                sum += 10;
                num.innerHTML = sum;
                if (sum == num.getAttribute('data-count')) {
                    clearInterval(count);
                }
            }, 10);
        })
    }
    start = true;
}

window.addEventListener('scroll', function () {
    const sectionTopFarFromView = counterSection.getBoundingClientRect().top;
    const sectionBottomFarFromView = counterSection.getBoundingClientRect().bottom;
    const screenView = window.innerHeight;

    if (sectionTopFarFromView < screenView / 4) {
        startCount();

    }
})
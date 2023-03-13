'use strict'

const sun = document.querySelector("#sun");

const sunX =600;
const sunY = 300;

let rad = (deg, speed) => deg * speed / 180;
let px = (coord) => coord + "px";

sun.style.top = px(sunY);
sun.style.left = px(sunX);

// const radius = 150;

function setPlanet(id, speed, radius) {
    let deg = 0;
    const planets = document.querySelector("#" + id);

    setInterval(() => { 
        const x = sunX + radius * Math.cos(rad(deg, speed));
        const y = sunY + radius * Math.sin(rad(deg, speed));
        planets.style.top = px(y);
        planets.style.left = px(x);
        deg--;
    }, 10);
};

function setSattelite(id, planetId, speed, radius) {
    let deg = 0;
    const sattelite = document.querySelector("#" + id);
    const planet = document.querySelector("#" + planetId);

    setInterval(() => { 
        const planetX = Number(planet.style.left.slice(0, -2));
        const planetY = Number(planet.style.top.slice(0, -2));
        const x = planetX + radius * Math.cos(rad(deg, speed));
        const y = planetY + radius * Math.sin(rad(deg, speed));
        sattelite.style.top = px(y);
        sattelite.style.left = px(x);
        deg--;
    }, 10);
};

setPlanet('mercury', 1, 80);
setPlanet('venus', 2, 115);
setPlanet('earth', 2.4, 160);
setPlanet('mars', 2.8, 200);
setPlanet('jupiter', 1.5, 250);
setPlanet('saturn', 2.4, 320);
setPlanet('uranus', 1.9, 380);
setPlanet('neptune', 2.1, 430);
setPlanet('pluto', 1.8, 480);
setSattelite('moon', 'earth', 6, 25)

let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

for (let i = 0; i < 700; i++) {
    const star = document.createElement('div');
    const x = Math.round(Math.random() * screenWidth);
    const y = Math.round(Math.random() * screenHeight);
    const size = Math.floor(Math.random() * 4 + 1);
    const delay = Math.round(Math.random() * 300) / 100;

    star.style.left = px(x);
    star.style.top = px(y);

    star.style.width = px(size);
    star.style.height = px(size);
    star.style.animationDelay = delay + 's';

    star.classList.add('star');
    document.body.append(star); 
};


// const suns = document.querySelectorAll(".sunny");

// suns.forEach(function (sunny) {
// const sunsX =600;
// const sunsY = 300;

// // let rads = (deg, speed) => deg * speed / 180;
// let pxs = (coord) => coord + "px";

// sunny.style.top = pxs(sunsY);
// sunny.style.left = pxs(sunsX);

// })






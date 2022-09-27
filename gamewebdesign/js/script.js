
let sign = document.getElementById('signup');
let log = document.getElementById('login');
let disp = document.getElementById('displayall');

let menu = document.querySelector('.menu');
let nav = document.querySelector('.nav');

let prod = document.querySelector('.market-click');
let prodOne = document.querySelector('.box-one');
let prodTwo = document.querySelector('.box-two');
let prodThree = document.querySelector('.box-three');
let prodFour = document.querySelector('.box-four');
let prodFive = document.querySelector('.box-five');
let prodSix = document.querySelector('.box-six');


function displayAll(){
    disp.style.transform = "translateX(0px)";
}

function closeDisplay(){
    disp.style.transform = "translateX(-1800px)";
    prod.style.visibility = "hidden";
    prodOne.style.visibility = "hidden";
    prodTwo.style.visibility = "hidden";
    prodThree.style.visibility = "hidden";
    prodFour.style.visibility = "hidden";
    prodFive.style.visibility = "hidden";
    prodSix.style.visibility = "hidden";
}

function loginDisplay(){
    sign.style.visibility = "hidden";
    log.style.visibility = "visible";
}

function signupDisplay(){
    log.style.visibility = "hidden";
    sign.style.visibility = "visible";
}

menu.addEventListener('click', () => {
    nav.classList.toggle('active')
})

// For products
function clickMarketOne(){
    prod.style.visibility = "visible";
    prodOne.style.visibility = "visible";
    prodTwo.style.visibility = "hidden";
    prodThree.style.visibility = "hidden";
    prodFour.style.visibility = "hidden";
    prodFive.style.visibility = "hidden";
    prodSix.style.visibility = "hidden";
}

function clickMarketTwo(){
    prod.style.visibility = "visible";
    prodOne.style.visibility = "hidden";
    prodTwo.style.visibility = "visible";
    prodThree.style.visibility = "hidden";
    prodFour.style.visibility = "hidden";
    prodFive.style.visibility = "hidden";
    prodSix.style.visibility = "hidden";
}

function clickMarketThree(){
    prod.style.visibility = "visible";
    prodOne.style.visibility = "hidden";
    prodTwo.style.visibility = "hidden";
    prodThree.style.visibility = "visible";
    prodFour.style.visibility = "hidden";
    prodFive.style.visibility = "hidden";
    prodSix.style.visibility = "hidden";
}

function clickMarketFour(){
    prod.style.visibility = "visible";
    prodOne.style.visibility = "hidden";
    prodTwo.style.visibility = "hidden";
    prodThree.style.visibility = "hidden";
    prodFour.style.visibility = "visible";
    prodFive.style.visibility = "hidden";
    prodSix.style.visibility = "hidden";
}

function clickMarketFive(){
    prod.style.visibility = "visible";
    prodOne.style.visibility = "hidden";
    prodTwo.style.visibility = "hidden";
    prodThree.style.visibility = "hidden";
    prodFour.style.visibility = "hidden";
    prodFive.style.visibility = "visible";
    prodSix.style.visibility = "hidden";
}

function clickMarketSix(){
    prod.style.visibility = "visible";
    prodOne.style.visibility = "hidden";
    prodTwo.style.visibility = "hidden";
    prodThree.style.visibility = "hidden";
    prodFour.style.visibility = "hidden";
    prodFive.style.visibility = "hidden";
    prodSix.style.visibility = "visible";
}
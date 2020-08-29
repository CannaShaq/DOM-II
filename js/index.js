const navBrand = document.querySelector(".main-navigation h1");             //1xx
const navLinks = document.querySelector(".main-navigation a");

const busImg = document.querySelector(".intro img");                        //4xx
const letsGoTitle = document.querySelector(".text-content h2");             //5xx
const letsGoBody = document.querySelector(".content-section p");            //6xx
const advAwaitsTitle = document.querySelector(".inverse-content h2") ;      //7
const advAwaitsImg = document.querySelector(".img-content img");            //8
const pickDestinTitle = document.querySelector(".content-destination h2")   //9
const destinChoices = document.querySelector(".content-pick h4")            //10xx



//1
busImg.addEventListener("dblclick", () => {
    busImg.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
});

//2
busImg.addEventListener("mouseover", () => {
    busImg.src = "img/fun-bus.jpg"
});

//3
destinChoices.addEventListener("mouseenter", () => {
    destinChoices.style.color = 'darkred'
});

//4
destinChoices.addEventListener("mouseleave", () => {
    destinChoices.style.color = 'black'
});

//5
navBrand.addEventListener("mousedown", () => {
    navBrand.style.fontSize = '600%'
});

//6
navBrand.addEventListener("mouseup", () => {
    navBrand.style.fontSize = '400%'
});

//7
letsGoBody.addEventListener("drag", () => {
    letsGoBody.style.color = "crimson"
});

//8
letsGoBody.addEventListener("dragend", () => {
    letsGoBody.style.color = "black"
});

//9
letsGoTitle.addEventListener("mouseout", () => {
    letsGoTitle.style.backgroundColor = 'darkgreen'
});

//10
advAwaitsTitle.addEventListener("click", (e) => {
    advAwaitsTitle.style.color = 'yellow'
    advAwaitsTitle.classList.toggle('change')
    e.stopPropagation()
});

//prevent default
navLinks.addEventListener("click", (e) => {
    e.preventDefault();
})
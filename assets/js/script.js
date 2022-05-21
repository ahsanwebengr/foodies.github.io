// Color change on scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

//Navbar Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
});

// counter 
var saving = document.querySelector("#num1");

let count1 = 1 ;
setInterval(() => {
    if(count1 < 1278){
        count1++;
        saving.innerHTML = count1;
    }
}, 1);

var photos = document.querySelector("#num2");

let count2 = 1 ;
setInterval(() => {
    if(count2 < 1081){
        count2++;
        photos.innerHTML = count2;
    }
}, 1);

var rocket = document.querySelector("#num3");

let count3 = 1 ;
setInterval(() => {
    if(count3 < 978){
        count3++;
        rocket.innerHTML = count3;
    }
}, 1);


var globes = document.querySelector("#num4");

let count4 = 1 ;
setInterval(() => {
    if(count4 < 998){
        count4++;
        globes.innerHTML = count4;
    }
}, 1);

// OWL CAROUSEL 
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
//   Back to top code 
let backTop = document.querySelector(".bactop");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 400){
        backTop.classList.add("active");
    } else{
        backTop.classList.remove("active");
    }
});
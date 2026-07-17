/* =================================
   NATTHADA PORTFOLIO ANIMATION
================================= */


// Scroll Animation

const sections = document.querySelectorAll("section");


function reveal(){

    sections.forEach(section=>{


        let position = section.getBoundingClientRect().top;

        let screen = window.innerHeight / 1.2;



        if(position < screen){

            section.classList.add("show");

        }


    });


}



window.addEventListener("scroll",reveal);


reveal();






// Navbar Effect


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 80){


        header.style.background =
        "rgba(255,255,255,0.95)";


        header.style.boxShadow =
        "0 10px 30px rgba(0,150,220,.15)";


    }


    else{


        header.style.boxShadow =
        "none";


    }



});








// Image Hover Effect


const images = document.querySelectorAll(".gallery img");



images.forEach(image=>{


image.addEventListener("mouseenter",()=>{


    image.style.transform =
    "scale(1.08)";


});



image.addEventListener("mouseleave",()=>{


    image.style.transform =
    "scale(1)";


});


});







// Welcome Console


console.log(
"🩺 Welcome to NATTHADA Nursing Portfolio"
);

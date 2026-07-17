/* =================================
   NATTHADA NURSING PORTFOLIO
   Animation Script
================================= */



// เลื่อนหน้าแบบ Smooth

document.querySelectorAll('a[href^="#"]').forEach(link=>{

    link.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});




// Animation ตอน Scroll


const sections = document.querySelectorAll(".section");


const reveal = ()=>{


sections.forEach(section=>{


    const position = section.getBoundingClientRect().top;


    const screen = window.innerHeight / 1.2;



    if(position < screen){

        section.style.opacity="1";

        section.style.transform="translateY(0)";

    }


});


}



window.addEventListener("scroll",reveal);





// ตั้งค่าเริ่มต้น Animation


sections.forEach(section=>{


section.style.opacity="0";


section.style.transform="translateY(50px)";


section.style.transition="0.8s ease";


});



reveal();






// เอฟเฟกต์ Navbar เปลี่ยนตอนเลื่อน


window.addEventListener("scroll",()=>{


const nav = document.querySelector("nav");


if(window.scrollY > 50){


nav.style.background="rgba(255,255,255,0.95)";


nav.style.boxShadow=
"0 10px 30px rgba(0,150,220,.2)";


}

else{


nav.style.background=
"rgba(255,255,255,.75)";


}


});






// พิมพ์ข้อความหน้าแรก


const text = 
"Future Nurse | Caring With Knowledge";


let index = 0;



function typing(){


const element =
document.querySelector(".hero-text h2");


if(element && index < text.length){


element.innerHTML += text.charAt(index);


index++;


setTimeout(typing,80);


}


}



window.onload=()=>{


typing();


};






// Hover รูป Certificate


const images =
document.querySelectorAll(".certificate img");



images.forEach(img=>{


img.addEventListener("mouseenter",()=>{


img.style.transform="scale(1.08)";


img.style.transition=".4s";


});



img.addEventListener("mouseleave",()=>{


img.style.transform="scale(1)";


});


});





// Welcome Message


console.log(
"🩺 Welcome to Natthada Nursing Portfolio"
);

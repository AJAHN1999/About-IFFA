// const enterSiteButton = document.querySelector(".enterSite");
// enterSiteButton.addEventListener("click",()=>{
//     window.location.href = "./home.html"
// })

// const submitButton = document.querySelector(".submitButton");
// submitButton.addEventListener("click",displayForm);

// function displayForm(){
//     const form = document.querySelector(".form");
    
// }

$(document).ready(function(){
    $('.carousel').carousel({interval:2000});
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        stagePadding:50,
        loop:true,
        margin:10,
        nav:true,
        items: 3,
        // responsive:{
        //     0:{
        //         items:1,
        //         nav:true
        //     },
        //     480:{
        //         items:3,
        //         nav:false
        //     },
        //     768:{
        //         items:5,
        //         nav:true,
        //         loop:false
        //     }
        // }
});
  });
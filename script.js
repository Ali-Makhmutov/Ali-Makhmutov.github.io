$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:20,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:20,
            dots:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            loop:false
        }
    }
})

function sign(){
    document.querySelector(".sign_in").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function signup(){
    
    document.querySelector(".sign_up").style.display = "flex";
    document.body.style.overflow = "hidden";
}

function close_in(){
    document.querySelector(".sign_in").style.display = "none";
    document.querySelector(".sign_up").style.display = "none";
    document.body.style.overflow = "auto";
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("usernameup").value = "";
    document.getElementById("password").value = "";
    document.getElementById("email").value = "";
    document.getElementById("repass").value = "";
}


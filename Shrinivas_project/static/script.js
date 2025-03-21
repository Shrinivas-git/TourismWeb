document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slide");

        if (slides.length === 0) {
            console.error("No slides found!");
            return;
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.opacity = "0";
        }

        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.opacity = "1";

        setTimeout(showSlides, 3000);
    }
});


function ad(){
    let addis = document.querySelector(".ad")

    if(addis.style.display  == "block"){
        addis.style.display  = "none"
    }else{
        addis.style.display  = "block"

    }
}
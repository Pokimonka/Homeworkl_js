let reveals = document.querySelectorAll(".reveal");


function isInViewport(){
    const viewportHeight = window.innerHeight;
    reveals.forEach(reveal => {
        const elementTop = reveal.getBoundingClientRect().top;
        const elementBottom = reveal.getBoundingClientRect().bottom;
        if (elementBottom > 0 && elementTop < viewportHeight) {
            reveal.classList.add("reveal_active");
        } else {
            reveal.classList.remove("reveal_active");
        }
    });
};

document.addEventListener("scroll", isInViewport);


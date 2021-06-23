function stickyElement(e) {
    var navbar = document.querySelector(".menu");
    var logoMenu = document.getElementById("logo-menu");
    var scrollValue = window.scrollY;

    if (scrollValue > 100) {
        navbar.classList.add("is-fixed");
        logoMenu.classList.add("fixed");
    } else if (scrollValue < 50) {
        navbar.classList.remove("is-fixed");
        logoMenu.classList.remove("fixed");
    }
}

window.addEventListener("scroll", stickyElement);

document.addEventListener("scroll", () => {
    const backToTop = document.querySelector(".back-to-top-wrapper");
    if (window.scrollY > 500) {
        backToTop.classList.add("active");
    }
    if (window.scrollY < 500) {
        backToTop.classList.remove("active");
    }
});

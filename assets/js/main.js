document.addEventListener("scroll", () => {
    const backToTop = document.querySelector(".back-to-top-wrapper");
    if (window.scrollY > 500) {
        backToTop.classList.add("active");
    }
    if (window.scrollY < 500) {
        backToTop.classList.remove("active");
    }
});

window.addEventListener("scroll", () => {
    let content = document.querySelectorAll("#propos");
    let screnP = window.innerHeight;
    content.forEach(column => {
        let contentPosition = column.getBoundingClientRect().top;

        if (contentPosition < screnP) {
            column.classList.add("anima");
        } else { column.classList.remove("anima") }
    })
});
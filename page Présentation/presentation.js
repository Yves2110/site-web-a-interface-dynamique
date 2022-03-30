window.addEventListener("load", () => {
    let content = document.getElementById("propo");
    let contentPosition = content.getBoundingClientRect().top;
    let screnP = window.innerHeight;
    if (contentPosition < screnP) {
        // alert("hbdzj")
        content.classList.add("anima");
    }

});
window.addEventListener("scroll", () => {
    let content = document.getElementById("propos");
    let contentPosition = content.getBoundingClientRect().top;
    let screnP = window.innerHeight;
    if (contentPosition < screnP) {
        content.classList.add("anima");
    } else { content.classList.remove("anima") }

});
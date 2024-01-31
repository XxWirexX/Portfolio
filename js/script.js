const header = document.querySelector(".header");
window.onscroll = () => {
    header.classList.toggle("sticky",  window.screenY > 100);
}

const icons = document.querySelectorAll(".icons .icon i");
icons.forEach(icon => {
    icon.addEventListener("mouseover", (e) => {
        console.log("test");
        icon.classList.add("bx-tada")
    })
    icon.addEventListener("mouseout", (e) => {
        icon.classList.remove("bx-tada")
    })
})
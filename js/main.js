const elements = {
    nav: document.querySelector(".header"),
    ul: document.querySelector("ul"),
    one: document.querySelector(".sec-one"),
    img: document.querySelector(".all-img"),
    footer: document.querySelector("footer"),
    icon: document.querySelector("#nav-icon"),
    close: document.querySelector("#nav-close"),
    mass: document.querySelector(".message")
}


elements.icon.addEventListener("click", () => {
    
    elements.one.classList.add("hidden") 
    elements.img.classList.add("hidden") 
    elements.footer.classList.add("hidden") 
    elements.icon.classList.add("hidden") 
    elements.mass.classList.add("hidden") 
    elements.nav.classList.add("nav-m") 
    elements.nav.classList.add("list") 
    elements.icon.style.display = "none";
    elements.close.style.display = "initial";
    elements.ul.style.display = "initial";
})

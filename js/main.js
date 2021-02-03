const elements = {
    header: document.querySelector(".header"),
    nav: document.querySelector("nav"),
    ul: document.querySelector(".navbar nav ul"),
    one: document.querySelector(".sec-one"),
    img: document.querySelector(".all-img"),
    footer: document.querySelector("footer"),
    icon: document.querySelector(".nav-icon"),
    close: document.querySelector(".nav-close"),
    mass: document.querySelector(".message")
}


elements.icon.addEventListener("click", () => {
    elements.one.classList.add("hidden") 
    elements.img.classList.add("hidden") 
    elements.footer.classList.add("hidden") 
    elements.icon.classList.add("hidden") 
    elements.mass.classList.add("hidden") 
    elements.header.classList.add("nav-m") 
    elements.nav.classList.add("show") 
    elements.ul.classList.add("list") 
    elements.close.classList.add("show") 
})

elements.close.addEventListener("click", () => {
    elements.one.classList.remove("hidden") 
    elements.img.classList.remove("hidden") 
    elements.footer.classList.remove("hidden") 
    elements.icon.classList.remove("hidden") 
    elements.mass.classList.remove("hidden") 
    elements.header.classList.remove("nav-m") 
    elements.nav.classList.remove("show") 
    elements.ul.classList.remove("list") 
    elements.close.classList.remove("show") 
    elements.icon.classList.remove("hidden") 

})

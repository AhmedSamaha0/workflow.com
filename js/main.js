// =======>> Global Variables <========
let itemsNavbar = document.querySelectorAll(".navbar .nav-link");
let sections = document.querySelectorAll(".container > div[id]");


// =======>> Main Code <========

itemsNavbar.forEach((item) => 
    item.addEventListener("click", (e) => {
        itemsNavbar.forEach((item) => item.classList.remove("active"));
        e.target.classList.add("active");
    })
);
console.log(window.h);
window.addEventListener("scroll", () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        // console.log(section.id, "Height:" + height, "Offset:" + offset, "Top:" + top, "Website Height:" + document.body.scrollHeight);

        let id = section.getAttribute("id");
        if (top >= offset && top < offset + height) {
            itemsNavbar.forEach((item) => item.classList.remove("active"));
            document.querySelector(`.navbar a[href="#${id}"]`).classList.add("active");
        }
    });

})
    
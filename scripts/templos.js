const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    if(nav.classList.contains("open")){
        menu.textContent = "✖";
    }else{
        menu.textContent = "☰";
    }

});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
"Última Modificação: " + document.lastModified;
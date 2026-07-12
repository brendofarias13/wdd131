const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.textContent = nav.classList.contains("open") ? "✖" : "☰";
});

// Rodapé
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
"Última Modificação: " + document.lastModified;

// Navegação
const links = document.querySelectorAll(".navigation a");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        // Remove a classe ativa
        links.forEach(l => l.classList.remove("active"));

        // Adiciona ao link clicado
        link.classList.add("active");
    });
});
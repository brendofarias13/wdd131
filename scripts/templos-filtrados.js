const menu = document.querySelector("#menu");
const nav = document.querySelector(".navigation");
const gallery = document.querySelector(".gallery");
const title = document.querySelector("#titulo");

// Menu Responsivo
menu.addEventListener("click", () => {
    nav.classList.toggle("open");
    menu.textContent = nav.classList.contains("open") ? "✖" : "☰";
});


// =============================
// Rodapé
// =============================

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    "Última Modificação: " + document.lastModified;


// =============================
// Criar cartões dos templos
// =============================

function displayTemples(templesArray) {

    gallery.innerHTML = "";

    templesArray.forEach((temple) => {

        const card = document.createElement("section");
        card.classList.add("temple-card");


        const name = document.createElement("h2");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");


        name.textContent = temple.templeName;

        location.innerHTML =
            `<strong>Local:</strong> ${temple.location}`;

        dedicated.innerHTML =
            `<strong>Consagrado:</strong> ${temple.dedicated}`;

            const areaM2 = (temple.area * 0.092903).toLocaleString("pt-BR", {
                maximumFractionDigits: 0
            });
            
            area.innerHTML =
                `<strong>Tamanho:</strong> ${areaM2} m²`;


        image.src = temple.imageUrl;

        image.alt =
            `Imagem do ${temple.templeName}`;

        image.loading = "lazy";

        image.width = 400;
        image.height = 250;


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);


        gallery.appendChild(card);

    });

}


// Mostrar todos os templos ao carregar

displayTemples(temples);



// =============================
// FILTROS
// =============================


// Todos

document.querySelector("#home")
.addEventListener("click", (event) => {

    event.preventDefault();

    title.textContent = "Todos os Templos";

    displayTemples(temples);

});


// Antigos

document.querySelector("#old")
.addEventListener("click", (event) => {

    event.preventDefault();

    title.textContent = "Templos Antigos";

    const oldTemples = temples.filter((temple) => {

        const year = parseInt(
            temple.dedicated.substring(0,4)
        );

        return year < 1900;

    });


    displayTemples(oldTemples);

});


// Novos

document.querySelector("#new")
.addEventListener("click", (event) => {

    event.preventDefault();

    title.textContent = "Templos Novos";


    const newTemples = temples.filter((temple) => {

        const year = parseInt(
            temple.dedicated.substring(0,4)
        );

        return year > 2000;

    });


    displayTemples(newTemples);

});


// Grandes

document.querySelector("#large")
.addEventListener("click", (event) => {

    event.preventDefault();

    title.textContent = "Templos Grandes";


    displayTemples(

        temples.filter((temple) =>

            temple.area > 90000

        )

    );

});


// Pequenos

document.querySelector("#small")
.addEventListener("click", (event) => {

    event.preventDefault();

    title.textContent = "Templos Pequenos";


    displayTemples(

        temples.filter((temple) =>

            temple.area < 10000

        )

    );

});
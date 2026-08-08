// ==============================
// MENU RESPONSIVO
// ==============================

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#main-navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute("aria-expanded", isOpen);
        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );
    });
}


// ==============================
// ANO ATUAL
// ==============================

const currentYear = document.querySelector("#current-year");
const ano = document.querySelector("#ano");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (ano) {
    ano.textContent = new Date().getFullYear();
}


// ==============================
// ELEMENTOS DOS SABORES
// ==============================

const flavorFilter = document.querySelector("#flavor-filter");
const flavorGrid = document.querySelector("#flavor-grid");
const flavorMessage = document.querySelector("#flavor-message");
const favoriteElement = document.querySelector("#favorite-flavor");


// ==============================
// DADOS DOS SABORES
// ==============================

const flavors = [
    {
        name: "Ninho",
        category: "tradicionais",
        description: "Brownie cremoso com o delicioso sabor de Ninho.",
        image: "imagens/ninho.jpeg"
    },

    {
        name: "Brigadeiro",
        category: "tradicionais",
        description: "Brownie clássico coberto com brigadeiro.",
        image: "imagens/brigadeiro.jpeg"
    },

    {
        name: "Nutella",
        category: "especiais",
        description: "Brownie irresistível com o sabor marcante de Nutella.",
        image: "imagens/nutella.jpeg"
    },

    {
        name: "Doce de Leite",
        category: "especiais",
        description: "Brownie recheado com o sabor cremoso de doce de leite.",
        image: "imagens/docedeleite.jpeg"
    },

    {
        name: "Brigadinho",
        category: "tradicionais",
        description: "Brownie com uma deliciosa cobertura de brigadeiro.",
        image: "imagens/brigadinho.jpeg"
    },

    {
        name: "Cupuaçu",
        category: "frutados",
        description: "A combinação do brownie com o sabor especial do cupuaçu.",
        image: "imagens/cupuacu.jpeg"
    },

    {
        name: "Maracujá",
        category: "frutados",
        description: "Brownie com o sabor refrescante e marcante do maracujá.",
        image: "imagens/maracuja.jpeg"
    },

    {
        name: "Beijinho",
        category: "tradicionais",
        description: "Brownie com o sabor delicado e cremoso de beijinho.",
        image: "imagens/beijinho.jpeg"
    },

    {
        name: "Ninho com Nutella",
        category: "especiais",
        description: "A combinação irresistível do creme de Ninho com o sabor marcante de Nutella.",
        image: "imagens/ninhocomnutella.jpeg"
    }
];


// ==============================
// MOSTRAR FAVORITO
// ==============================

function showFavorite(flavorName) {

    if (favoriteElement) {
        favoriteElement.textContent =
            `Seu sabor favorito é ${flavorName}! ❤️`;
    }
}


// ==============================
// SALVAR FAVORITO
// ==============================

function saveFavorite(flavorName) {

    localStorage.setItem("favoriteFlavor", flavorName);

    showFavorite(flavorName);

    updateFavoriteButtons();
}


// ==============================
// ATUALIZAR BOTÕES DE FAVORITO
// ==============================

function updateFavoriteButtons() {

    const savedFavorite =
        localStorage.getItem("favoriteFlavor");

    const favoriteButtons =
        document.querySelectorAll(".favorite-button");

    favoriteButtons.forEach(button => {

        const flavorName =
            button.dataset.flavor;

        if (flavorName === savedFavorite) {

            button.textContent = "Favoritado ❤️";

            button.setAttribute(
                "aria-label",
                `${flavorName} está nos favoritos`
            );

        } else {

            button.textContent = "Favoritar";

            button.setAttribute(
                "aria-label",
                `Favoritar sabor ${flavorName}`
            );
        }
    });
}


// ==============================
// EXIBIR SABORES
// ==============================

function displayFlavors(selectedCategory = "todos") {

    if (!flavorGrid) {
        return;
    }

    flavorGrid.innerHTML = "";

    const filteredFlavors =
        selectedCategory === "todos"
            ? flavors
            : flavors.filter(
                flavor =>
                    flavor.category === selectedCategory
            );


    if (filteredFlavors.length === 0) {

        if (flavorMessage) {
            flavorMessage.textContent =
                "Nenhum sabor encontrado.";
        }

        return;
    }


    if (flavorMessage) {

        flavorMessage.textContent =
            `${filteredFlavors.length} sabor(es) encontrado(s).`;
    }


    filteredFlavors.forEach(flavor => {

        const article =
            document.createElement("article");

        article.classList.add("flavor-card");


        article.innerHTML = `

            <div class="flavor-image">

                <img
                    src="${flavor.image}"
                    alt="Brownie sabor ${flavor.name}"
                    width="400"
                    height="300"
                    loading="lazy">

            </div>


            <div class="flavor-content">

                <h3>
                    ${flavor.name}
                </h3>


                <p>
                    ${flavor.description}
                </p>


                <p class="flavor-sizes">

                    Tradicional:
                    R$ 5,00 · 5 × 5 cm · 40–50 g

                    <br>

                    Grande:
                    R$ 7,00 · 6 × 6 cm · 75–80 g

                </p>


                <button
                    type="button"
                    class="favorite-button"
                    data-flavor="${flavor.name}"
                    aria-label="Favoritar sabor ${flavor.name}">

                    Favoritar

                </button>

            </div>
        `;


        flavorGrid.appendChild(article);
    });


    updateFavoriteButtons();
}


// ==============================
// EVENTO DOS FAVORITOS
// ==============================

if (flavorGrid) {

    flavorGrid.addEventListener("click", event => {

        const button =
            event.target.closest(".favorite-button");

        if (!button) {
            return;
        }

        const flavorName =
            button.dataset.flavor;

        saveFavorite(flavorName);
    });
}


// ==============================
// RECUPERAR FAVORITO SALVO
// ==============================

const savedFavorite =
    localStorage.getItem("favoriteFlavor");

if (savedFavorite) {
    showFavorite(savedFavorite);
}


// ==============================
// FILTRO DE SABORES
// ==============================

if (flavorFilter) {

    flavorFilter.addEventListener("change", () => {

        displayFlavors(
            flavorFilter.value
        );
    });
}


// ==============================
// CARREGAR SABORES
// ==============================

if (flavorGrid) {
    displayFlavors();
}


// ==============================
// FORMULÁRIO DE CONTATO
// ==============================

const formulario =
    document.querySelector("#form-contato");

const mensagemSucesso =
    document.querySelector("#mensagem-sucesso");

if (formulario && mensagemSucesso) {

    formulario.addEventListener("submit", event => {

        event.preventDefault();

        mensagemSucesso.textContent =
            "Mensagem enviada com sucesso! Obrigado por entrar em contato com a Mr. Brownie Gourmet.";

        formulario.reset();
    });
}
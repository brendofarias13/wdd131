const ano = document.querySelector("#ano");
ano.textContent = new Date().getFullYear();

const modificacao = document.querySelector("#ultimaModificacao");
modificacao.textContent = `Última Modificação: ${document.lastModified}`;
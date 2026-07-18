// ================================
// WDD131 - S03 Página do País
// Autor: Brendo da Silva Farias
// ================================

// Dados do clima (estáticos conforme a atividade)
const temperatura = 8;
const velocidadeVento = 12;

// Função obrigatória da atividade
function calcularSensacaoTermica(temp, vento) {
    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(vento, 0.16)) +
        (0.3965 * temp * Math.pow(vento, 0.16))
    );
}

// Elementos da página
const sensacao = document.querySelector("#sensacao");
const ano = document.querySelector("#ano");
const modificado = document.querySelector("#modificado");

// Rodapé
ano.textContent = new Date().getFullYear();
modificado.textContent = document.lastModified;

// Sensação térmica
if (temperatura <= 10 && velocidadeVento > 4.8) {

    const resultado = calcularSensacaoTermica(
        temperatura,
        velocidadeVento
    );

    sensacao.textContent = `${resultado.toFixed(1)} °C`;

} else {

    sensacao.textContent = "N/A";

}
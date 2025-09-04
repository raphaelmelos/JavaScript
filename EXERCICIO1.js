let anoAtual = 2025;
const anoNascimento = 1999;

const idade = anoAtual - anoNascimento;

console.log(idade);

if (idade < 18) {
    console.log("Você é menor de idade")
} else (idade > 18) {
    console.log("Você já é maior de idade")
}

let nome = prompt("Digite seu nome:");
console.log("O nome digitado é: " + nome);

// Seleciona o input pelo ID
let meuInput = document.getElementById("meuInput");

// Adiciona um "ouvinte" para um evento (ex: keyup, que dispara a cada tecla pressionada)
meuInput.addEventListener("keyup", function() {
  // Obtém o valor atual do input
  let valorDigitado = meuInput.value;
  console.log("Valor atual:", valorDigitado);
});

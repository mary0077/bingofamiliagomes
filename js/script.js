var limite = 75;
var nums = [];
var finalizado = false;

// Elementos do DOM
var title = document.getElementById('title');
var botao = document.getElementById('caller');
var botaoReset = document.getElementById('rstbtn');
var lastNumP = document.getElementById('lastNum');
var numsP = document.getElementById('nums');
var setores = document.getElementById('setores');

// Função para gerar números inteiros aleatórios
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para sortear um novo número
function newNum() {
  if (!finalizado) {
    // Sorteia um número aleatório entre 1 e o limite
    var newNum = randomInt(1, limite);

    // Verifica se o número já foi sorteado
    if (!nums.includes(newNum)) {
      // Adiciona o número à lista de números sorteados
      nums.push(newNum);

      // Exibe o número sorteado com animação
      lastNumP.innerHTML = `<h1>${newNum}</h1>`;

      // Adiciona o novo número à lista de sorteados
      numsP.innerHTML = nums.join(', ');

      // Atualiza o contador de números restantes
      var restantes = limite - nums.length;
      setores.innerHTML = `<h2>Faltam ${restantes} números para o Bingo!</h2>`;

      // Confere se todos os números foram sorteados
      if (nums.length == limite) {
        title.innerHTML += " - Finalizado";
        botao.disabled = true; // Desabilita o botão de sortear
        finalizado = true;
      }
    } else {
      // Se o número já foi sorteado, tenta novamente
      newNum();
    }
  }
}

// Função para reiniciar o jogo
function reset() {
  nums = [];
  finalizado = false;
  botao.disabled = false;
  title.innerHTML = "Bingo!";
  lastNumP.innerHTML = "";
  numsP.innerHTML = "";
  setores.innerHTML = "";
}

// Adiciona o ouvinte de evento para o botão de sortear
botao.addEventListener('click', newNum);

// Adiciona o ouvinte de evento para o botão de reset
botaoReset.addEventListener('click', reset);

// Adiciona o ouvinte de evento para a tecla Enter (keyCode 13)
document.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    newNum();
  }
});

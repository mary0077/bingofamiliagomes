var limite = 80;
var nums = [];
var finalizado = false;

// Elementos do DOM
var title = document.getElementById('title');
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
      const roulette = document.getElementById('roulette');

      // Reinicia a roleta com animação
      roulette.style.animation = 'spin 3s cubic-bezier(0.42, 0, 0.58, 1)';
      
      setTimeout(() => {
          // Para a roleta após 3 segundos
          roulette.style.animation = 'none';

          // Sorteia o número e exibe
          var newNum = randomInt(1, limite);

          if (!nums.includes(newNum)) {
              nums.push(newNum);
              lastNumP.innerHTML = `<h1>${newNum}</h1>`;
              numsP.innerHTML = nums.join(', ');
              setores.innerHTML = `<h2>Faltam ${limite - nums.length} números para o Bingo!</h2>`;

              if (nums.length == limite) {
                  title.innerHTML += " - Finalizado";
                  finalizado = true;
              }
          } else {
              newNum();
          }
      }, 3000); // Aguarda o tempo da animação
  }
}


// Função para reiniciar o jogo
function reset() {
  nums = [];
  finalizado = false;
  title.innerHTML = "Bingo!";
  lastNumP.innerHTML = "<h1>Começar</h1><h2>Clique aqui para um novo jogo</h2>";
  numsP.innerHTML = "";
  setores.innerHTML = "";
}

// Adiciona o ouvinte de evento para o botão de reset
botaoReset.addEventListener('click', reset);

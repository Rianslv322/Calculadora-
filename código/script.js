function inserir(valor) {
  const tela = document.getElementById('tela');
  if (tela.value === "0") {
    tela.value = valor; 
  } else {
    tela.value += valor;
  }
}

function limpar() {
  document.getElementById('tela').value = "0";
}


function calcular() {
  const tela = document.getElementById('tela');
  try {

    tela.value = eval(tela.value);
  } catch (erro) {
    tela.value = "Erro";
  }
}

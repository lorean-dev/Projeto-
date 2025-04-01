//importando variaveis
import variaveis from "./variaveis.js"

//gera um numero alestorio na tela
 function gerarNumeroAleatorio(){
  
let numeroAleatorio = Math.floor(Math.random()*10);

variaveis.exibirTela.textContent = "O numero foi gerado escolha um numero de 1 a 10";

variaveis.exibirTelaValor = numeroAleatorio;

//mudar cor do botao
variaveis.NovoJogo.classList.add("botao_enviar");

};
//

//comparar resultado
function ComparaResultado(usuario,tela){
 //pega a string da tela e transforma em number
 let exibirTentativas = Number(variaveis.NumeroTentativas.textContent);
 
 
 if (usuario == tela ){
  alert("voce venceu");
  
  // aqui enbaixo reseta o jogo
  
  //restaurar cor do botao
  variaveis.NovoJogo.classList.remove("botao_enviar");

//restaurar tela de dica
variaveis.Teladica.textContent = "aqui sera mostrada as dicas";
  //restaurar numero de tentativas
  variaveis.NumeroTentativas.textContent="undefine"
  //restaurar tela de dicas
  variaveis.NumeroTentativas.textContent = 5;
  
  //restaurar a tela
  variaveis.exibirTela.textContent =
  "clique no botao \"comecar\" abaixo para gerar um numero. \n aqui sera gerado o numero aleatório "
  //limpa o numero do input
variaveis.digitarNumero.value = undefined;
  
 }
 
 else if (variaveis.NumeroTentativas.innerText== 1){
  alert ("voce perdeu");
  // aqui enbaixo reseta o jogo
  
  //restaurar cor do botao
  variaveis.NovoJogo.classList.remove("botao_enviar");
  
//restaurar tela de dica
variaveis.Teladica.textContent = "aqui sera mostrada as dicas";
  //restaurar numero de tentativas
  variaveis.NumeroTentativas.textContent="undefine"
  //restaurar tela de dicas
  variaveis.NumeroTentativas.textContent = 5;
  
  //restaurar a tela
  variaveis.exibirTela.textContent =
  "clique no botao \"comecar\" abaixo para gerar um numero. \n aqui sera gerado o numero aleatório "
  //limpa o numero do input
variaveis.digitarNumero.value = undefined;
  
  
 }
 
 else if (usuario < tela){
  
  // atuqliza oe valores na tela de tesntativas e dica
  variaveis.NumeroTentativas.textContent = exibirTentativas-1;
  exibirTentativas-= 1;
  
  variaveis.Teladica.textContent =`o valor escondido e mais alto, voce so tem mais ${exibirTentativas} tentativas`;
  
  //limpa o numero do input
  variaveis.digitarNumero.value=undefined;
 }
 
 else if (usuario > tela) {
  
  // atuqliza oe valores na tela de tesntativas e dica
  variaveis.NumeroTentativas.textContent = exibirTentativas-1;
  exibirTentativas-= 1;
 
 variaveis.Teladica.textContent = `o valor escondido e mais baixo, voce so tem mais ${exibirTentativas} tentativas`;
 
   //limpa o numero do input
  variaveis.digitarNumero.value = undefined;
 
}
// reseta o jogo caso o jogador perder else if(){}
else{};
 
};


//exportando pro arwuivo principal maim
export{gerarNumeroAleatorio,ComparaResultado};
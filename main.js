import{gerarNumeroAleatorio,ComparaResultado} from "./funcoes.js";

import variaveis from "./variaveis.js"

//fim das importaçoes



variaveis.NovoJogo.onclick = function(){
 
if (variaveis.NumeroTentativas.value==undefined){
  
 gerarNumeroAleatorio();
variaveis.NumeroTentativas.textContent=Number(5);
console.log(variaveis.NumeroTentativas.textContent);
}else{alert("o jogo ainda nao acabou");
 
};
};


variaveis.enviaInput.onclick = function(){
  
  
  
 if( variaveis.NumeroTentativas.innerText=== "undefined"){

alert("comece o jogo");

 
} else { 
 
 if(Number(variaveis.digitarNumero.value)== 0  ){
  
alert("digite um numero");

}else {let usuario = variaveis.digitarNumero.value;
let tela = variaveis.exibirTelaValor;
ComparaResultado(usuario, tela);};
 
};
 
};







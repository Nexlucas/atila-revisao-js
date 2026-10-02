const textoElemento = document.getElementById("texto");
const teuBotaoElemento = document.getElementById("teuBotao");

teuBotaoElemento.addEventListener("click", function(){
    textoElemento.textContent = "Teto alterado com o click!!"
})
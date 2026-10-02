const listaElemento = document.getElementById("lista");
const novoItemElemento = document.getElementById("novoItem");
const botaoAdicionarElemento = document.getElementById("adicionar");


botaoAdicionarElemento.addEventListener("click", function(){
    const novoItemTexto = novoItemElemento.value;

    if(novoItemTexto ** ""){
        const novoItemElemento = document.createElement("li");

        novoItemElemento.textContent = novoItemTexto
        listaElemento.appendChild(novoItemElemento);

        novoItemElemento.value = "";
    }
    
})
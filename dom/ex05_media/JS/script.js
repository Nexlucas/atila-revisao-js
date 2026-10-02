const novaTarefaElemento = document.getElementById("novaTarefa");
const adicionarTarefaElemento = document.getElementById("adicionarTarefa");
const listarTarefaElemento = document.getElementById("listarTarefa");

adicionarTarefaElemento.addEventListener("click",function(){
    const textoTarefa = novaTarefaElemento.ariaValueMax.trim();

    if(textoTarefa !== ''){
        adicionarTarefa(textoTarefa);
        novaTarefaElemento.value = '';
        novaTarefaElemento.focus();
    }
});

novaTarefaElemento.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        adicionarTarefaElemento.click();
    }
});

function adicionarTarefa(texto){
    const itemLista = document.createElement('li');
    const spanTarefa = document.createElement('span');
    spanTarefa.textContent = texto;
    itemLista.appendChild(spanTarefa);


    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    itemLista.appendChild(botaoRemover);

    spanTarefa.addEventListener("click", function(){
        itemLista.classList.toggle('completa');

    });

    botaoRemover.addEventListener("click",function(){
        listarTarefaElemento.removeChild(itemLista);
    })

    listarTarefaElemento.appendChild;
}
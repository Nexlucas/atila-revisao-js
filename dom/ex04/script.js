const meuDivElemento = document.getElementById("meuDiv");

meuDivElemento.addEventListener("mouseover", function(){
    meuDivElemento.style.background = "rgb(255, 106, 106)";
})

meuDivElemento.addEventListener("mouseout", function(){
    meuDivElemento.style.background = "lightblue";
})
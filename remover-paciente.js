// O evento de clicar duas vezes em qualquer td, o pai mais proximo, q é o tr, é removido através do event.target.parentNode 
document.querySelector("#tabela-pacientes").addEventListener("dblclick", function(event){
    event.target.parentNode.remove();
});
        
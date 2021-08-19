//Faz uma requisicao para uma API, pega o texto da resposta à essa requisicao, transforma em um objeto javascript e adiciona na tabela
document.querySelector("#buscar-pacientes").addEventListener("click", function(){
    var request = new XMLHttpRequest();
    request.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    request.send()
    request.addEventListener("load", function(){
        var pacientes = JSON.parse(request.responseText);
        pacientes.forEach(function(paciente){
            if (request.status == 200) {
                var pacienteTr = montaTr(paciente); 
                var corpoDaTabela = document.querySelector("#tabela-pacientes");
                corpoDaTabela.appendChild(montaTr(paciente));
            }

        });
    });
});
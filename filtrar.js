//filtrando pelo nome
document.querySelector(".filtrar").addEventListener("input", function(){

    
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){

        for (var i=0; i < pacientes.length; i++){
            var nome = pacientes[i].querySelector(".info-nome").textContent;
            var expressao = new RegExp(this.value, "i");
    
            if (!expressao.test(nome)){
                pacientes[i].classList.add("ocultar");
            }else{
                pacientes[i].classList.remove("ocultar");
            }
        }

    }else{
        pacientes.forEach(function(paciente){
            var nome = paciente.querySelector(".info-nome").textContent;
            paciente.classList.remove("ocultar");
        });
    }


});
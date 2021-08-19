
var todosPacientes = document.querySelectorAll(".paciente");
for (var i=0; i < todosPacientes.length; i++){
    var peso = todosPacientes[i].querySelector(".info-peso").textContent;
    var altura = todosPacientes[i].querySelector(".info-altura").textContent;
    var imc = todosPacientes[i].querySelector(".info-imc");
    imc.textContent = calculaImc(peso, altura)
    todosPacientes[i].querySelector(".info-imc").style.color = "red";
    
}

var list = document.querySelectorAll(".lista-produtos");
for(var i = 0 ; i <  list.length; i++){
    console.log(list[i]);
}    


var titulos = document.querySelectorAll("h1");
for(var i = 0 ; i <  titulos.length ; i++){
    var titulo = titulos[i];
    console.log(titulo.classList);
    
}

function calculaImc(peso, altura){
    
    var imc = peso / (altura * altura);
    return imc.toFixed(0);
}

// innerHTL retorna o HTML interno de um elemento em string, e vc consegue alterar
console.log(document.querySelector(".lista-produtos").innerHTML);
console.log(document.querySelector("#testeDoInner").innerHTML);





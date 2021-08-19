
// adicionando evento quando clica no botao
document.querySelector("#adicionar-paciente").addEventListener("click", function(event){

    // previni o comportamento padrão do form
    event.preventDefault();

    var form = document.querySelector("#formulario");
    var objetoPaciente = ObterDadosForm(form);
    var erros = validaPaciente(objetoPaciente);

    if (erros.length > 0){
        setaMensagemErroNoHhml(erros);
        return;
    }

    var pacienteTr = montaTr(objetoPaciente);

    //atrela a tr dentro da tbody
    var corpoDaTabela = document.querySelector("#tabela-pacientes");
    corpoDaTabela.appendChild(pacienteTr);

    //reset é uma propriedade que faz com que os campos do form sejam resetados
    form.reset();

    var div = document.querySelector(".mensagem-erro");
    var ul = div.querySelector("ul");
    ul.innerHTML = "";

})

function ObterDadosForm(form){

    //Pego os dados do usuario através do atributo name e cria um objeto
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
}

function montaTr(paciente){

        // crio o elemento html para receber os valores vindo da tela
        var pacienteTr = document.createElement("tr");
        pacienteTr.classList.add("paciente");
    
        // atrelo os elementos td no tr
        pacienteTr.appendChild(montaElemento(paciente.nome, "info-nome", "td"));
        pacienteTr.appendChild(montaElemento(paciente.peso, "info-peso", "td"));
        pacienteTr.appendChild(montaElemento(paciente.altura, "info-altura", "td"));
        pacienteTr.appendChild(montaElemento(paciente.gordura, "info-gordura", "td"));
        pacienteTr.appendChild(montaElemento(paciente.imc, "info-imc", "td"));

        return pacienteTr;

}

function montaElemento(dado, classe, elemento){

    //crio os elementos html, insiro o valor e a class neles

    var createElement;

    if(elemento != "td"){
        createElement = document.createElement(elemento);
        createElement.style.color = "red";
        createElement.textContent = dado;
        createElement.classList.add(classe);

        return createElement;
    }

    createElement = document.createElement("td");
    createElement.textContent = dado;
    createElement.classList.add(classe);

    return createElement;
}

function setaMensagemErroNoHhml(erros){

    var div = document.querySelector(".mensagem-erro");

    //Pego o elemento ul do elemento div, pois ul é filha de div
    var ul = div.querySelector("ul");

    //Aqui estou zerando o html interno do <ul>, q sao os <li>
    ul.innerHTML = "";

    // pra cada elemento da lista erros, realiza uma funcao. O parametro dessa funcao é um elemento da lista erros
    erros.forEach(function(erro){
        
        // se nao tiver class setada para a ul, seta uma
        if(ul.classList.length == 0){
            ul.classList.add("lista-erros");
        }

        //crio o elemento li
        li = montaElemento(erro, "elemento-erro", "li");
        ul.appendChild(li);
        div.appendChild(ul);

    });
}

function validaPaciente(paciente){

    var erros = [];

    if (paciente.nome.length == 0){
        erros.push("Nome em branco");

    }

    if (paciente.peso.length == 0){
        erros.push("Peso em branco");
    }

    return erros;

}


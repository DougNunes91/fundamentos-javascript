document.querySelector("#corpo-postagem").addEventListener("input", function(){
    var postagem = document.querySelector("#corpo-postagem").value;
    var caracteres = postagem.length;

    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = caracteres;
});
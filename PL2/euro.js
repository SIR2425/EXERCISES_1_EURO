

document.addEventListener('DOMContentLoaded', function (e) {
    button = document.getElementById("genBtn");
    button.addEventListener('click', gerachave);

    });


function gerachave(e) { 
    console.log("vou gerar a chave", e);
    listanumeros = document.getElementById("olMain");

    listanumeros.innerHTML = "";

    newli = document.createElement("li");
    newli.innerHTML = Math.floor(Math.random()*50)+1;

    listanumeros.appendChild(newli);
}




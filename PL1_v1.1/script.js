document.addEventListener("DOMContentLoaded", (event) => {
        botao = document.getElementById("genBtn");
        botao.addEventListener("click", geraChave);
    })

    botao = document.getElementById("genBtn");
    
    botao.addEventListener("click", geraChave);
    botao.addEventListener("click",geraJSON);

    // gera array de num numeros entre min e max sem repeticoes
    function gerador(num, min, max) {
        //debugger;
        resultado = new Set();
        while (resultado.size < num) {
            novo = Math.floor(Math.random() * (max - min + 1) + min);
            resultado.add(novo)
        }
        return [...resultado].sort((a,b)=>a-b);
    }
    

function geraJSON() {
        let numeros = gerador(5,1,50);
        let estrelas = gerador(2,1,12);
        
    let chave = {
        numeros: numeros,
        estrelas: estrelas
    };

    chaveJSON = JSON.stringify(chave);
    console.log(chaveJSON);
        
}
    

    function geraChave()  {

        let numeros = gerador(5,1,50);
        let estrelas = gerador(2,1,12);


        let listanumeros = document.getElementById("olMain");
        listanumeros.innerHTML = "";
        for (i=0;i<5;i++) {
            let newli = document.createElement('li')
            newli.innerHTML = numeros[i];
            listanumeros.appendChild(newli);
        }

        let listaestrelas = document.getElementById("olStars");
        listaestrelas.innerHTML = "";
        estrelas.forEach((estrela) => {
            let newli = document.createElement('li');
            newli.innerHTML = estrela;
            listaestrelas.appendChild(newli);
        });
        
    }

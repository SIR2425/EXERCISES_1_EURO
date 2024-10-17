document.addEventListener("DOMContentLoaded", (event) => {
        botao = document.getElementById("genBtn");
        botao.addEventListener("click", consomeChave);
    })

    //botao = document.getElementById("genBtn");
    
    //botao.addEventListener("click", geraChave);
    //botao.addEventListener("click",geraJSON);

    
    


    

    function consomeChave()  {

        let mychave = {};

        fetch("http://localhost:3000/euro")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                afixachave(data);
            })
            .catch(err => console.error('Error:', err));

        //let numeros = gerador(5,1,50);
        //let estrelas = gerador(2,1,12);

        function afixachave(mychave) {

        let listanumeros = document.getElementById("olMain");
        listanumeros.innerHTML = "";
        for (i=0;i<5;i++) {
            let newli = document.createElement('li')
            newli.innerHTML = mychave.numeros[i];
            listanumeros.appendChild(newli);
        }

        let listaestrelas = document.getElementById("olStars");
        listaestrelas.innerHTML = "";
        mychave.estrelas.forEach((estrela) => {
            let newli = document.createElement('li');
            newli.innerHTML = estrela;
            listaestrelas.appendChild(newli);
        });
        
    }
}

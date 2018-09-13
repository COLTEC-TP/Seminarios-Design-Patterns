//Inicia Variaveis
const observable = new Observable();
const input = document.getElementById("input");
let a = 0;
let b = 0;
let c = 0;

// Cria as funções do observable
const updateA = function(data){
    a = data;
}
const updateB = function(data){
    b = data;
}
const updateC = function(data){
    c = data;
}
// Inscreve as funções de observable
observable.subscribe(updateA)
observable.subscribe(updateB)
observable.subscribe(updateC)

// Notifica todos os observables da mudança de dados 
input.addEventListener('keyup', function(e){
    let texto = e.target.value
    observable.notify(texto);
    console.table({
        a:a,
        b:b,
        c:c
    });
})

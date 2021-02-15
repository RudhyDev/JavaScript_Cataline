/*
var person = {
    name:'Rudhy Maycon Pereira da Costa',
    age:29,
    alive:true,
    job:'Procurando',
    graduation:'Engenharia Civil',
    height: 1.83 + ' m',
    weight: 84.5 + ' kg'
} //Essa é uma variavel do tipo object

console.log(person.height) //Mostra no console o campo height do objeto person

var lista = ['Pera', 'Uva', 'Maçã', 'Salada mista']

console.log(lista[1]) //Mostra no console o ítem 1 da variavel lista

console.log(typeof lista)
*/

//CONCATENAÇÃO

/*
var minimo = 1500
var maximo = 5000

console.log('O preço dos meus Projetos varia de R$ ' + minimo + 'até R$ ' + maximo)
*/

//FUNÇÕES

/*
function action() {
    console.log('Realiza a Função')
}

action()

function somar(){
    return 45*Math.PI
}
console.log(somar() + Math.PI)
*/

//CONDICIONAIS

/*
var isActive = false
var message = ''

if(isActive){
    message = 'Está Ativo'
} else {
    message = 'Não está Ativo'
}
console.log(message)

*/

//USANDO O SWITCH
/*
var trafficLight = 'vermelho'
var message = ''

switch(trafficLight){
    case 'verde':
        message = 'Pode passar'
        break
    case 'amarelo':
        message = 'Atenção'
        break
    case 'vermelho':
        message =  'Pare'
        break
    default:
        message = 'Valor Inválido'    
}

console.log(message)
*/

//LOOPINGS

/*
for(i=0; i<=25; i++) {
    console.log(i)
}
*/

/*
var i=Math.PI**4
while(i>Math.PI){
    console.log(i)
    i /= Math.PI**2
}
*/

//ARRAYS

/*
var arrNOmes = ['Rudhy', 'Diego', 'Fulano', 'Beltrano']

for (var i = 0; i < arrNOmes.length; i++) {
    console.log(arrNOmes[i])
}
*/

/*
var arrNOmes = ['Rudhy', 'Diego', 'Fulano', 'Beltrano']

var nomeinfo = prompt('Informe um nome')

if (arrNOmes.indexOf(nomeinfo) !== -1){
    console.log(nomeinfo+' está na lista')
}else{
    console.log(nomeinfo+' não está na lista')
}

*/
//Manipulando a DOM

/*var input = document.getElementById('idade')
console.log(input)
*/
/*
var input = document.querySelector('body div#app h1') 
console.log(input)
*/
//INTERAÇÕES COM MOUSE E TECLADO
/*
var button = document.querySelector('#app button')  //trabalha em cima da tag button do html
var input = document.querySelector('#app input#idade') //trabalha em cima do atributo idade que esta dentro da tag app no html


button.addEventListener('click', function(){
    alert('Sua idade é: ' + input.value + ' anos')
})   //Aqui o javascript pega o valor recebido pelo input e mostra um aleta com concatenação de frases
*/
//OUTRA FORMA

var button = document.querySelector('#app button') 
var input = document.querySelector('#app input#idade')

function showAge(){
    alert('A sua idade é: ' +input.value)
}

button.addEventListener('click', showAge)
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

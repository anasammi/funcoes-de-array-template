function multiplicarPor3(arrayDeNumeros){
  let novoArray = []
  for(let i=0; i<arrayDeNumeros.length; i++){
    novoArray.push(arrayDeNumeros[i] * 3)
  }
  return novoArray
}

const arrayNumerico = [1, 3, 5, 6, 10]

console.log(multiplicarPor3(arrayNumerico))

const retornarPares = (arrayDeNumeros) => {
  let novoArray = []
  for(let i=0; i<arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] % 2 === 0){
      novoArray.push(arrayDeNumeros[i])
    }
  }
  return novoArray
}

console.log(retornarPares(arrayNumerico))

function fazerOperacoes(array, callback){
  const novoArray = callback(array)
  return novoArray
}

console.log("callback multiplicando por 3", fazerOperacoes(arrayNumerico, multiplicarPor3))
console.log("pegar pares em callback", fazerOperacoes(arrayNumerico, retornarPares))

//---------------------------
//map()

// const comoFazerOMap = array.map((elemento, indice, array) => {
//   //modificar cada item do array
//   return //algum valor
// })

//elemento: item que vai mudar a cada iteração do map - OBRIGATÓRIO!!!
//indice: indica o indice atual a cada iteração do array - opcional
//array: representa o próprio array - opcional


//função callback feita separadamente - função nomeada
const multiplicar = (numero) => {
 return numero*3
}

const triplicarValor = arrayNumerico.map(multiplicar)

//função callback direto no map() - função anônima
const mapearEMultiplicar = arrayNumerico.map((numero) => {
  return numero*3
})

console.log("map", triplicarValor)

//--------------------------------------------------------

//filter()

// const comoFazerOFilter = array.filter((elemento, indice, array) => {
//   //codigo que vai filtrar os elementos do array
//   return //booleano - se for true, o elemento entra no novo array
// })

//elemento: item que vai ser filtrado a cada iteração do filter - OBRIGATÓRIO!!!
//indice: indica o indice atual a cada iteração do array - opcional
//array: representa o próprio array - opcional


//callback separada - função nomeada

const retornarNumerosPares = (numero) => {
  return numero%2 === 0
}

const filtrarPares = arrayNumerico.filter(retornarNumerosPares)

console.log("filter", filtrarPares)

//callback direto no filter - função anônima

const pegarPares = arrayNumerico.filter((numero) => {
  return numero%2 === 0
})

console.log("filter2", pegarPares)


//------------------------------------------------------------------

const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 }
]

const adicionarVida = (poke) => {
  const novoPoke = {
    ...poke,
    vida: 100
  }
  return novoPoke
}

console.log(adicionarVida(pokemons[1]))

const pokemonsVidaCheia = pokemons.map(adicionarVida)

console.log("aqui", pokemonsVidaCheia)

const pokemonsDeFogo = pokemons.filter((pokemon) => {
  return pokemon.tipo === "fogo"
})

console.log(pokemonsDeFogo);
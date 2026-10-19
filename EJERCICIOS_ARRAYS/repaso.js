const avengers = {
    nome: 'Steve Rogers',
    clave: 'Capitan America',
    poder: 'Drogas'
}

console.log(avengers.nome)
console.log(avengers.clave)
console.log(avengers.poder)

console.log(nome)
console.log(clave)
console.log(poder)

const extraer = (avengers) => {
    let (nome, clave, poder) = avengers
    console.log(nome)
    console.log(clave)
    console.log(poder)
}

const extraer2 = ({nombre, clave, poder}) => {
    console.log(poder)
}

extraer2(avengers)

const avenger = ['Thor', 'Hawkeye', 'Black Panther']
console.log(avenger[0])
console.log(avenger[1])
console.log(avenger[2])

const [Thor, Ironman, Spiderman] = avenger
console.log(Thor)
console.log(Ironman)
console.log(Spiderman)

const [,, spidi] = avenger
console.log(spidi)

const extraerArray = ([t,i,s]) => {
    console.log(t)
    console.log(i)
    console.log(s)
}

extraerArray(avenger)

//FUNCION

function activar (quien, objeto = 'batiseñal') {
    console.log(`${quien} activo la señal ${objeto}`)
}

activar("Gordon", "alarma")
activar("Gordon")

var hulk = {
    nombre: "Hulk",
    smash: function() {
        setTimeout(() => {
            console.log(this.nombre + " smash!!!")
        },1000)
    }
}

hulk.smash()
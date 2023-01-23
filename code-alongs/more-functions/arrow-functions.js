function displaySomething (something) {
    console.log(something)
}

const showSomething = (something) => {
    console.log(something)
}

const shorterVersion = something => console.log(something)

let shortVersionWithTwoArguments = (argument1, argument2) => argument1 + argument2

console.log(shortVersionWithTwoArguments(7, 3))

shorterVersion('bla bla bla')
showSomething('show this thing')
displaySomething('kasdhfkajsdhfkj')
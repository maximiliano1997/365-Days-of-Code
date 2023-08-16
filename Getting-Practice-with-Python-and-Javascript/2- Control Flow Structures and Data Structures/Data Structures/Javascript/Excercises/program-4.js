// 4-Crear un diccionario con los nombres de tres planetas y sus respectivos números de lunas. Mostrar el número de lunas del primer planeta en el diccionario.



alert(`
    1- Jupiter
    2- Saturno
    3- Urano
`)

const tresPlanetas = {
    "Jupiter": 'El planeta Jupiter tiene 79 Lunas',
    "Saturno": 'El planeta Saturno tiene 83 Lunas',
    "Urano": 'El planeta Urano tiene 27 Lunas',
}

let extra = prompt('Ingresa el numero de Planeta: ')


if (extra == 1) {
    document.write(tresPlanetas['Jupiter'])
}
else if (extra == 2) {
    document.write(tresPlanetas['Saturno'])
}
else if (extra == 3) {
    document.write(tresPlanetas['Urano'])
} else {
    document.write(`${extra} no es un Numero valido..`)
}

console.log(tresPlanetas['Jupiter'])
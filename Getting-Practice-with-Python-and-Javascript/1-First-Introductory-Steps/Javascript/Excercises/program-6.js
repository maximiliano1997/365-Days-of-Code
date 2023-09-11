// 6-Crea un programa que pida al usuario una cantidad en grados Celsius y la convierta a grados Rankine. La fórmula para convertir de Celsius a Rankine es: R = (C + 273.15) * 9/5.



try {
    let userInput = parseFloat(prompt('Ingresa una cantidad en grados Celsius: '))
    if (isNaN(userInput)) {
        throw new Error('No es un numero valido. ')
    }
    let celsius = userInput
    let rankine = (celsius + 273.15) * 9 / 5
    console.log(`La temperatura ${celsius}° Celsius a Rankine es ${parseFloat(rankine)}`)
} catch (error) {
    console.error('Error: ', error.message);
} finally {
    console.log('Gracias!');
}
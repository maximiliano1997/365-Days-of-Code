function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}


var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let result = new ListNode(-1)
    let dummy = result

    console.log(carry, result)
    while (l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0
        let l2Val = l2 ? l2.val : 0

        console.log(l1Val, l2Val)

        let nextDigit = (l1Val + l2Val + carry) % 10
        console.log(nextDigit, '<---- nextDigit')
        result.next = new ListNode(nextDigit)
        result = result.next

        carry = Math.floor((l1Val + l2Val + carry) / 10)
        console.log(carry, '<---- carry')

        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    console.log(dummy.next, '<---- dummy.next')
    return dummy.next
}


let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

addTwoNumbers(l1, l2)
// console.log((2 + 5 + 0) % 10)




/*
No exactamente. El valor de `carry` no representa la cantidad de cálculos realizados anteriormente, sino que tiene un propósito específico en la suma de los dígitos de las listas enlazadas. Aquí te explico en detalle:

### Propósito de `carry`

`carry` es una variable que almacena el acarreo (o "llevada") cuando la suma de los dígitos de dos números en una posición dada es mayor o igual a 10. Este acarreo se suma al cálculo de la siguiente posición en la lista enlazada.

### Cómo Funciona el Acarreo (`carry`)

Cada vez que sumas dos dígitos junto con el acarreo, podrías obtener un valor de dos dígitos (por ejemplo, 15). En tal caso, necesitas llevar el dígito de las decenas (en este ejemplo, 1) a la siguiente posición de la suma.

#### Ejemplo

Supongamos que estamos sumando los siguientes números:
```
  342
+ 465
------
```
Estos números están representados en listas enlazadas en orden inverso como:

- l1: [2, 4, 3] (representa 342)
- l2: [5, 6, 4] (representa 465)

### Iteración por Iteración

1. **Primera Iteración (Unidades)**:
    - `l1Val = 2`, `l2Val = 5`, `carry = 0`
    - Suma: `2 + 5 + 0 = 7`
    - `nextDigit = 7 % 10 = 7`
    - `carry = Math.floor(7 / 10) = 0` (no hay acarreo)
    - Nodo resultante: [7]

2. **Segunda Iteración (Decenas)**:
    - `l1Val = 4`, `l2Val = 6`, `carry = 0`
    - Suma: `4 + 6 + 0 = 10`
    - `nextDigit = 10 % 10 = 0`
    - `carry = Math.floor(10 / 10) = 1` (acarreo es 1)
    - Nodo resultante: [7, 0]

3. **Tercera Iteración (Centenas)**:
    - `l1Val = 3`, `l2Val = 4`, `carry = 1` (del acarreo anterior)
    - Suma: `3 + 4 + 1 = 8`
    - `nextDigit = 8 % 10 = 8`
    - `carry = Math.floor(8 / 10) = 0` (no hay acarreo)
    - Nodo resultante: [7, 0, 8]

El resultado final es [7, 0, 8], que representa el número 807 (la suma de 342 y 465) en orden inverso.

### Resumen

- **`carry` no es la cantidad de cálculos realizados anteriormente**. En cambio, es una variable que se usa para manejar el acarreo en operaciones de suma donde la suma de dos dígitos (más el acarreo anterior) resulta en un número mayor o igual a 10.
- Cada iteración del bucle principal suma los valores de los nodos actuales de las dos listas y el `carry`. El resultado de esta suma se divide en:
  - `nextDigit`: El dígito de las unidades que se añade a la lista resultante.
  - `carry`: El dígito de las decenas que se lleva a la siguiente iteración.

### Código Revisado

Aquí tienes el código con comentarios que ilustran el uso de `carry`:

```javascript
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let result = new ListNode(-1);
    let dummy = result;

    while (l1 || l2 || carry) {
        let l1Val = l1 ? l1.val : 0;
        let l2Val = l2 ? l2.val : 0;

        // Suma de los valores actuales más el acarreo
        let nextDigit = (l1Val + l2Val + carry) % 10;
        result.next = new ListNode(nextDigit);
        result = result.next;

        // Actualizar el acarreo
        carry = Math.floor((l1Val + l2Val + carry) / 10);

        // Moverse a los siguientes nodos
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
    }

    return dummy.next;
}

// Ejemplo de uso
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let result = addTwoNumbers(l1, l2);
while (result) {
    console.log(result.val);
    result = result.next;
}
```

Este código sumará las dos listas enlazadas correctamente, utilizando `carry` para manejar cualquier acarreo que ocurra durante la suma.

*/
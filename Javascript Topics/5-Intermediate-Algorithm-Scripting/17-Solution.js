/*
    Binary Agents

Return an English translated sentence of the passed binary string. The binary string will be space-separated.

For example, for the input "01000001 01110010 01100101 00100000 01111001 01101111 01110101 00100000 01110100 01101000 01100101 01110010 01100101 00111111", the output should be "Are you there?".
 */

// Solution:
function binaryAgent(str) {
    return str.split(' ').map(binary => String.fromCharCode(parseInt(binary, 2))).join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");


/*
    Explained:
    The solution first splits the input string into an array of binary strings using split(' '). Then, it uses map to convert each binary string into its corresponding character using String.fromCharCode and parseInt. Finally, the array of characters is joined into a string using join('').

 */
/*
DNA Pairing

The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2D array. Base pairs are a pair of AT and CG. Match the missing element to the provided character. For example, for the input GCG, the result should be [['G', 'C'], ['C', 'G'], ['G', 'C']]
*/

// Solution:
function pairElement(str) {
    // Define the pairs in a function
    const getPair = char => {
        switch (char) {
            case 'A':
                return ['A', 'T'];
            case 'T':
                return ['T', 'A'];
            case 'C':
                return ['C', 'G'];
            case 'G':
                return ['G', 'C'];
        }
    };

    // Map over each character on the input string and get its pair
    return str.split('').map(getPair);
}

pairElement("GCG");

/*
Explained:

This function defines the DNA pairings using a switch case inside the getPair function. It then maps over each character in the input string and returns its corresponding pair.
*/
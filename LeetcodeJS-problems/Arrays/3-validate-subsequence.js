

array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]


const isSubsequenceValid = (array, sequence) => {

    let seqIndex = 0;

    for (const value of array) {
        if (seqIndex === sequence.length) break;
        if (value === sequence[seqIndex]) seqIndex++, console.log(seqIndex);
    }
    // 
    console.log(seqIndex === sequence.length)
    return seqIndex === sequence.length;
}


isSubsequenceValid(array, sequence);
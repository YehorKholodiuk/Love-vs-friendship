function wordsToMarks(string) {
    let stringTotal = 0;
    for (let i = 0; i < string.length; i++) {
        stringTotal += string.charCodeAt(i);
    }
    stringTotal -= string.length * 96;
    return stringTotal;
}
console.log(wordsToMarks("love"))

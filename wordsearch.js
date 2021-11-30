const wordSearch = (letters, word) => { 
    if (letters.length === 0) return undefined
    
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    let newArr = [];

    for (let x = 0; x < letters.length; x++) {
        for (let y = 0; y < letters[x].length; y++) {
            if (newArr[y] === undefined) {
                newArr.push([]);  
                newArr[y][x] = letters[x][y];
            }
        }
        for (l of newArr) {
            if (l.includes(word)) return true;
        }
        
    }
    return false
}

module.exports = wordSearch


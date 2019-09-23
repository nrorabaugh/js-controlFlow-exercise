/* First Solution */

let v = "";
let numberOfRows = 10;
let numberOfColumns = 10;
for (let i = 0; i < numberOfColumns; i++) {
    for (let i = 0; i < numberOfRows; i++) {
        v += "V"
    }
    v += "\n"
}

console.log(v)

/* Second Solution */

let o= "";
let numberOfLevels = 8;
let l = ""
for (let i = 0; i < numberOfLevels; i++) {
    l += "O"
    o += l
    o+= "\n"
}

console.log(o)

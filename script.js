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

/* Third Solution (upside down triangle) */

let z= "";
let numberOfFloors = 7;
let numberOfIts = 7;
for (let i = 0; i < numberOfFloors; i++) {
    let y = [];
    for (let i = 0; i < numberOfIts; i++) {
    y.push("Y");
    z += y[i]
}
    z += "\n";
    numberOfIts -= 1;
}
console.log(z)

 
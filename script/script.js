let num = 266219;
    
let result = 1;
for (let i = 0; i < String(num).length; i++) {
    result *= String(num)[i];
}
result = result ** 3;

console.log(String(result).substr(0,2));
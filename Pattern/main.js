// Patterns
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    console.log()
}

for (let i = 1; i <= 5; i++) {
    let ascii = 65
    for (let j = 1; j <= i; j++) {
        process.stdout.write(String.fromCharCode(ascii));
        ascii++
    }
    console.log()
}

for (let i = 1; i <= 5; i++) {
    for (let j = 5; j >= i; j--) {
        process.stdout.write("* ");
    }
    console.log()
} 

// Right angle
let prompt = require('prompt-sync')();
let n = Number(prompt('Enter a number'))
for( let i =1; i <= n; i++){
    for(let j = n-1;  j >= i ; j--){
        process.stdout.write("  ")
    }
    for(let j= 1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

// Triangle
for( let i =1; i <= n; i++){
    for(let j = n-1;  j >= i ; j--){
        process.stdout.write(" ")
    }
    for(let j= 1; j<=i; j++){
        process.stdout.write("* ")
    }
    console.log()
}

// X Pattern
for ( i = 1; i <= n; i ++){
    for(let j = 1;  j <= n ; j++){
        if( i == j || i+j == n+1){
            process.stdout.write("*")
         }else{
            process.stdout.write("  ")   
        }
    }
    console.log("  ")
}

// V Pattern
for ( i =1; i <=n ; i++){
    for( j = 1; j <= 2*n-1 ; j++ ){
        if(i == j || i+j == 2*n){
            process.stdout.write("* ")
        }else{
            process.stdout.write("  ")
        }
    }
    console.log(" ")
}
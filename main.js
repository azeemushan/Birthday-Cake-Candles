'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */
function counter(a,b){

    let c=0;
    let al=a.length;
    for(let j=0; j<al; j++){
        if(a[j]==b){
            c++;
        }
    }
    
    return c;
}
function birthdayCakeCandles(candles) {
let x=0;
let max=0;
let l=candles.length;
for(let i=0; i<l; i++){
    if(candles[i]>max){
        max=candles[i];
    }
   
}
x=counter(candles, max)
return x;    

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}

let n = +prompt("Enter an Integer N");
while(!Number.isInteger(n) || n === '') {
    alert('Entered value is not an integer or you put in some "SPACE"! Try again my friend!'); 
    n = +prompt("Enter an Integer");
}
let m = +prompt ("Enter an Integer M bigger than N");
while(!Number.isInteger(m) || m === '' || m<=n) {
    alert('Entered value is not an integer or you put some "Space" or even M less than N! Pay Attention!')
    m = +prompt ("Enter an Integer M bigger than N");
}
const answerBoolean = confirm(`Do you want to skip paired numbers?`);

let sum = 0;
    for(let i = n; i <= m; i++){
    if(answerBoolean && i%2 === 0) continue;
        sum += i;
    } 

console.log(`Number N = ${n}, Number M = ${m}, Do you want to skip paired numbers? = ${answerBoolean}, Sum of Numbers = ${sum}`);

document.write('<pre>');

document.writeln("N =" + n);
document.writeln("M =" + m);
document.writeln("Do you want to skip paired numbers? " + answerBoolean);
document.writeln("Sum is :" + sum);


function isPrime(n){
    for (let i = 2 ; i < n ; i++){
        if (n%i === 0 ){
            return false;
        }        
    }
    
    return n>1;
    
}
function primes(n){
    for (let i = 0; i<n ; i++){
        isPrime(i)?console.log(i,):"";
    }
}
let num = prompt('Enter a number');
console.log(primes(num));

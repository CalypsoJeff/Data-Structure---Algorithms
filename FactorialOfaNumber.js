function Factorial(n){
    let result = 1;
    for(i=2;i<=n;i++){
        result = result*i
    }
    return result
    
}

console.log(Factorial(1))
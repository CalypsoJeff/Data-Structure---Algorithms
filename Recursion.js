
function f(n){
    if(n<=1){
        return
    }
    f(n-1)
 console.log(n)
    f(n-1)
}

let num =3
f(num)

//fibnocci
function fibnoccie(num){
    if(num<=1){
        return num
    }
    return fibnoccie(num-1)+fibnoccie(num-2)
}

let n = 5
let result=fibnoccie(n)
console.log(result)

//factorial
function factorial(num){
    if(num<=1){
        return 1
    }else{
        return num*factorial(num-1)
    }
}

let number = 5
let result1 = factorial (number)
console.log(result1 
)

function Factorial(n){
    let result = 1;
    for(i=2;i<=n;i++){
        result = result*i
    }
    return result
    
}

console.log(Factorial(1))



function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i <= n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
  }
  
  console.log(fibonacci(2)) // [0,1]
  console.log(fibonacci(3)) // [0,1,1]
  console.log(fibonacci(7)) // [0,1,1,2,3,5,8]
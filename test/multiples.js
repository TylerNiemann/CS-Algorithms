let multiples = (num) => {
    let sum = 0;
    if (num == 0) return sum;
    if ( num % 3 === 0 || num % 5 === 0 ) sum + multiples(num - 1);
    else(multiples(num-1));
}
console.log(multiples(100))
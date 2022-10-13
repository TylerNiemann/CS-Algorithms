let fibs = (num) => {
let array = [];
let a = 1;
let b = 0;
let c = 0;
for (let i = 1; i <= num; i++){
    array.push(c);
    b = a;
    a = c;
    c = a + b;
}
return array;
};


let fibsRec = (num) => {
    if (num == 0) return [0]
    if (num == 1) return [0, 1]
    const arr = fibsRec(num - 1)
    return [...arr, arr[num-1] + arr[num-2]]
}


console.log(fibsRec(8));
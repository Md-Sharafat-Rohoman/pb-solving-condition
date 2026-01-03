function sum(a,b){
    console.log(arguments)
    const result = a+b;
    // console.log(result);
    return result;
}
const output = sum(3,5);
console.log(output);
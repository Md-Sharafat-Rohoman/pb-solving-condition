const test = 'h';
if(test){
    console.log('this is truethy value')
}
else{
    console.log('falsey value')
}

const num = 30;
const numResult = (num<=30 && num<60)? 'truethy' : 'falsey';
console.log(numResult);


const isActive = false;
const showUser = () => console.log('show user green');
const hideUser = () => console.log('hide user');
isActive?showUser() : hideUser();


const numb = '10';
const numbResult = numb - 0;
console.log(typeof numbResult)
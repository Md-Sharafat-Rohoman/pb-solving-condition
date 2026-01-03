const josnDataPerson = {
    name: 'Sharafat Rohoman',
    age: 20,
    friends: ['faru','moni'],
    family:{
        fathersName: 'Ala-Uddin',
        mothersName: 'Marjan Begum'
    }
}
console.log(josnDataPerson)
const jsonData = JSON.stringify(josnDataPerson);
console.log(jsonData);
const parseData = JSON.parse(jsonData);
console.log(parseData);

console.log(Object.keys(josnDataPerson))
console.log(Object.values(josnDataPerson))

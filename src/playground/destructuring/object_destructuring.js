
const person = {
    name : 'Simon',
    age: 26,
    location : {
        city: 'Sydney',
        temp: 92
    }
};
console.log(`${person.name} is ${person.age}`);

//----------------------------------------------------

// const name = person.name;
// const age = person.age;
// console.log(`${name} is ${age}`);

//----------------------------------------------------

// const {name,age} = person;
// console.log(`${name} is ${age}`);

// const {name = 'Andrew', age} = person; // default value for name
// console.log(`${name} is ${age}`);

const {name: firstname = 'Andrew', age} = person; // default value for name
console.log(`${firstname} is ${age}`);

//----------------------------------------------------

//a
if(person.location.city && person.location.temp){
    console.log(`It's ${person.location.temp} in ${person.location.city}`);
}
// //b
// const {city, temp} = person.location;
// console.log(`It's ${temp} in ${city}`);

//c 
const {city, temp: temperature} = person.location;
console.log(`It's ${temperature} in ${city}`);

//----------------------------------------------------


const book = {
    title : 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publishername = 'Self Published'} = book.publisher;

console.log(publishername);

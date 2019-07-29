//----------------------------------------------------------

const add = (data) => {
    return data.a + data.b;
}
console.log(add({a: 1, b: 12}));//data is an object here



//----------------------------------------------------------

const add = ({ a, b }) => {
    return a + b;
}
console.log(add({a:1,b:12}));// here we aready know data is gonna be an object
// so we destructure the data into an object {a,b} so we can use it directly.







//------------------------------------------------------------
const add = ({ a, b },c) => {
    return a + b + c;
}

console.log(add({a:1,b:12}, 100));

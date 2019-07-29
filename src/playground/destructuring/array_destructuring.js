const address = ['1299 S Juniper Street', 'Sydney', 'NSW' , '2205'];
console.log(`you are in ${address[1]} ${address[2]}`);

//----------------------------

const [street, city, state, zip] = address;
console.log(`you are in ${city} ${state}`);

//---------------------------

// const [,city,state] = address;
// const [, , state = 'New York'] = address; // with default value;

//-----------------------------

const item = ['coffee hot', '$2.00','2.50','2.75'];
const [coffee, , mediuem] = item;

console.log(`A medium ${coffee} costs ${mediuem}`);


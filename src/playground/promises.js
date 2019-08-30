const promise = new Promise((resolve,reject)=>{
    setTimeout(() =>{
        // resolve({
        //     name:'Simon',
        //     age: 26
        // });
        reject('something went wrong');
    }, 5000);
});
// the code above is usually done by the firebase or other app its not what we
// usually create.

// in promise it can only run resolve OR reject on a single time,
// second, resolve() and reject() can only take one argument
// but we do can pass in an object


console.log('before');

promise.then((data) => {
    console.log('1',data);
}).catch((error)=>{
    console.log('error: ', error)
})
// this is what we use usually

console.log('after');
import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL:process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
  
  };


firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// in the firebase website--authentication--登录方法,we enabled google 
// here we create a googleauthprovider to set authenticate with google
// we can also set it up for github or others like below
// const githubProvider = new firebase.auth.GithubAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

export { firebase, googleAuthProvider, githubAuthProvider,database as default};


// database.ref('expenses').push({
//     description:'Water Bill',
//     note:'null',
//     amount:123,
//     createdAt: 10700
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const expenses = [];

//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key, // key is LnGkJ84K-RPtZTVImMB for example
//             ...childSnapshot.val() 
//         })
//     })


//     console.log(expenses);
//   })

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// });

// // database.ref('expenses/-LnKU8UJQSTosclwbO8X').update({
// //     description:'Rent'
// // })

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val());
// });

// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key,snapshot.val())
// })


// this is the way we write array in firebase

// database.ref('notes/-LnGkJ84K-RPtZTVImMB').update({
//     body:'Buy food'
// })

// .push() will create a new RANDOM key value under the notes like the 'abc' below
// and put what we put inside the push()argument into that random key 
// database.ref('notes').push({
//     title:'Course Topics',
//     body:'React Native,Angular,Python'
// })

// const firebaseNotes = {
//     notes:{
//         abc:{
//             title:'First note',
//             body:'this is my note'
//         },
//         def:{
//             title:'First note',
//             body:'this is my note'
//         }
//     }
// }

// FETCH entire(ref())/location(ref('location')) DATA FROM DATABASE A SINGLE TIME

// database.ref('location').once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val()
//     console.log(val);
//   })
//   .catch((e)=>{
//       console.log('Error fetching data',e);
//   })


// TO HAVE SERVER NOTIFY US OF CHANGES 

// const onValueChange=database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// },(e)=>{
//     console.log('Error with data fetching',0);
// })

// setTimeout(()=>{
//     database.ref('age').set(29);
// }, 3500);
// //this will cancel the subscrition, or single subscription 
// setTimeout(()=>{
//     database.ref().off(onValueChange)
// }, 7500);
// //although we cancel the subscrition, the data still change to 30 at the database
// setTimeout(()=>{
//     database.ref('age').set(30);
// }, 13500);


// const onNameChange = database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job} at ${val.location.city}`)
// },(e)=>{
//         console.log('Error with data fetching',0);
//     })


// database.ref().set({
//     name:'Simon Liu',
//     age: 26,
//     isSingle: false,
//     location:{
//         city:'Sydney',
//         country: 'Australia'
//     }
//     //set() here returns an 'void' promises so we can use .then() directly after this without any arguments in then().
// }).then(() =>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('something wrong happened',e)
// })

// //ref() is a short for refernce and this gives us a reference to a specific part of our database
// // For exaple, SQL server has many tables like courses, students and teachers
// // for firebase it has many refernces just like SQL server tables
// // if we simply use ref() it means we are getting a refernce to the root of the database
// // set() after ref() means we are setting the data to that ref



// // other examples
// // database.ref().set('This is my data');

// // database.ref().set({
// //     age:27
// // })

// database.ref('age').set(27);
// // this time we give it a specific location, so it will only change the age 
// database.ref('location/city').set('Wollongong');
// // this point to a specific location of city under the location object
// database.ref('attributes').set({
//     height:189,
//     weight:150
// }).then(()=>{
//     console.log('2nd Data is saved')
// }).catch((error)=>{
//     console.log('this failed',error)
// })
// // this create a new attributes object under the root ref in database
// // instead of overwriting the whole root ref database using ref().set()
// // this time we give a new unexist ref named attribute here 
// // then it will ass new object to the existing root ref instead of wipping it out


// // //REMOVE METHOD
// database.ref('isSingle').remove()
//     .then(()=>{
//         console.log('Date was removed');
//     }).catch((e) =>{
//         console.log('failed to remove',e)
//     })

// // Remove method using set

// // database.ref('isSingle').set(null);

// database.ref('isSingle').set(true);

// //UPDATE
// database.ref().update({
//     name:'Mike',
//     age:29,
//     job:'Software developer',
//     isSingle:null,
//     'location/city':'Boston'
// })
// update has to be called with an object

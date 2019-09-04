import uuid from 'uuid';
import database from '../firebase/firebase';
import { get } from 'https';

//with thunk middleware now we can return function inside the action 
//before we can only return object inside the action

// action used to store to redux
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// action to store to firebase and redux
export const startAddExpense = (expenseData = {}) =>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid;
        // the auth here is the auth.js file in reducer
        // like if we want the description in our redux state
        // we use getState().expenses.description
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;

       const expense = {description,note,amount,createdAt}

        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        })
        //the second return value here can put the return value to the next then()function 
        //in the test file, we can see we put this return value to the then()
    }
}

export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// why we have to connect firebase to redux?
// if we dont everytime we use connect mapstatetoprops, everytime we want the data from the redux store
// we gonna have to fetch data from the firebase, its not good
export const startRemoveExpense = ({id}={}) =>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({ id }))
        })
    }
}

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) =>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
            dispatch(editExpense(id,updates))
        })
    }
}


//SET_EXPENSES
export const setExpenses = (expenses) =>({
    type:'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () =>{
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            //the return here means inside the startsetexpenses we return a dispatch
            //and inside that dispatch we return an promise
            //this return is required if we want to toss on another then in other files (in app.js)
            // if we dont have this second return, it will have a type error in app.js, which is 'then' is undefined
            //cause here we returned an dispatch not a Promise, we have to add this return to make it return an promise not something else

            //in playground promise, we see const promise = new Promise(()+>{})... this is done by firebase,so here
            // database.ref('expenses').once()...has help us for defining promise, so we can use then()here directly 
            // but for app.js it doesnt define the promise, so here we need to return a promise
            const expenses = [];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id:childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses));
        })
        
    }
}
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
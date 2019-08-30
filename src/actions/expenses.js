import uuid from 'uuid';
import database from '../firebase/firebase';

//with thunk middleware now we can return function inside the action 
//before we can only return object inside the action

// action used to store to redux
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

// action to store to firebase and redux
export const startAddExpense = (expenseDate = {}) =>{
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseDate;

       const expense = {description,note,amount,createdAt}

        return database.ref('expenses').push(expense).then((ref)=>{
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

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


//Action generators - functions that return actions objects

import {createStore} from 'redux';
//before continue:
//take a look at the function_destructuring.js in the destructuring folder
const incrementCount = ({ incrementBy = 1} = {}) => { //{incrementBy} used to be data
    return {
        type: 'INCREMENT',
        // incrementBy: typeof data.incrementBy === 'number' ? data.incrementBy : 1
        // incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
        incrementBy : incrementBy // when default imcrementBy has been set to 1
        //or 
        // increment
    };
};

const decrementBy = ({decrementBy = 1} = {}) => {
    return {
        type : 'DECREMENT',
        decrementBy: decrementBy
    };
};

const reset = () => {
    return {
        type: 'RESET'      
    };
};

const set = ({count} = {}) =>{ //no default value needed for count 
    return {
        type: 'SET',
        count : count
    }
}


//Reducers
//1. Reducers are pure functions, the output only determined by input
//2. never change state or action
// let a = 10;
// const add = (b) => {
//     return a + b;
// };
//like this the add function not only depend on input b but also on global var a



const countReducer = (state = {count:0}, action) => {

    switch(action.type) {
        case 'INCREMENT' : 
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
            return {
                // count:state.count + incrementBy
                count:state.count + action.incrementBy
            };
        case 'DECREMENT' :
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
            return {
                // count:state.count - decrementBy
                count: state.count - action.decrementBy
            };
        case 'RESET' :
            return {
                count:0
            };
        case 'SET':
            return {
                count: action.count
            };
        default: 
            return state;
    }
    
};


const store = createStore(countReducer);


store.subscribe(() => {
    console.log(store.getState());
});


// store.dispatch({
//     type:'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5}));

// store.dispatch({
//     type:'INCREMENT'
// });

store.dispatch(incrementCount());

// store.dispatch({
//     type:'DECREMENT',
//     decrementBy: 10
// });
store.dispatch(decrementBy({ decrementBy: 10 }));

// store.dispatch({
//     type:'RESET'
// });
store.dispatch(reset());

// store.dispatch({
//     type:'DECREMENT'
// });
store.dispatch(decrementBy());


// store.dispatch({
//     type:'SET',
//     count:101
// })
store.dispatch(set({count:101}));



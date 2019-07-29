import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();


// store.dispatch(setTextFilter("water"));

// setTimeout(() => {
//     store.dispatch(setTextFilter("Bill"));
// }, 3000);
store.dispatch(addExpense({ description:'Water Bill', amount: 100}));
store.dispatch(addExpense({ description:'Gas Bill'}));
store.dispatch(addExpense({ description:'rent', amount: 109500}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
     <AppRouter />
    </Provider>  
);

ReactDOM.render(jsx, document.getElementById('app'));

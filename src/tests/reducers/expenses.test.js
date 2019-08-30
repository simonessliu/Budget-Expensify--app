import expensesReducer from '../../reducers/expenses';
import expenses from  '../fixtures/expenses';

test('should set default state',()=>{
    const state = expensesReducer(undefined, {type:'@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id:'-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add expense', ()=>{
    const expense = {
        id:'109',
        amount: 1450,
        description: 'addon',
        createdAt:1,
        note:''
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense]);
});

test('should edit an expense', ()=>{
    const updates = {
        amount:'123',
        description:'updated',
        createdAt:2,
        note:''
    }
    const action ={
        type:'EDIT_EXPENSE',
        id:expenses[2].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[1],{...expenses[2],...updates}])
})

test('should not edit an expense', ()=>{
    const updates = {
        amount:'123',
        description:'updated',
        createdAt:2,
        note:''
    }
    const action ={
        type:'EDIT_EXPENSE',
        id:-1,
        updates
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should set expenses',()=>{
    const action = {
        type:'SET_EXPENSES',
        expenses:[expenses[1]]
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]]);
})  
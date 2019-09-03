import auth from '../../reducers/auth';

test('should add uid for login',()=>{
    const uid = 'ABCDE';
    const action = {
        type:'LOGIN',
        uid
    }
    const state = auth({},action);
    expect(state.uid).toBe(action.uid);
})

test('should remove uid for logout',()=>{
    const action = {
        type:'LOGOUT'
    }
    const state = auth({uid:'anything'},action);
    expect(state).toEqual({});
})

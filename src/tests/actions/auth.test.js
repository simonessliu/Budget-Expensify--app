import {login,logout} from '../../actions/auth';


test('should set login action object correctly', ()=>{
    const uid = 'ABCDEFG';
    const action = login(uid);
    expect(action).toEqual({
        type:'LOGIN',
        uid
    })
})

test('should set logout action object correctly',()=>{
    const action = logout();
    expect(action).toEqual({
        type:'LOGOUT'
    })
})
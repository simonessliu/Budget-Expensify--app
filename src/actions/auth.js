import {firebase, googleAuthProvider} from '../firebase/firebase';

export const login = (uid) =>({
    type:'LOGIN',
    uid
})


export const startLogin = () =>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
        // I wanna sign in with one of my accounts and use the pop up system
    }
}

export const logout = () => ({
    type:'LOGOUT'
})

//logout function
export const startLogout = () =>{
    return()=>{
        return firebase.auth().signOut();
    }
}
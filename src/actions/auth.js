import {firebase, googleAuthProvider} from '../firebase/firebase';

export const startLogin = () =>{
    return ()=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
        // I wanna sign in with one of my accounts and use the pop up system
    }
}
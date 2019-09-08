import {firebase, googleAuthProvider,githubAuthProvider} from '../firebase/firebase';

export const login = (uid) =>({
    type:'LOGIN',
    uid
})


export const startLogin = (provider) =>{
    return ()=>{
        if(provider==='google'){
            return firebase.auth().signInWithPopup(googleAuthProvider);
             // I wanna sign in with one of my accounts and use the pop up system
        }else if (provider='github'){
            return firebase.auth().signInWithPopup(githubAuthProvider);
        }
   
       
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
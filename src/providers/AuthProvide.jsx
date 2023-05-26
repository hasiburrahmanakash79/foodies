import { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const GoogleProvider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true) 

    const updateProfilePic = (name, photo) =>
        updateProfile(auth.currentUser, { displayName: name, photoURL: photo });

    const GoogleLogin = () => signInWithPopup(auth, GoogleProvider);
    const GithubLogin = () => signInWithPopup(auth, GithubProvider)
    
    const createUser = (email, password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    } 
    const logInUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const logOut = () =>{
        return signOut(auth)
    }


    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoader(false)
        })
        return () =>{
            return unsubscribe
        }
    },[])

    const AuthInfo = {
        user,
        loader,
        updateProfilePic,
        GoogleLogin,
        GithubLogin,
        createUser,
        logInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
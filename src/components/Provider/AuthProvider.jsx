import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, sendPasswordResetEmail , getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config';
export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const GoogleLogin = () => {
        const GoogleProvider = new GoogleAuthProvider();
       return signInWithPopup(auth, GoogleProvider)
    }
    const resetPass = (email) => {
      return  sendPasswordResetEmail(auth, email)
    }

    const createUser =(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password)=>{
        setLoading(true)
    return   signInWithEmailAndPassword(auth, email,password)
    }
    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser, updatedData)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
     const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])
    const authData  = {
        user,
        setUser,
        createUser,
        logOut,
        signIn,
        loading, 
        setLoading,
        updateUser,
        GoogleLogin,
        resetPass
    }
    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;
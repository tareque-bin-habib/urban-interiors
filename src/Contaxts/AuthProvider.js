import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observed')
            setUser(currentUser)
            setLoading(false)
        })

        return () => unSubscribe()
    }, [])

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = userInfo => {
        return updateProfile(user, userInfo)
    }

    const createWithGmail = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const authInfo = {
        createUser,
        signIn,
        updateUser,
        createWithGmail,
        logOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
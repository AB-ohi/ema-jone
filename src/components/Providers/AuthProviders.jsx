import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase';
export const AuthContext = createContext(null)

const auth = getAuth(app)
const AuthProviders = ({children}) => {

    const [user, setUser] = useState(null);
    console.log (user)


    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        return signOut(auth)
    }

    useEffect (()=> {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        });
        return () => {
            return unsubscribe
        }
    },[])
    
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
            
        </div>
    );
};

export default AuthProviders;
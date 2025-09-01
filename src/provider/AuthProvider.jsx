import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
export const  AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({children}) => {

const [loading,setLoading]=useState(true);

const [user,setUser]=useState(null);


// create user
const createuser =(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}


// login user

const singIn =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

// logOut


const LogOut =()=>{

    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser =>{
setUser(currentUser);
console.log("current User",setUser);
setLoading(false);
})

return () =>{
    return unsubscribe();
}

},[])





const authInfo ={
  
user,
loading,
createuser,
singIn,
LogOut,


}


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
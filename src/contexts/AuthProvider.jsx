// import React from 'react';
// import { AuthContext } from './AuthContext';
// import {  signInWithEmailAndPassword } from 'firebase/auth';
// import{auth} from '../firebase/firebase.init';
// const AuthProvider = ({children}) => {

  

// const crateUser=(email,password)=>{
//     return signInWithEmailAndPassword(auth,email,password)
//     //createUserWithEmailAndPassword

// }


//   const userInfo={
//         crateUser
//     }

//     return (
//         <AuthContext value={userInfo}>
//             {children}
//         </AuthContext>
//     );
// };

// export default AuthProvider;
















import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase/firebase.init';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Email/Password login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google login
  const googleLogin = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  const authInfo = {
    user,
    loginUser,
    googleLogin,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;




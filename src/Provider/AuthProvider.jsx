import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const axiosPublic = useAxiosPublic();
  // const navigate = useNavigate();

  //!create account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //! login account
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //!Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //!updateProfile

  const update = (image, name) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      photoURL: image,
      displayName: name,
    });
  };

  //!logout account
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //!observer
  useEffect(() => {
    const subscriber = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { email: currentUser.email };
        // set token on localStorage
        axiosPublic.post("/jwt", userInfo).then((res) => {
          if (res.data.token) {
            localStorage.setItem("access_token", res.data.token);
          }
        });
      } else {
        localStorage.removeItem("access_token");
      }
      setLoading(false);
    });
    return () => {
      subscriber();
    };
  }, []);

  useEffect(() => {}, []);

  const AuthInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    logOut,
    update,
  };

  return (
    <authContext.Provider value={AuthInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;

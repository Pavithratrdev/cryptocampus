import React from 'react';
import Navbar from '../components/Navbar';
import LoginCard from '../components/loginCard';
import { useEffect, useRef, useState } from "react";
import { signInWithEmailAndPassword,onAuthStateChanged } from 'firebase/auth';
import {auth} from '../config/firebase'
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

const LoginPage = () => {
  const toast = useRef(null)
    const showSuccess = (msg) => {
        toast.current.show({severity:'success', summary: 'Success', detail:msg, life: 7000});
    }
    const showError = (err) => {
        toast.current.show({severity:'error', summary: err, detail:'', life: 7000});
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;
    const nav = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [loading,setLoading] = useState(false)
    const [isEmailVerified, setIsEmailVerified] = useState(false);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user && user.emailVerified) {
            setIsEmailVerified(true);
          }
        });
        return () => unsubscribe(); // Clean up the listener when the component unmounts
    }, []);
    const login = async() => {
        if(email==="",password===""){
            return showError("All fields required")
        }
        if(!emailRegex.test(email)){
            return showError("Please enter proper email")
        }
        setLoading(true)
        try {
          const {user} = await signInWithEmailAndPassword(auth,email,password)
          console.log(user)
          // showSuccess('User Signed Up Succesfully')
          if(!user.emailVerified){
            setLoading(false)
            return showError("The user hasn't Verified! Check mail")
          }
          nav("/")
          setLoading(false)
        } catch (error) {
          showError(error.message)
          console.log(error.message)
          setLoading(false)
        }
  }
  return (
    <div>
      <Navbar />
      <LoginCard email={email} password={password} setEmail={setEmail} setPassword={setPassword} loading={loading} login={login}/>
      <Toast ref={toast} />
    </div>
  );
};

export default LoginPage;

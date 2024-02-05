import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Signup from "../components/signupcard";
import { createUserWithEmailAndPassword,onAuthStateChanged, sendEmailVerification, signOut } from 'firebase/auth';
import {auth} from '../config/firebase'
import { useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";

function RegisterPage() {
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
    const [confirmPassword,setConfirmPassword] = useState("")
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
    const signup = async() => {
        if(email==="",password==="",confirmPassword===""){
            return showError("All fields required")
        }
        if(!emailRegex.test(email)){
            return showError("Please enter proper email")
        }
        if(!passwordRegex.test(password)){
            return showError("Please enter strong password")
        }
        if(password !== confirmPassword ){
            return showError("Password not matched")
        }
        setLoading(true)
        try {
            const user = await createUserWithEmailAndPassword(auth,email,password)
            await sendEmailVerification(user.user)
            showSuccess("Email verification has been sent accept to login")
            console.log(user)
            showSuccess('User Signed Up Succesfully')
            setLoading(false)
            setTimeout(() => {
                nav('/login')
            }, 2000);
        } catch (error) {
            showError(error.message)
            console.log(error.message)
            setLoading(false)
        }
    }
    return ( 
        <div>
            <Navbar />
            <Signup email={email} setEmail={setEmail} password={password} setPassword={setPassword} confirmPassword={confirmPassword} setConfirmPassword={setConfirmPassword} signup={signup} loading={loading} />
            <Toast ref={toast} />
        </div>
    );
}

export default RegisterPage;
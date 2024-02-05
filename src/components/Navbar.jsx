import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../config/firebase";
import logo from '../assets/logo1.png'

export default function Navbar(){
    const ref = useRef(null);
    const [user,setUser] = useState()
    useEffect(() => {
        const element = ref.current;
        gsap.from(element, {
        opacity: 0,
        y: 0,
        duration: 2,
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: true,
        },
        });
    }, []);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user){
                setUser(user)
                console.log(user)
            }
        });
        return () => unsubscribe();
    },[])
    const [openPopover, setOpenPopover] = React.useState(false);
    const [openPopover2, setOpenPopover2] = React.useState(false);
    const [showSidebar, setShowSidebar] = React.useState(false);

    const triggers1 = {
        onMouseEnter: () => setOpenPopover(true),
        onMouseLeave: () => setOpenPopover(false),
    };
    const triggers2 = {
        onMouseEnter: () => setOpenPopover2(true),
        onMouseLeave: () => setOpenPopover2(false),
    };
    return(
        <nav className="flex bg-transparent absolute top-0 left-0 z-10 w-full md:justify-between items-center p-4">
            {showSidebar ? (
                <button
                    className="flex text-4xl text- items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                    >
                    x
                </button>
            ) : (
                <svg
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="absolute md:hidden z-30 flex items-center cursor-pointer right-10 top-6"
                    fill="#000"
                    viewBox="0 0 100 80"
                    width="30"
                    height="30"
                    >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}
            <section ref={ref} className="flex md:flex-row flex-row-reverse md:justify-between items-center md:w-full font-semibold px-7">
                <div className="font-[Ysabeau Infant] flex items-center font-bold text-xl">
                    <img src={logo} className='w-24' />
                </div>
                <div className="md:flex hidden md:justify-around justify-start items-center">
                    <Link to="/" className="mr-9 cursor-pointer link-underline link-underline-black hover:scale-105 ease-in-out transition-all duration-150">Home</Link>
                    <Link to="/register-course" className="mr-9 cursor-pointer bg-[#C181F7] px-8 py-3 rounded-xl hover:scale-105 ease-in-out transition-all duration-150">Register</Link>
                </div>
            </section>
            <div ref={ref} className="md:flex hidden justify-end items-center font-semibold">
                
            </div>
            <div className={`top-0 right-0 w-[70vw] ${showSidebar ? "bg-[#C181F7] shadow-xl":"bg-transparent"} p-10 pl-20 text-[#fbfaf9] fixed h-full z-40 ${
                showSidebar ? "translate-x-0 " : "translate-x-full"
            } transition-all ease-in-out duration-500 `}>
                <div className="absolute top-28 justify-center items-center flex-col h-full">
                    <div className="flex flex-col justify-around items-start">
                        <h1 className="text-gray-500">Links</h1>
                        <Link to='/' className="mr-9 mt-3 cursor-pointer text-3xl link-underline link-underline-black hover:scale-105 ease-in-out transition-all duration-150">Home</Link>
                        <Link to="/register-course" className="mr-9 mt-3 cursor-pointer text-3xl link-underline link-underline-black hover:scale-105 ease-in-out transition-all duration-150">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
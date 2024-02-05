import { collection, addDoc } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { fs } from '../config/firebase';
import Navbar from '../components/Navbar';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';
import { toast } from 'react-toastify';

const Loader = () => (
    <svg className='svg' viewBox="25 25 50 50">
        <circle className='circle' r="20" cy="50" cx="50"></circle>
    </svg>
)

const RegistrationForm = () => {
    const form = useRef()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [loading,setLoading] = useState(false);

    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const updateFormToFirebase = async (formData) => {
        try {
            const formsCollectionRef = collection(fs, 'registrationForms');
            await addDoc(formsCollectionRef, formData);
            console.log('Document written successfully');
            emailjs.sendForm('service_d6haxk9', 'template_zlmwwqs', form.current, 'o5EVRK7GS2D6upfH4')
        } catch (error) {
          console.error('Error adding document: ', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = {
            name,
            email,
            phone,
            selectedOption,
        };
        updateFormToFirebase(formData);
        console.log(formData);
        setLoading(false);
        toast.success('Check your mail for more informations', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <div>
            <Navbar />
            <div className="bg1 flex justify-center items-center h-screen">
                <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Course Registration</h2>
                <form ref={form} onSubmit={handleSubmit}>
                    <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                        Name <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="input"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="input"
                        name='email'
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                        WhatsApp No <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        className="input"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                    </div>
                    <div className="relative inline-block">
                    <select
                        className="input cursor-pointer"
                        value={selectedOption}
                        onChange={handleOptionChange}
                    >
                        <option value="" disabled>Select an option</option>
                        <option value="Web3 & solidity">Web3 & Solidity</option>
                    </select>
                    </div>
                    <button
                    type="submit"
                    className="btn "
                    >
                    {loading ?<Loader />:"Register"}
                    </button>
                </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default RegistrationForm;

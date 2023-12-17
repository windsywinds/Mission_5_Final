import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useRef } from 'react';

import logo from '../../assets/metro-logo.svg'
import phoneIcon from '../../assets/footer-phone-icon.svg'
import emailIcon from '../../assets/email-icon.svg'
import locationIcon from '../../assets/location-icon.svg'

export const Footer = () => {
    const navigate = useNavigate(); //to use navigation
    const location = useLocation();
    const [message, setMessage] = useState(false)
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const handleformSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
        nameRef.current.value = '';
        emailRef.current.value = '';
        subjectRef.current.value = '';
        messageRef.current.value = '';
    }

    return(
        <div className="flex flex-col lg:flex-row w-full bg-black bottom-0 left-0 right-0 py-12 text-white items-center md:justify-between">
            
            <div className="flex flex-row w-full px-12 lg:px-0 lg:w-1/2 lg:ml-6 items-center justify-between">
                <div className="flex flex-col  space-y-2">
                    <img className="bg-white" src={logo}></img>

                    <div className="flex flex-row gap-4">
                    <img className="w-6" src={phoneIcon} />
                        <p>09 391 4642</p>
                    </div>

                    <div className="flex flex-row gap-4">
                        <img className="w-6"  src={emailIcon} />
                        <p>info@metronz.co.nz</p>
                    </div>

                    <div className="flex flex-row gap-4">
                        <img className="w-6"  src={locationIcon} />
                        <div>
                        <p>Level 33, 23-29</p>
                        <p>Albert Street</p>
                        <p>Auckland CBD</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-center lg:text-left space-y-4">
                    <h4 className="flex flex-col text-lg md:text-xl font-bold underline">Quick Links</h4>
                    <p className="cursor-pointer" onClick={() => navigate('/home')} >Home</p>
                    <a href="#">Services</a>
                    <a href="#">Tenants</a>
                    <a href="#">News</a>
                </div>
            </div>

            <form className="flex flex-col w-[90%] md:w-2/5 md:mr-6 items-center space-y-6"
                    onSubmit={handleformSubmit}>
                <h4 className="text-lg md:text-xl font-bold underline pt-8">Contact Us</h4>
                <div className="flex flex-col space-y-4 w-full">
                    <div className="flex flex-col md:flex-row w-full space-y-4 md:space-y-0 justify-between ">
                        <input ref={nameRef} required className="bg-black md:w-[45%] placeholder-white border-b-2 focus:outline-none" placeholder="Your Name"></input>
                        <input ref={emailRef} required className="bg-black md:w-[45%] placeholder-white border-b-2 focus:outline-none"  placeholder="Your Email"></input>
                    </div>
                    <input ref={subjectRef} required className="bg-black placeholder-white border-b-2 focus:outline-none"  placeholder="Subject"></input>
                    <input ref={messageRef} required className="bg-black placeholder-white border-b-2 focus:outline-none"  placeholder="Message"></input>
                </div>
                <button className="border-2 border-white w-[65%] py-2">Send</button>
                {message && 
                <div>
                    <p>Thanks for getting in touch! We'll respond shortly.</p>
                    </div>
                }
            </form>
        </div>
    )
}
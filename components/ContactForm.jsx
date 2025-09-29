"use client"

import { useState } from "react"
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';
import Image from 'next/image'

function ContactForm() {

    const [userInput, setUserInput] = useState({
        title: "",
        firstName: "",
        secondName: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        try {
            const emailParams = {
                title: userInput.title,
                firstName: userInput.firstName,
                secondName: userInput.secondName,
                email: userInput.email,
                message: userInput.message
            };

            const res = await emailjs.send(serviceID, templateID, emailParams, userID);

            if (res.status == 200) {
                toast.success("Message sent successfully!");
                setUserInput({
                    title: "",
                    firstName: "",
                    secondName: "",
                    email: "",
                    message: ""
                });
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again later.");
        }
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-32 mt-20">
            <p className="text-4xl font-bold text-black">Contact Customer Service</p>
            <form onSubmit={handleSubmit}>

                <div className="mt-6">
                    <label htmlFor="title" className="block text-black text-2xl font-bold">Title</label>
                    <input type="text" id="title" placeholder="title" name="title" value={userInput.title} onChange={handleChange} required
                        className="md:w-96 h-16 mt-2 border-3 border-black/50 rounded-md px-4 text-black placeholder:text-black/50 focus:outline-blue-50"
                    />
                </div>

                <div className="mt-6 flex flex-col md:flex-row gap-12">
                    <div>
                        <label htmlFor="firstName" className="block text-black text-2xl font-bold">First Name</label>
                        <input type="text" id="firstName" placeholder="First Name" name="firstName" value={userInput.firstName} onChange={handleChange} required
                            className="w-3xs h-16 mt-2 border-3 border-black/50 rounded-md px-4 text-black placeholder:text-black/50 focus:outline-blue-50"
                        />
                    </div>
                    <div>
                        <label htmlFor="secondName" className="block text-black text-2xl font-bold">Second Name</label>
                        <input type="text" id="secondName" placeholder="Second Name" name="secondName" value={userInput.secondName} onChange={handleChange} required
                            className="w-3xs h-16 mt-2 border-3 border-black/50 rounded-md px-4 text-black placeholder:text-black/50 focus:outline-blue-50"
                        />
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="email" className="block text-black text-2xl font-bold">Email</label>
                    <input type="email" id="email" placeholder="Email" name="email" value={userInput.email} onChange={handleChange} required
                        className="md:w-96 h-16 mt-2 border-3 border-black/50 rounded-md px-4 text-black placeholder:text-black/50 focus:outline-blue-50"
                    />
                </div>

                <div className="mt-6">
                    <label htmlFor="message" className="block text-black text-2xl font-bold">Message</label>
                    <textarea name="message" id="message" rows={"6"} value={userInput.message} onChange={handleChange} required
                        className="border-3 border-black/50 rounded-md md:w-96 mt-4 px-2 pt-2 text-black focus:outline-blue-50"
                    ></textarea>
                </div>

                <div>
                    <button type="submit" className="mt-4 bg-red-500 px-6 py-2 rounded-lg text-xl text-white font-bold hover:bg-red-500/50">Send</button>
                </div>
            </form>

        </div>

    )
}

export default ContactForm;
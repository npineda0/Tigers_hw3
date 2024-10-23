"use client";
import { useState } from "react";
import contactStyles from "./contact.module.css";
import TigerImage from "@/components/TigerImage/tiger";

export default function Contact() {
    //form name
    const [name, setName] = useState("");
    //thank you message for submitting contact form
    const [message, setMessage] = useState(false);

    function formMessage(e) {
        e.preventDefault();

        setTimeout(() => {
            //message pop up
            setMessage(true);
            setTimeout(() => setMessage(false), 4000);
          }, 1000);
    }
    
    return (
        <main>
            <div className={contactStyles.contactContainer}>
                <div className={contactStyles.tigerImg}><TigerImage/></div>
                <div className={contactStyles.formBackground}>
                    <p className={contactStyles.contactHeader}>Contact Us!</p>
                    <form onSubmit={formMessage}>
                        <input 
                            className={contactStyles.contactInput} 
                            type="text" 
                            name="fullName" 
                            placeholder="Name" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}/> <br/>
                        <input 
                            className={contactStyles.contactInput} 
                            type="email" 
                            name="email" 
                            placeholder="Email"/> <br/>
                        <input 
                            className={contactStyles.contactInput} 
                            type="text" 
                            name="message" 
                            placeholder="Message"/> <br/>
                        <button className={contactStyles.contactBtn} >Submit</button>
                    </form>
                    {/* message */}
                    {message && <p className={contactStyles.contactMsg}>Thank you {name} for your message! <br/> We will respond within 48 hours.</p>}
                </div>
            </div>
        </main>
    );
}
import contactStyles from "./contact.module.css";
import TigerImage from "@/components/TigerImage/tiger";

export default function Contact() {

    return (
        <main>
            <div className={contactStyles.contactContainer}>
                <div className={contactStyles.tigerImg}><TigerImage/></div>
                <div className={contactStyles.formBackground}>
                    <p className={contactStyles.contactHeader}>Contact Us!</p>
                    <form>
                        <input className={contactStyles.contactInput} type="text" name="fullName" placeholder="Name"/> <br/>
                        <input className={contactStyles.contactInput} type="text" name="email" placeholder="Email"/> <br/>
                        <input className={contactStyles.contactInput} type="text" name="message" placeholder="Message"/> <br/>
                        <button className={contactStyles.contactBtn} >Submit</button>
                    </form>
                </div>
            </div>
        </main>
    );
}
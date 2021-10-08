import React from "react";
import { Element } from "react-scroll";
import decoration from "../../../assets/Decoration.svg"
import ContactForm from "./ContactForm";

const HomeContact = () => {
    return (
        <Element name="contact" className="contact-bcg">
            <div className="container">
                <div className="contact">
                    <h2>Skontaktuj się z nami</h2>
                    <div><img src={decoration} alt="decoration" /></div>
                    <ContactForm />
                </div>
            </div>
        </Element>
    )
}

export default HomeContact;

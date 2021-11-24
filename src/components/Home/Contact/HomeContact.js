import React from "react";
import { Element } from "react-scroll";
import decoration from "../../../assets/Decoration.svg"
import ContactForm from "./ContactForm";
import ContactFooter from "./ContactFooter";

const HomeContact = () => {
    return (
        <Element name="contact" className="contact-bcg">
            <div className="container">
                <div />
                <div className="contact">
                    <h2>Skontaktuj się z nami</h2>
                    <div><img src={decoration} alt="decoration" /></div>
                    <ContactForm />
                </div>
                <ContactFooter />
            </div>
        </Element>
    )
}

export default HomeContact;

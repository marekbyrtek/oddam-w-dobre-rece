import React from "react";
import facebook from "../../../assets/Facebook.svg";
import instagram from "../../../assets/Instagram.svg";

const ContactFooter = () => {
    return (
        <div className="footer">
            <div />
            <p>Copyright by Coders Lab</p>
            <div className="social">
                <div><img src={facebook} alt="facebook" /></div>
                <div><img src={instagram} alt="instagram" /></div>
            </div>
        </div>
    )
}

export default ContactFooter;

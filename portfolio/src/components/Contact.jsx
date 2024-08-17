import React, { useState, useEffect } from "react";
import personalInfo from "../data/personalInfo.json";

export default function Contact() {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/contact')
            .then(response => response.json())
            .then(data => setContact(data))
            .catch(error => console.error('Error fetching contact info:', error));
    }, []);

    return (
        <div className="contact">
            <h1>Contact</h1>
            <p>Looking forward to hearing from you</p>
            <div className="contact-info">
                <p>Phone: {personalInfo.phone}</p>
                <p>Email: {personalInfo.email}</p>
            </div>
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Subject" />
                <textarea placeholder="Message"></textarea>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}
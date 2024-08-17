import React from "react";
import { Link } from 'react-router-dom';
import personalInfo from "../data/personalInfo.json";

export default function Home() {
    return (
        <div className="home">
            <div className="home-content">
                <h1>Hello👋</h1>
                <h2>A Bit About Me😊</h2>
                <p>{personalInfo.about}</p>
                <div className="buttons">
                    <Link to="/home"><button className="home-btn">Home</button></Link>
                    <Link to="/resume"><button className="resume-btn">Resume</button></Link>
                    <Link to="/projects"><button className="projects-btn">Projects</button></Link>
                    <Link to="/contact"><button className="contact-btn">Contact</button></Link>
                </div>
            </div>
            <div className="profile-image">
                <img src={personalInfo.profileImage} alt="profile" />
            </div>
        </div>
    );
}

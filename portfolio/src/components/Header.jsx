import React from "react"
import { Link } from 'react-router-dom';
import personalInfo from '../data/personalInfo.json';

export default function Header() {
    return (

        <header id="header">
            <div className="logo">
                <div className="logo-circle"></div>
                <div className="logo-text">
                    <span className="logo-name">{personalInfo.name}</span>
                    <span className="logo-title">{personalInfo.title}</span>
                </div>
            </div>
            <nav>

                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    )
}
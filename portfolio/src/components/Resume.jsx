import React, { useState, useEffect } from "react";

export default function Resume() {
    const [education, setEducation] = useState([]);
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        // Fetch education data
        fetch('http://localhost:5000/api/education')
            .then(response => response.json())
            .then(data => setEducation(data))
            .catch(error => console.error('Error fetching education:', error));

        // Fetch experience data
        fetch('http://localhost:5000/api/experience')
            .then(response => response.json())
            .then(data => setExperience(data))
            .catch(error => console.error('Error fetching experience:', error));
    }, []);

    return (
        <div className="resume">
            <h1>Resume</h1>

            <section className="education">
                <h2>Education</h2>
                {education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <h3>{edu.degree}</h3>
                        <p>{edu.institution}, {edu.location}</p>
                        <p>{new Date(edu.startDate).getFullYear()} - {edu.endDate ? new Date(edu.endDate).getFullYear() : 'Present'}</p>
                        <p>GPA: {edu.gpa}</p>
                        <ul>
                            {edu.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="work-experience">
                <h2>Work Experience</h2>
                {experience.map((job, index) => (
                    <div key={index} className="job">
                        <h3>{job.title}</h3>
                        <p>{job.company}, {job.location}</p>
                        <p>{new Date(job.startDate).toLocaleDateString()} - {job.endDate ? new Date(job.endDate).toLocaleDateString() : 'Present'}</p>
                        <h4>Responsibilities:</h4>
                        <ul>
                            {job.responsibilities.map((resp, i) => (
                                <li key={i}>{resp}</li>
                            ))}
                        </ul>
                        <h4>Achievements:</h4>
                        <ul>
                            {job.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>
        </div>
    );
}
import React, { useState, useEffect } from "react";

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/projects')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
                setError('Failed to load projects. Please try again later.');
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading projects...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="projects">
            <h1>Projects</h1>
            {projects.map(project => (
                <div key={project._id} className="project">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    {project.imagePath && (
                        <img src={`${project.imagePath}`} alt={project.title} />
                    )}
                    <h3>Technologies:</h3>
                    <ul>
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                    {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            View on GitHub
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
}
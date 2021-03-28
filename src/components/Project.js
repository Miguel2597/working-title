import { useState } from 'react'

import './Project.css'

export default function Project({ project }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <div className='project'>
            <div className='project-header'>
                <h2 className='project-title'>{project.title}</h2>
                {project.site && <a className='project-icon' href={project.site} target="_blank" rel="noopener noreferrer">
                    <i className='fa fa-home' aria-hidden="true"></i>
                </a>}
                {project.github && <a className='project-icon' href={project.github} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>}
            </div>

            <div className='project-technologies'>
                {project.technologies.map((t,i) => <div key={i} className='project-technology'>{t}</div>)}
            </div>

            <p>{project.desc}</p>

            {expanded && project.full_desc}

            <button className='project-btn' onClick={() => setExpanded(!expanded)}>
                <i className={expanded ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i>
            </button> 
        </div>
    )
}

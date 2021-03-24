import Project from './Project'
import projectList from './ProjectList'

import './Projects.css'

export default function Projects() {

    return (
        <div className="projects">
            <h1 className='projects-title'>Projects</h1>
            {projectList.map((project, index) => <Project key={index} project={project}></Project>)}
        </div>
    )
}

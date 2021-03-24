import { useEffect, useContext } from 'react'
import { IndexContext } from './IndexContext'
import Project from './Project'
import projectList from './ProjectList'

import './Projects.css'

export default function Projects({ title, index }) {

    const { setSelectedIndex } = useContext(IndexContext)

    useEffect(() => {
        setSelectedIndex(index)
    }, [index, setSelectedIndex])
    
    return (
        <div className="projects">
            <h1 className='projects-title'>{title}</h1>
            {projectList.map((project, index) => <Project key={index} project={project}></Project>)}
        </div>
    )
}

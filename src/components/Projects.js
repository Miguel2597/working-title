import { useEffect, useContext } from 'react'
import { IndexContext } from './IndexContext'
import Project from './Project'
import projectList from './ProjectList'

export default function Projects({ title, index }) {

  const { setSelectedIndex } = useContext(IndexContext)

  useEffect(() => {
    setSelectedIndex(index)
  }, [index, setSelectedIndex])
  
  return (
    
    <div className='projects'>
      <h1 className="title">{title}</h1>
      <ul>
        {projectList.map((project, index) => <Project key={index} project={project}></Project>)}
      </ul>
    </div>
  )
}

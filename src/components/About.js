import { useEffect, useContext } from 'react'
import { IndexContext } from './IndexContext'
import Icon from './Icon'
import resume from '../assets/resume.pdf'

import './About.css'

export default function About({ title, index }) {

  const { setSelectedIndex } = useContext(IndexContext)

  useEffect(() => {
    setSelectedIndex(index)
  }, [index, setSelectedIndex])

  return (
    <div className='about'>

      <h1 className="title">{title}</h1>
      <p>Hey!</p>
      <p>
        My name is Miguel Oliveira and I just recently finished my Master's degree in Informatics Engineering with a specialisation
        in Computer Systems.
      </p>

      <h2 className='about-find-me'>Find me on</h2>

      <div className='about-icons'>
        <Icon className='about-icon' href='https://github.com/Miguel2597' iconName='fa fa-github'></Icon>
        <Icon className='about-icon' href='https://linkedin.com/in/migueloliveira25' iconName='fa fa-linkedin-square'></Icon>
        <Icon className='about-icon' href='mailto:miguel_250597@hotmail.com' iconName='fa fa-envelope'></Icon>
      </div>

      <h2 className='about-find-me'>Check out my Resume</h2>
      
      <div className='about-icons'>
        <Icon className='about-icon' href={resume} iconName='fa fa-file'></Icon>
      </div>

    </div>
  )
}

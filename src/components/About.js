import { useEffect, useContext } from 'react'
import { IndexContext } from './IndexContext'
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

            <div className='about-find-me'>
                <h3>Find me on</h3>
            </div>
            <div className='about-icons'>
                <a className='about-icon' href={'https://github.com/Miguel2597'} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-github" aria-hidden="true"></i>
                </a>
                <a className='about-icon' href={'https://linkedin.com/in/migueloliveira25'} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a className='about-icon' href={'mailto:miguel_250597@hotmail.com'} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </a>
            </div>

            <div className='about-find-me'>
                <h3>Check out my resume</h3>
            </div>
            <div className='about-icons'>
                <a className='about-icon' href={resume} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-file" aria-hidden="true"></i>
                </a>
            </div>

        </div>
    )
}

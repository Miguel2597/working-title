import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'

import './Project.css'

const fullDescAnimation = {
    initial: {
        opacity: 0,
        y: -100
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        y: -100,
        transition: {
            ease: 'easeInOut'
        }
    }
}

export default function Project({ project }) {

    const [expanded, setExpanded] = useState(false)

    return (
        <div className='project'>
            <div className='project-header'>
                <h2 className='project-title'>{project.title}</h2>
                {project.site && <Icon className='project-icon' href={project.site} iconName='fa fa-home'></Icon>}
                {project.github && <Icon className='project-icon' href={project.github} iconName='fa fa-github'></Icon>}
            </div>

            <div className='project-technologies'>
                {project.technologies.map((t,i) => <div key={i} className='project-technology'>{t}</div>)}
            </div>

            <p>{project.desc}</p>

            <AnimatePresence exitBeforeEnter>
                {expanded && <motion.div initial='initial' animate='animate' exit='exit' variants={fullDescAnimation}>{project.full_desc}</motion.div>}
            </AnimatePresence>

            <motion.button className='project-btn' onClick={() => setExpanded(!expanded)}
                whileHover={{ scale: 1.3 }} transition={{ duration: 0.3, ease: 'easeInOut'}}
            >
                <i className={expanded ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i>
            </motion.button> 
        </div>
    )
}

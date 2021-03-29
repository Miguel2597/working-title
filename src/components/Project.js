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

const imageAnimation = {
    initial: direction => (
      {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      }
    ),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
          duration: 0.3
      }
    },
    exit: direction => (
      {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        transition: {
            ease: 'easeOut'
        }
      }
    )
  };

export default function Project({ project }) {

    const [expanded, setExpanded] = useState(false)
    const[[imageIndex, direction], setImageIndex] = useState([0, 0])

    const nextIndex = newDirection => {
        if(imageIndex === project.images.length - 1){
            setImageIndex([0, newDirection])
        }else{
            setImageIndex([imageIndex + newDirection, newDirection])
        }
    }

    const previousIndex = newDirection => {
        if(imageIndex === 0){
            setImageIndex([project.images.length - 1, newDirection])
        }else{
            setImageIndex([imageIndex + newDirection, newDirection])
        }
    }

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
                {expanded && 
                <motion.div initial='initial' animate='animate' exit='exit' variants={fullDescAnimation}>
                    <div className='slideshow'>
                        <AnimatePresence exitBeforeEnter custom={direction} initial={false}>
                            <motion.img className='image' src={project.images[imageIndex]} alt=''
                                key={imageIndex} initial='initial' animate='animate' exit='exit' variants={imageAnimation} custom={direction}></motion.img>
                        </AnimatePresence>
                        <motion.button className='prevBtn' onClick={() => previousIndex(-1)}
                            whileHover={{ scale: 1.3 }} transition={{ duration: 0.3, ease: 'easeInOut'}}
                        >
                            <i className="fa fa-chevron-left" aria-hidden="true"></i>
                        </motion.button>
                        <motion.button className='nextBtn' onClick={() => nextIndex(1)}
                            whileHover={{ scale: 1.3 }} transition={{ duration: 0.3, ease: 'easeInOut'}}
                        >
                            <i className="fa fa-chevron-right"></i>
                        </motion.button>
                    </div>
                    {project.full_desc}
                </motion.div>
                }
            </AnimatePresence>

            <motion.button className='project-btn' onClick={() => setExpanded(!expanded)}
                whileHover={{ scale: 1.3 }} transition={{ duration: 0.3, ease: 'easeInOut'}}
            >
                <i className={expanded ? "fa fa-chevron-up" : "fa fa-chevron-down"} aria-hidden="true"></i>
            </motion.button> 
        </div>
    )
}

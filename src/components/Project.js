import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Icon from './Icon'
import { fullDescVariants, imageVariants } from '../animations/Variants'

import './Project.css'

const Button = ({ className, onClick, iconName }) => {
  return (
    <motion.button className={className} onClick={onClick}
      whileHover={{ scale: 1.3 }} transition={{ duration: 0.3, ease: 'easeInOut'}}
    >
      <i className={iconName} aria-hidden="true"></i>
    </motion.button> 
  )
}

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

      {project.desc}

      <AnimatePresence exitBeforeEnter initial={false}>
        {expanded && 
        <motion.div initial='initial' animate='animate' exit='exit' variants={fullDescVariants}>
          {project.images.length !== 0 && <div className='slideshow'>
            <AnimatePresence exitBeforeEnter initial={false} custom={direction}>
              <motion.img 
                className='image' 
                src={project.images[imageIndex]} 
                alt=''
                key={imageIndex} 
                initial='initial' 
                animate='animate'  
                exit='exit'
                variants={imageVariants} 
                custom={direction}
              ></motion.img>
            </AnimatePresence>
            <Button
              className='prevBtn'
              onClick={() => previousIndex(-1)}
              iconName='fa fa-chevron-left'
            ></Button>
            <Button
              className='nextBtn'
              onClick={() => nextIndex(1)}
              iconName='fa fa-chevron-right'
            ></Button>
          </div>
          } 
          {project.full_desc}
        </motion.div>
        }
      </AnimatePresence>

      <Button 
        className='project-btn' 
        onClick={() => setExpanded(!expanded)} 
        iconName={expanded ? "fa fa-chevron-up" : "fa fa-chevron-down"}
      ></Button>
    </div>
  )
}

import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import menuItems from './MenuItems'

const pageAnimation = {
    initial: {
        opacity: 0,
        x: -100
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }
    },
    exit: {
        opacity: 0,
        x: -100,
        transition: {
            ease: 'easeInOut'
        }
    }
}

export default function Routes() {

    const location = useLocation()

    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
                {menuItems.map(({ title, component: Component, path }, index) => 
                    <Route key={index} path={path} exact render={props => 
                        <motion.div initial='initial' animate='animate' exit='exit' variants={pageAnimation}>
                            <Component {...props} index={index} title={title}></Component>
                        </motion.div>}></Route>
                )}
            </Switch> 
        </AnimatePresence>
    )
}

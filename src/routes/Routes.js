import { Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import menuItems from './MenuItems'
import { pageVariants } from '../animations/Variants'

export default function Routes() {

  const location = useLocation()

  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        {menuItems.map(({ title, component: Component, path }, index) => 
          <Route key={index} path={path} exact render={props => 
            <motion.div initial='initial' animate='animate' exit='exit' variants={pageVariants}>
              <Component {...props} index={index} title={title}></Component>
            </motion.div>}></Route>
        )}
      </Switch> 
    </AnimatePresence>
  )
}

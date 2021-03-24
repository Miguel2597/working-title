import { Switch, Route } from 'react-router-dom'
import menuItems from './MenuItems'

export default function Routes() {
    return (
        <Switch>
            {menuItems.map(({ title, component: Component, path }, index) => 
                <Route key={index} path={path} exact
                render={props => <Component {...props} index={index} title={title}></Component>}></Route>
            )}
        </Switch>
    )
}

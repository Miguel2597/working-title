import { Switch, Route } from 'react-router-dom'
import menuItems from './MenuItems'

export default function Routes() {
    return (
        <Switch>
            {menuItems.map(({ component, path }, index) => 
                <Route key={index} path={path} component={component} exact></Route>
            )}
        </Switch>
    )
}

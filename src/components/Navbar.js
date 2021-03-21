import menuItems from '../routes/MenuItems'
import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='nav-links'>
                {menuItems.map(({ title, path }, index) => 
                    <Link key={index} to={path} className='link'>
                        <li>{title}</li>
                    </Link>
                )}
            </ul>
        </nav>
    )
}

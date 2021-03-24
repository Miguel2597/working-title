import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IndexContext } from './IndexContext'
import menuItems from '../routes/MenuItems'

import './Navbar.css'

export default function Navbar() {

	const { selectedIndex } = useContext(IndexContext)

	return (
		<nav className='navbar'>
			<h1>Website</h1>
			<ul className='nav-links'>
				{menuItems.map(({ title, path }, index) => 
					<Link key={index} to={path} className='link' 
					style={index === selectedIndex ? {'borderBottom': '1px #333 solid'} : null}>
						<li>{title}</li>
					</Link>
				)}
			</ul>
		</nav>
	)
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import menuItems from '../routes/MenuItems'

import './Navbar.css'

export default function Navbar() {

	const [selectedIndex, setSelectedIndex] = useState(0)

	return (
		<nav className='navbar'>
			<h1>Website</h1>
			<ul className='nav-links'>
				{menuItems.map(({ title, path }, index) => 
					<Link key={index} to={path} className='link' 
					onClick={() => setSelectedIndex(index)} style={index === selectedIndex ? {'borderBottom': '1px #333 solid'} : null}>
						<li>{title}</li>
					</Link>
				)}
			</ul>
		</nav>
	)
}

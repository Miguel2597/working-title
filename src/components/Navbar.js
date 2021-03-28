import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { IndexContext } from './IndexContext'
import menuItems from '../routes/MenuItems'

import './Navbar.css'

export default function Navbar() {

	const { selectedIndex } = useContext(IndexContext)
	const [burgerExpanded, setBurgerExpanded] = useState(false)

	return (
		<nav className='navbar'>
			<h1>Website</h1>
			<ul className='nav-links' style={{display: burgerExpanded ? 'flex' : null}}>
				{menuItems.map(({ title, path }, index) => 
					<Link className='link' key={index} to={path} onClick={() => setBurgerExpanded(false)}
					style={{borderBottom: index === selectedIndex && '1px #333 solid'}}>
						<li>{title}</li>
					</Link>
				)}
			</ul>

			<div className='nav-burger' onClick={() => setBurgerExpanded(!burgerExpanded)}>
				<div className='nav-burger-line'></div>
				<div className='nav-burger-line'></div>
				<div className='nav-burger-line'></div>
			</div>
		</nav>
	)
}

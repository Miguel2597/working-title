import { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { IndexContext } from './IndexContext'

import './Home.css'

export default function Home({ index }) {

  const { setSelectedIndex } = useContext(IndexContext)

  useEffect(() => {
    setSelectedIndex(index)
  }, [index, setSelectedIndex])

  return (
    <div className='home'>
      <div className='home-center'>
        <h1 className='home-name'>Miguel Oliveira</h1>
        <h2 className='home-role'>Software Engineer</h2>
        <p>Learn more <Link to='/about'>about me</Link></p>
        <p>or</p>
        <p>jump straight into my <Link to='/projects'>projects</Link>.</p>
      </div>
    </div>
  )
}

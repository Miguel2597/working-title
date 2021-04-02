import { useEffect, useContext } from 'react'
import { IndexContext } from './IndexContext'

import './Home.css'

export default function Home({ title, index }) {

  const { setSelectedIndex } = useContext(IndexContext)

  useEffect(() => {
    setSelectedIndex(index)
  }, [index, setSelectedIndex])

  return (
    <div>
      <h1 className='title'>{title}</h1>
    </div>
  )
}

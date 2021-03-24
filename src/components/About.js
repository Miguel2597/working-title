import { useEffect, useContext } from 'react'
import { IndexContext } from './IndexContext'

export default function About({ title, index }) {

    const { setSelectedIndex } = useContext(IndexContext)

    useEffect(() => {
        setSelectedIndex(index)
    }, [index, setSelectedIndex])

    return (
        <div>
            {title}
        </div>
    )
}

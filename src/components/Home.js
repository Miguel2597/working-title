import { useEffect, useContext } from 'react'
import { IndexContext } from './IndexContext'

export default function Home({ title, index }) {

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

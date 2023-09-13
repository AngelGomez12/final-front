import { Card } from '../components/Card'
import { useEffect } from 'react'
import { useGlobalContext } from '../components/utils/global.context'

export const Home = () => {
      const { state, loadData } = useGlobalContext();

    useEffect(() => {
            loadData();
    }, [])
    return (
        <div className='flex'>
            <Card />
        </div>
    )
}

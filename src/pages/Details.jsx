import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../components/utils/global.context'

export const Details = () => {
    const { id } = useParams()
    const { state, getUserById } = useGlobalContext();
    useEffect(() => {
        getUserById(id);
    }, [])
    return (
        <div className='details'>
            <img src="/images/doctor.jpg" alt="doctor" className='image' />
            <h2>{state.user.name} {state.user.lastName}</h2> 
           <p>Email: {state.user.email}</p>
            <p>Sitio Web: {state.user.website}</p>
           <p>Telefono: {state.user.phone}</p>
        </div>
    )
}

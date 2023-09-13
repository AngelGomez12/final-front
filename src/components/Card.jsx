import { useGlobalContext } from './utils/global.context'
import { Link } from 'react-router-dom'

export const Card = () => {
    const { state } = useGlobalContext();
    
    const dentistFav = (id) => {
        const dentistFav = localStorage.getItem('dentistFav') || '';
        const newDentistFav = dentistFav ? `${dentistFav},${id}` : id;
        localStorage.setItem('dentistFav', newDentistFav);
    }
    return (
        <div className='container-card'>
            {state.data.map((item) => {
                return (
                    <div key={item.id}>
                        <Link to={`/details/${item.id}`} className='card'>
                            <img src="/images/doctor.jpg" alt="doctor" className='image' />
                            <h2>{item.name}</h2>
                            <p>{item.email}</p>
                            <button onClick={() => dentistFav(item.id)}>Fav</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

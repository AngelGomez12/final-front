import { useGlobalContext } from './utils/global.context'
import { Link } from 'react-router-dom'

export const Card = () => {
    const { state, dispatch } = useGlobalContext();
    
    const dentistFav = (evt, id) => {
        evt.stopPropagation();
        const dentist = state.data.find((item) => item.id === id);
        dispatch({ type: 'ADD_FAV', payload: dentist });
    }
    return (
        <div className='container-card'>
            {state.data.map((item) => {
                return (
                    <div key={item.id}>
                        <Link to={`/details/${item.id}`} className={'card ' + state.theme}>
                            <img src="/images/doctor.jpg" alt="doctor" className='image' />
                            <h2>{item.name}</h2>
                            <p>{item.email}</p>
                        </Link>
                            <button onClick={(evt) => dentistFav(evt,item.id)} className='favButton'>Fav</button>
                    </div>
                )
            })}
        </div>
    )
}

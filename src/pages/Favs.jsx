import { useGlobalContext } from "../components/utils/global.context";

export const Favs = () => {
    const { state } = useGlobalContext();
    
    return (
        <div className={'favs ' + state.theme}>
            {state.favorites.map((item, key) => {
                return (
                    <div key={key} className={state.theme}>
                        <img src="/images/doctor.jpg" alt="doctor" className='image' />
                        <h2>{item.name}</h2>
                        <p>{item.email}</p>
                    </div>
                )
            })}
        </div>
    )
}

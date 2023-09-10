import React, { useContext, useEffect, useReducer } from 'react'
import { ContextGlobal } from './utils/global.context'
import { Link } from 'react-router-dom'

export const Card = () => {
    const { state, dispatch } = useContext(ContextGlobal)
    console.log(state, dispatch);
    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                dispatch({ type: 'SET_DATA', payload: data });
            } catch (error) {
                console.log(error);
            }
        }
        loadData();
        dispatch({ type: 'SET_DATA', payload: state.data })
    }, [])
    return (
        <div className='flex flex-wrap gap-4'>
            {state.data.map((item) => {
                return (
                    <div key={item.id} >
                        <Link to={`/details/${item.id}`}>
                            <img src="/images/doctor.jpg" alt="doctor" className='h-28 w-28' />
                            <h2>{item.name}</h2>
                            <p>{item.email}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

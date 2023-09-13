import { createContext, useReducer, useContext } from "react";

export const initialState = {
    theme: "",
    data: [],
    user: {},
}

export const ContextGlobal = createContext(undefined);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    function dataReducer(state, action) {
        switch (action.type) {
            case 'SET_THEME':
                return { ...state, theme: action.payload };
            case 'LOAD_DATA':
                return { ...state, data: action.payload };
            case 'SET_DATA':
                return { ...state, data: action.payload };
            case 'LOAD_USER':
                return { ...state, user: action.payload };
            case 'SET_USER':
                return { ...state, user: action.payload };
            case 'ADD_FAV':
                return { ...state, data: [...state.data, action.payload] };
            case 'CLEAR_DATA':
                return { ...state, data: [] };
            default:
                return state;
        }
    }

    const loadData = async () => {
        dispatch({ type: 'LOAD_DATA', payload: state.data })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch({ type: 'SET_DATA', payload: data });
        } catch (error) {
            console.log(error);
        }
    }

    const getUserById = async (id) => {
        dispatch({ type: 'LOAD_USER', payload: state.user })
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const user = await response.json();
            dispatch({ type: 'SET_USER', payload: user });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ContextGlobal.Provider value={{ state, dispatch, loadData, getUserById }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(ContextGlobal);
}

export const useLocalStorage = (key, initialValue) => {
      const dentistFav = localStorage.getItem(`${key}`) || '';
        const newDentistFav = dentistFav ? `${dentistFav},${initialValue}` : initialValue;
        localStorage.setItem('dentistFav', newDentistFav);
}
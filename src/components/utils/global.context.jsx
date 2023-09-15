import { createContext, useReducer, useContext, useEffect } from "react";

export const initialState = {
    theme: "",
    data: [],
    user: {},
    favorites: []
}

export const ContextGlobal = createContext(undefined);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
    
    function dataReducer(state, action) {
        let newFavorites = [];
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
                newFavorites = [...state.favorites, action.payload];
                localStorage.setItem('favorites', JSON.stringify(newFavorites));
                return { ...state, favorites: newFavorites };
            case 'CLEAR_DATA':
                return { ...state, data: [] };
            default:
                return state;
        }
    }

    useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      dispatch({ type: 'ADD_FAV', payload: JSON.parse(storedFavorites) });
    }
  }, []);

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

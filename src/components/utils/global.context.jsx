import { createContext, useReducer, useEffect, useContext } from "react";

export const initialState = {
    theme: "",
    data: []
}

export const ContextGlobal = createContext(undefined);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(dataReducer, initialState);
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    function dataReducer(state, action) {
        switch (action.type) {
            case 'SET_THEME':
                return { ...state, theme: action.payload };
            case 'SET_DATA':
                return { ...state, data: action.payload };
            default:
                return state;
        }
    }

    // const loadData = async () => {
    //     try {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const data = await response.json();
    //         dispatch({ type: 'SET_DATA', payload: data });
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    return (
        <ContextGlobal.Provider value={{ state, dispatch }}>
            {children}
        </ContextGlobal.Provider>
    );
};
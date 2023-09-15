import { useGlobalContext } from "../components/utils/global.context";

export const Footer = () => {
    const { state } = useGlobalContext();

    return (
        <footer className={state.theme}>Footer</footer>
    )
}

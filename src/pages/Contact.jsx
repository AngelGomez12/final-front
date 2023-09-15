import { Form } from "../components/Form";
import { useGlobalContext } from "../components/utils/global.context";

export const Contact = () => {
    const { state } = useGlobalContext();
    return (
        <div className={'contact ' + state.theme }>
            <Form />
        </div>
    )
}

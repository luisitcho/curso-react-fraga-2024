import { useContext } from "react";
import { UserContext } from "../../contexts/user";

export function Nome() {
    const { nome } = useContext(UserContext);

    return (
        <>
            <h3>Nome: {nome}</h3>
            <br />
        </>
    );
}

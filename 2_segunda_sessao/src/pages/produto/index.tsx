import { useParams } from "react-router-dom";
export function Produto() {
    const { id } = useParams();

    return (
        <>
            <h1>Produto {id}</h1>
            <hr />
        </>
    )
}
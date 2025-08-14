import { Alunos } from "./components/alunos";
import UserProvider from "./contexts/user";

export default function App() {
    return (
        <UserProvider>
            <div>
                <h1>Projeto</h1>
                <hr />
                <Alunos/>
            </div>
        </UserProvider>
    );
}

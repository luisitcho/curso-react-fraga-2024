import React, { createContext, useState } from "react";

type UserContextData = {
    aluno: string;
    nome: string;
};

type UserProviderProps = {
    children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextData);

export default function UserProvider({ children }: UserProviderProps) {
    const [aluno] = useState("Peppa 2");
    const [nome] = useState("Nome 2");

    return (
        <UserContext.Provider value={{ aluno, nome }}>
            {children}
        </UserContext.Provider>
    );
}

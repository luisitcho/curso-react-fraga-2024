import { ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebaseConnection";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate } from "react-router-dom";

interface PrivateProps {
    children: ReactNode;
}

export function Private({ children }: PrivateProps): ReactNode {
    const [loading, setLoading] = useState(true);
    const [signed, setSigned] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userDate = {
                    uid: user?.uid,
                    email: user?.email
                }

                localStorage.setItem("@reactlinks", JSON.stringify(userDate));
                setLoading(false);
                setSigned(true);

                // navigate("/admin", { replace: true }); // redireciona para a admin/
            } else {
                setLoading(false);
                setSigned(false);
                // navigate("/login", { replace: true });
            }
        });

        return () => unsubscribe(); // Cleanup function
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!signed) return <Navigate to="/login" />; // redireciona para o login caso não esteja logado

    return children;
}

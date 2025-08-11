import { useEffect, useState } from "react";
import { Social } from "../../components/Social";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConnection";

type socialLinksProps = {
    linkedin: string;
    github: string;
    instagram: string;
};

export function Footer() {
    const [socialLinks, setSocialLinks] = useState<socialLinksProps>();

    useEffect(() => {
        (function socialLinks() {
            const docRef = doc(db, "social", "link");

            getDoc(docRef)
                .then((snapshot) => {
                    const data = snapshot.data();

                    if (data) {
                        setSocialLinks({
                            linkedin: data.linkedin ?? "",
                            github: data.github ?? "",
                            instagram: data.instagram ?? "",
                        });
                    }
                })
                .catch((error) => {
                    console.log("Erro ao recupertar os dados", error);
                });
        })();
    }, []);

    const media = {
        linkedin: FaLinkedin,
        github: FaGithub,
        instagram: FaInstagram,
    };

    return (
        <>
            {socialLinks && Object.keys(socialLinks).length > 0 && (
                <footer className="footer flex justify-center items-center gap-3 my-4">
                    {Object.entries(socialLinks).map(([key, url]) =>
                        url ? (
                            <Social
                                key={key}
                                url={url}
                                icon={media[key as keyof typeof media]}
                            />
                        ) : null
                    )}
                </footer>
            )}
        </>
    );
}

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <p>© {year} - Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
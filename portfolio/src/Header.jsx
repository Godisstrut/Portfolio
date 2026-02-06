import "./Header.css";

function Header() {
    return(
        <header className="header">
            <nav className="nav">
                <a className="name">Erik</a>
                <a>Projekt</a>
                <a>Erfarenhet</a>
            </nav>
            <a className="contact">Kontakt</a>
        </header>
    )
}

export default Header
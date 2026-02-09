import "./Header.css";

function Header() {
    return(
        <header className="header">
            <nav className="nav">
                <a className="name" href="#top" >Erik</a>
                <a href="#projects" >Projekt</a>
                <a href="#experience" >Erfarenhet</a>
            </nav>
            <a className="contact" href="#contact">Kontakta mig</a>
        </header>
    )
}

export default Header
import { useEffect, useState } from "react";
import "./Header.css";

function Header() {

    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
    return(
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
            <nav className="nav">
                <a className="name" href="#top">Erik</a>
                <a href="#projects" >Projekt</a>
                <a href="#experience" >Erfarenhet</a>
            </nav>
        <a className="contact" href="#contact">Kontakta mig</a>
        </header>
    )
}

export default Header
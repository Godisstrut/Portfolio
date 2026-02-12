import { useState, useRef, useEffect } from "react";
import "./Experience.css";

function Experience() {

    const containerRef = useRef(null); // Referens till containern som håller alla erfarenhets-sektioner
    useEffect(() => {
        const elements = containerRef.current.querySelectorAll(".experience-reveal-on-scroll");
        elements.forEach((el, i) => el.style.setProperty("--delay", `${i * 120}ms`)) //Sätter ut en delay variabel

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible"); // Lägger till css klassen när elementet är synligt
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
        );
        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
   }, []);

    return(
        <section id="experience" className="experience">
            <h1>Erfarenhet</h1>
            <div className="experience-container" ref={containerRef} >
                <section className="experience-reveal-on-scroll">
                    <h2>Projekt ansvarig</h2>
                    <h3>Vocify</h3>
                    <p>Nov 2025 - Nutid</p>
                    <ul>
                        <li>Utför tester för datainsamling</li>
                        <li>Labbmiljö</li>
                        <li>Machine learning</li>
                    </ul>
                </section>
                <section className="experience-reveal-on-scroll">
                    <h2>Säljare</h2>
                    <h3>Kjell & Company - Lund</h3>
                    <p>Jul 2020 - Aug 2022</p>
                    <ul>
                        <li>Säljare med stort fokus på tekniken bakom produkterna</li>
                        <li>Självledarskap</li>
                        <li>Kundkontakt och kundservice</li>
                    </ul>
                </section>
                <section className="experience-reveal-on-scroll">
                <h2>Barnskötare</h2>
                <h3>Ängslyckans förskola - Hjärup</h3>
                <p>September 2016 - Juni 2020</p>
                <ul>
                    <li>Säljare med stort fokus på tekniken bakom produkterna</li>
                    <li>Självledarskap</li>
                    <li>Kundkontakt och kundservice</li>
                </ul>
                </section>
            </div>
        </section>
    )
}

export default Experience
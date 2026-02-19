import { useEffect, useRef } from "react";
import ErikBoi from "../assets/Examen.jpeg";
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img src={ErikBoi} alt="Bild på Erik" className="fade-in-img"></img>
            <h1 className="fade-in" >Erik Henningsson</h1>
            <p className="fade-in" >Hej! Erik heter jag och på denna hemsidan kan man kolla vad jag har byggt och hittat på de senaste åren :)</p>
        </div>
    )
}

export default Home
import ErikBoi from "./assets/Erik_boi.jpg";
import "./Home.css"

function Home() {
    return (
        <div className="home">
            <img src={ErikBoi} ></img>
            <p>Hej! Erik heter jag och på denna hemsidan kan man kolla vad jag har hittat på </p>
        </div>
    )
}

export default Home
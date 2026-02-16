import malmoskinclinic from "../assets/malmoskinclinic.mp4";
import PpHome from "../assets/PP_home.png";

export const projects = [
    {
        title: "Malmö Skin Clinic AB ",
        description: "Företagshemsida för en estetisk klinik",
        technology: ["React ", "Cloudflare Pages"],
        video: malmoskinclinic,
        live: "https://malmoskinclinic.se/",
        github: "https://github.com/Godisstrut/SkinClinicWebsite"
    },
    {
        title: "PingisPalz ",
        description: "Projekt gjort under termin två, hemsida som hjälper dig registrera resultat från pingismatcher du spelat",
        technology: ["HTML ", "CSS ", "Javascript ", "PostgreSQL ", "Node.js "],
        video: null,
        image: PpHome,
        live: null,
        github: "https://github.com/jenslars/Pingispalz"
    },
    {
        title: "SvelteSnyggingar ",
        description: "Quiz och gissa låten hemsida ",
        technology: ["Svelte ", "Javascript"],
        video: malmoskinclinic,
        live: null,
        github: "https://github.com/Godisstrut/SvelteSnyggingar"
    },
    {
        title: "Warhammer Simulator",
        description: "simulerings program för warhammer 40k brädspelet",
        technology: ["Python ", "OOP "],
        video: null,
        live: null,
        github: "https://github.com/Godisstrut/WarhammerCombatSimulator"
    }
]
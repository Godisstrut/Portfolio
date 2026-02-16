import malmoskinclinic from "../assets/malmoskinclinic.mp4";
import pphome from "../assets/PP_home.png";
import sveltesnyggingar from "../assets/SvelteSnyggingar.mp4";
import warhammer from "../assets/Warhammer.mp4";

export const projects = [
    {
        title: "Malmö Skin Clinic AB ",
        description: "Företagshemsida för en estetisk klinik i Malmö",
        technology: ["React ", "Cloudflare Pages"],
        video: malmoskinclinic,
        live: "https://malmoskinclinic.se/",
        github: "https://github.com/Godisstrut/SkinClinicWebsite"
    },
    {
        title: "PingisPalz ",
        description: "Leaderboard hemsida som låter dig registrera resultat från pingismatcher du spelat",
        technology: ["HTML ", "CSS ", "Javascript ", "PostgreSQL ", "Node.js "],
        video: null,
        image: pphome,
        live: null,
        github: "https://github.com/jenslars/Pingispalz"
    },
    {
        title: "SvelteSnyggingar ",
        description: "Quiz och musikquiz i ett hemsida ",
        technology: ["Svelte ", "Javascript"],
        video: sveltesnyggingar,
        live: null,
        github: "https://github.com/Godisstrut/SvelteSnyggingar"
    },
    {
        title: "Warhammer Simulator",
        description: "Simulerings program för warhammer 40k brädspelet",
        technology: ["Python ", "OOP "],
        video: warhammer,
        live: null,
        github: "https://github.com/Godisstrut/WarhammerCombatSimulator"
    }
]
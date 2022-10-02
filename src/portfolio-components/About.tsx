import {PersonalData as data} from "../portfolio-data"

function About() {
    return (
        <div className="about">
            <h3>{data.welcomeNote}</h3>
            <h1 className="name">
                {
                    data.name.initial ?
                    `${data.name.initial}.${data.name.firstname}` :
                    `${data.name.firstname} ${data.name.lastname}`
                }
            </h1>
            <h2 className="interested-role">{data.interestedRole}</h2>
            <div className="about-me">
                {data.aboutMe}
            </div>
            <a href="#contact" className="btn hire-me-btn">Hire me</a>
        </div>
    )
}

export default About;
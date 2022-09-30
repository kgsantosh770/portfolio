import { PersonalData } from "../portfolio-data"

function Contact() {
    return (
        <section className="contact-resume">
            <div id="contact" className="contact">
                <h2>{PersonalData.contactTitle}</h2>
                <div className="contact-note">
                    {PersonalData.contactNote}
                </div>
                <a href={`mailto:${PersonalData.emailId}`} className="btn">
                    {PersonalData.contactButtonText}
                </a>
            </div>
            <button className="resume btn">
                <span className="download-resume-text">
                    Download Resume 
                </span>
                <span className="download-icon"></span>
            </button>
        </section>
    )
}

export default Contact;
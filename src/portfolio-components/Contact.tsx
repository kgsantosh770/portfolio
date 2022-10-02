import { PersonalData } from "../portfolio-data"

function Contact() {
    return (
        <section className="contact-resume" id="contact">
            <div className="contact">
                <h2>{PersonalData.contactTitle}</h2>
                <div className="contact-note">
                    {PersonalData.contactNote}
                </div>
                <a href={`mailto:${PersonalData.emailId}`} className="btn">
                    {PersonalData.contactButtonText}
                </a>
            </div>
            <a href={PersonalData.resumeDownloadLink} className="resume btn" download>
                <span className="download-resume-text">
                    Download Resume 
                </span>
                <span className="download-icon"></span>
            </a>
        </section>
    )
}

export default Contact;
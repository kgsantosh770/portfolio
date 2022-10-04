import { PersonalData } from "../portfolio-data";

function HangingSocialMedia() {
    const socialMedias = PersonalData.socialMedia;

    const socialIcons = socialMedias.map((socialMedia, index) =>
        <li key={index}>
            <a href={socialMedia.url} target="_blank" rel="noreferrer">
                <img src={socialMedia.icon} alt={socialMedia.name} title={socialMedia.name} />
            </a>
        </li>
    )

    return (
        <div className="hanging-social">
            <ul>
                {socialIcons}
            </ul>
        </div>
    )
}

export default HangingSocialMedia;
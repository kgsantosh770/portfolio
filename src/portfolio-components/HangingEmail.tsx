import { PersonalData } from "../portfolio-data";

function HangingEmail(){
    return(
        <a href={`mailto:${PersonalData.emailId}`} className="hanging-email">
            {PersonalData.emailId}
        </a>
    )
}

export default HangingEmail;
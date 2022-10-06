import { useState } from "react";
import { PersonalData } from "../portfolio-data"

interface WorkData {
    id: number,
    name: string,
    period: string,
    role: string,
    about: string,
    techStack: string,
}

function Experience() {
    const experienceData = PersonalData.experience;
    const [workData, setWorkData] = useState<WorkData>(experienceData[experienceData.length-1]);

    const handleCompanyButtonClick = (id: number) => {
        const company = experienceData.find(company => company.id === id)
        setWorkData(company!)
    }

    const companyButtons = experienceData.map(company => {
        return (
            <div key={company.id} className="company">
                <button
                    className={`btn company-name ${workData.id === company.id ? "active" : ""}`}
                    onClick={() => handleCompanyButtonClick(company.id)}
                >
                    {company.name}
                </button>
                <span className="time-line"></span>
            </div>
        )
    })


    const workDataElement = (
        <div className="company-experience">
            <div className="role">
                {`> ${workData.role} (${workData.period})`}
            </div>
            <div className="about-work">
                {workData.about}
            </div>
            <div className="tech-stack">
                {`Tech stack worked on > ${workData.techStack}`}
            </div>
        </div>
    )

    return (
        <section id="experience" className="experience">
            <h1>Work Experience</h1>
            <div className="companies">
                {companyButtons}
            </div>
            {workDataElement}
        </section>
    )
}

export default Experience;
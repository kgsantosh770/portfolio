import { useState } from "react";
import { PersonalData as data, PersonalData } from "../portfolio-data"

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
    console.log(experienceData)
    const [workData, setWorkData] = useState<WorkData>(experienceData[experienceData.length-1]);

    const handleCompanyButtonClick = (id: number) => {
        const company = experienceData.find(company => company.id === id)
        setWorkData(company!)
    }

    const companyButtons = experienceData.map(company => {
        return (
            <>
                <button
                    key={company.id}
                    className={`btn company ${workData.id === company.id ? "active" : ""}`}
                    onClick={() => handleCompanyButtonClick(company.id)}
                >
                    {company.name}
                </button>
                <span className="time-line"></span>
            </>
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
        <section id="experience" className="experience pull-right">
            <h1>Work Experience</h1>
            <div className="companies">
                {companyButtons}
            </div>
            {workDataElement}
        </section>
    )
}

export default Experience;
import { useState } from "react";
import {PersonalData} from "../portfolio-data";

function TechIconsBox() {
    const techIconsData = PersonalData.techIcons;
    const [currentTechId, setCurrentTechId] = useState<number>(techIconsData.length - 2)

    const techIconsElement = techIconsData.map((tech, index) => 
        <img 
            key={index}
            src={currentTechId === index ? tech.coloredImageSrc : tech.imageSrc} 
            alt={tech.name} 
            title={tech.name} 
            onClick={()=>setCurrentTechId(index)}
        />
    )

    return (
        <div className="tech-box">
            <div className="tech-icons">
                {techIconsElement}
            </div>
            <div className="tech-description">
                {techIconsData[currentTechId].name}
            </div>
        </div>
    )
}

export default TechIconsBox;
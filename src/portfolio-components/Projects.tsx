import { PersonalData } from "../portfolio-data";

function Projects() {
    const projectData = PersonalData.projects;
    const smallProjectData = PersonalData.smallProjects;

    const projects = projectData.map(project => {
        return (
            <div className={`project ${project.id % 2 === 0 ? "flex-reverse" : ""}`} key={project.id}>
                <img src={project.image} alt="" className="project-img" />
                <div className="project-details">
                    <h2>{project.name}</h2>
                    <div className="desc">{project.description}</div>
                    <div className="tech-stack">
                        {project.techStack}
                    </div>
                    <a href={project.gitUrl} target="_blank"  rel="noreferrer" className="git-source">
                        <img src="./git-cat.png" alt="git-source-url" />
                    </a>
                </div>
            </div>
        )
    })

    const smallProjects = smallProjectData.map(project => {
        return (
            <div className="small-project" key={project.id}>
                <h3>{project.name}</h3>
                <div className="tech-stack">
                    {project.techStack}
                </div>
                <a href={project.gitUrl} target="_blank"  rel="noreferrer" className="git-source">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" width="24px" height="24px">
                        <g id="surface323815947">
                            <path style={{ stroke: "none", fillRule:"nonzero"}} d="M 19 21 L 5 21 C 3.898438 21 3 20.101562 3 19 L 3 5 C 3 3.898438 3.898438 3 5 3 L 12 3 L 12 5 L 5 5 L 5 19 L 19 19 L 19 12 L 21 12 L 21 19 C 21 20.101562 20.101562 21 19 21 Z M 19 21 " />
                            <path style={{ stroke: "none", fillRule:"nonzero"}} d="M 21 10 L 19 10 L 19 5 L 14 5 L 14 3 L 21 3 Z M 21 10 " />
                            <path style={{ stroke: "none", fillRule:"nonzero"}} d="M 8.277344 14.308594 L 19.308594 3.277344 L 20.722656 4.691406 L 9.691406 15.722656 Z M 8.277344 14.308594 " />
                        </g>
                    </svg>
                </a>
            </div>
        )
    })

    return (
        <section id="projects" className="projects">
            <h1>My works</h1>
            <div className="major-projects">
                {projects}
            </div>
            <div className="small-projects">
                <h2>Minor works</h2>
                {smallProjects}
            </div>
        </section>
    )
}

export default Projects;
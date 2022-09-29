import {PersonalData as data} from "../portfolio-data"

function Navbar() {
    function setActiveMenu(classname: string){
        classname = ".menu-item."+classname;
        console.log(classname)
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach(menu => {
            menu.classList.remove('active');
        });
        const clickedElement = document.querySelector(classname);
        console.log(clickedElement)
        clickedElement?.classList.add("active");
    }
    return (
        <nav>
            <a href="#about" className="name-logo">
                <span className="header-title">{data.name.logo}</span>
            </a>
            <div className="menu">
                <a href="#about"className="menu-item un about-me active" onClick={()=>setActiveMenu("about-me")}>About</a>
                <a href="#experience"className="menu-item un experience" onClick={()=>setActiveMenu("experience")}>Experience</a>
                <a href="#projects" className="menu-item un projects" onClick={()=>setActiveMenu("projects")}>Projects</a>
                <a href="#resume" className="menu-item un resume" onClick={()=>setActiveMenu("resume")}>Resume</a>
                <a href="#contact" className="menu-item un contact" onClick={()=>setActiveMenu("contact")}>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar;
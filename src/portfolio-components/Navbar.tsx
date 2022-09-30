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
                <a href="#about"className="menu-item un  menu-about-me active" onClick={()=>setActiveMenu("menu-about-me")}>About</a>
                <a href="#experience"className="menu-item un menu-experience" onClick={()=>setActiveMenu("menu-experience")}>Experience</a>
                <a href="#projects" className="menu-item un menu-projects" onClick={()=>setActiveMenu("menu-projects")}>Projects</a>
                {/* <a href="#resume" className="menu-item un menu-resume" onClick={()=>setActiveMenu("menu-resume")}>Resume</a> */}
                <a href="#contact" className="menu-item un menu-contact" onClick={()=>setActiveMenu("menu-contact")}>Contact</a>
                <a href="" className="btn">Resume</a>
            </div>
        </nav>
    )
}

export default Navbar;
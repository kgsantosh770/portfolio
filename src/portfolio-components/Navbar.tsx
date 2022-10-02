import { useEffect } from "react";
import { PersonalData } from "../portfolio-data"

function Navbar() {
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        window.onscroll = () => {
            var current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    var activeId = section.getAttribute("id");
                    if (activeId !== null) {
                        setActiveMenu(section.getAttribute("id")!);
                    }
                }
            });

        };
    }, [])

    const setActiveMenu = (classname: string) => {
        classname = ".menu-item.menu-" + classname;
        const menuItems = document.querySelectorAll(".menu-item");
        menuItems.forEach(menu => {
            menu.classList.remove('active');
        });
        const clickedElement = document.querySelector(classname);
        clickedElement?.classList.add("active");
    }
    return (
        <nav>
            <a href="#about" className="name-logo">
                <span className="header-title">{PersonalData.name.logo}</span>
            </a>
            <ul className="menu">
                <li><a href="#about" className="menu-item un  menu-about active">About</a></li>
                <li><a href="#experience" className="menu-item un menu-experience">Experience</a></li>
                <li><a href="#projects" className="menu-item un menu-projects">Projects</a></li>
                {/* <li><a href="#resume" className="menu-item un menu-resume">Resume</a></li> */}
                <li><a href="#contact" className="menu-item un menu-contact">Contact</a></li>
                <li><a href={PersonalData.resumeLink} className="btn">Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
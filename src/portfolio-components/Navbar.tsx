import { useEffect, useState } from "react";
import { PersonalData } from "../portfolio-data"

function Navbar() {
    const [hamburgerActive, setHamburgerActive] = useState(false);
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        window.onscroll = () => {
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

    useEffect(() => {
        const html = document.documentElement;
        if (window.innerWidth <= 991) {
            hamburgerActive ?
                html.style.overflow = "hidden" :
                html.style.overflow = "auto";
        }
    }, [hamburgerActive])

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
        <nav className={hamburgerActive ? "active" : ""}>
            <a href="#about" className="name-logo">
                <span className="header-title">{PersonalData.name.logo}</span>
            </a>
            <div className="hamburger" onClick={() => setHamburgerActive(prevState => !prevState)}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <ul className="menu">
                <li><a href="#about" className="menu-item un  menu-about active" onClick={() => setHamburgerActive(prevState => !prevState)}>About</a></li>
                <li><a href="#experience" className="menu-item un menu-experience" onClick={() => setHamburgerActive(prevState => !prevState)}>Experience</a></li>
                <li><a href="#projects" className="menu-item un menu-projects" onClick={() => setHamburgerActive(prevState => !prevState)}>Projects</a></li>
                <li><a href="#contact" className="menu-item un menu-contact" onClick={() => setHamburgerActive(prevState => !prevState)}>Contact</a></li>
                <li><a href={PersonalData.resumeLink} className="btn" onClick={() => setHamburgerActive(prevState => !prevState)}>Resume</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
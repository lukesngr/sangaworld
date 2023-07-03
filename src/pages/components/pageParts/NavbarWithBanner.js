import '../../../styles/navbarwithbanner.css';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';


function NavbarWithBanner(props) {
    let itemStyles = ["firstItem navItem", "navItem", "navItem"];
    itemStyles[props.current] += " currentPage";
    const [navClass, setNavClass] = useState("normal")

    function showTopDownMenu() {
        if(navClass == "normal") {
            setNavClass("responsive");
        }else{
            setNavClass("normal");
        }
    }

    if(navClass == "responsive") {
        return (
            <>
                <div className="bannerDiv">
                    <FaBars className="text-left mobileMenuButton" onClick={showTopDownMenu} size={30} fill="#7acaff"/>
                    <h1>SangaWorld</h1>
                </div>
                <nav className={navClass}>
                    <ul className="navList">
                        <li className={itemStyles[0]}><a href="/home">Home</a></li>
                        <li className={itemStyles[1]}><a href="/tools">Tools</a></li>
                        <li className={itemStyles[2]}><a href="/blog">Blog</a></li>
                    </ul>
                </nav>
            </>)

    }else{
        return (
            <>
                <nav className={navClass}>
                    <ul className="navList">
                        <li className={itemStyles[0]}><a href="/home">Home</a></li>
                        <li className={itemStyles[1]}><a href="/tools">Tools</a></li>
                        <li className={itemStyles[2]}><a href="/blog">Blog</a></li>
                    </ul>
                </nav>
                <div className="bannerDiv">
                    <FaBars className="text-left mobileMenuButton" onClick={showTopDownMenu} size={30} fill="white"/>
                    <h1>SangaWorld</h1>
                </div>
            </>)
    }

    
}

export default NavbarWithBanner;
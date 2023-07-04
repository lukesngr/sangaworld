import '../../../styles/navbarwithbanner.scss';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';

function NavElement(props) {
    return (
    <nav className={props.navClass}>
        <ul className="navList">
            <li className={props.itemStyles[0]}><a href="/home">Home</a></li>
            <li className={props.itemStyles[1]}>
                <a href="#">Tools</a>
                <ul className="toolsDropdown">
                    <li>
                        <a href="/tools/backprop">Backpropagation Visualizer</a>
                    </li>
                    <li>
                        <a href="/tools/forwardnnvisualizer">NN Visualizer</a>
                    </li>
                </ul>
            </li>
            <li className={props.itemStyles[2]}><a href="/blog">Blog</a></li>
        </ul>
    </nav>)
}

function Banner(props) {
    return (
        <div className="bannerDiv">
            <FaBars className="text-left mobileMenuButton" onClick={props.onClickFunction} size={30} fill={props.fill}/>
            <h1>SangaWorld</h1>
        </div>
    )
}


function NavbarWithBanner(props) {
    let itemStyles = ["firstItem navItem", "navItem toolsNav", "navItem"];
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
                <Banner fill="#7acaff"  onClickFunction={showTopDownMenu}></Banner>
                <NavElement navClass={navClass} itemStyles={itemStyles}></NavElement>
            </>)

    }else{
        return (
            <>
                <NavElement navClass={navClass} itemStyles={itemStyles}></NavElement>
                <Banner fill="white" onClickFunction={showTopDownMenu}></Banner>
            </>)
    }

    
}

export default NavbarWithBanner;
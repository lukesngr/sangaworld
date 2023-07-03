import '../../styles/navbar.css';
import "../../styles/banner.css";
import { FaBars } from "react-icons/fa";


function NavbarWithBanner(props) {
    let itemStyles = ["firstItem navItem", "navItem", "navItem"];
    itemStyles[props.current] += " currentPage";
    return (
    <>
        <nav>
            <ul className="navList">
                <li className={itemStyles[0]}><a href="/home">Home</a></li>
                <li className={itemStyles[1]}><a href="/tools">Tools</a></li>
                <li className={itemStyles[2]}><a href="/blog">Blog</a></li>
            </ul>
        </nav>
        <div className="bannerDiv">
            <FaBars className="text-left" size={40} fill="white"/>
            <h1 className="text-center">SangaWorld</h1>
        </div>
    </>)
}

export default NavbarWithBanner;
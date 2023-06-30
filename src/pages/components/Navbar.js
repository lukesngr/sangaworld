import '../../styles/navbar.css';

function Navbar(props) {
    let itemStyles = ["firstItem navItem", "navItem", "navItem"];
    itemStyles[props.current] += " currentPage";
    return (
    <nav>
        <ul className="navList">
            <li className={itemStyles[0]}><a href="/home">Home</a></li>
            <li className={itemStyles[1]}><a href="/tools">Tools</a></li>
            <li className={itemStyles[2]}><a href="/blog">Blog</a></li>
        </ul>
    </nav>)
}

export default Navbar;
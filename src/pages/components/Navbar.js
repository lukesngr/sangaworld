import styles from '../../styles/navbar.module.css';

function Navbar() {
    return (
    <nav>
        <ul className={styles.navList}>
            <li><a href="/home">Home</a></li>
            <li><a href="/tools">Tools</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </nav>)
}

export default Navbar;
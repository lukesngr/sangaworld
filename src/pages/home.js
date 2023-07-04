import NavbarWithBanner from "./components/pageParts/NavbarWithBanner"
import ExpandableCards from "./components/home/ExpandableCards";
import RNPImage from "./components/home/RNPImage";
import Footer from "./components/pageParts/Footer";
import Skills from "./components/home/Skills";

function Home() {
    return (<>
    <NavbarWithBanner current={0} />
    <ExpandableCards />
    <Skills></Skills>
    <Footer></Footer>
    </>)
}

export default Home;
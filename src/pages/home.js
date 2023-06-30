import Navbar from "./components/Navbar"
import SangaWorldBanner from "./components/SangaWorldBanner";
import ExpandableCards from "./components/ExpandableCards";
import RNPImage from "./components/RNPImage";
import Footer from "./components/Footer";

function Home() {
    return (<>
    <Navbar current={0} />
    <SangaWorldBanner />
    <ExpandableCards />
    <RNPImage />
    <Footer></Footer>
    </>)
}

export default Home;
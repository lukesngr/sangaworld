import Navbar from "./components/Navbar"
import SangaWorldBanner from "./components/SangaWorldBanner";
import ExpandableCards from "./components/ExpandableCards";
import RNPImage from "./components/RNPImage";

function Home() {
    return (<>
    <Navbar current={0} />
    <SangaWorldBanner />
    <ExpandableCards />
    <RNPImage />
    </>)
}

export default Home;
import Navbar from "./components/Navbar"
import SangaWorldBanner from "./components/SangaWorldBanner";
import ExpandableCards from "./components/ExpandableCards";

function Home() {
    return (<>
    <Navbar current={0} />
    <SangaWorldBanner />
    <ExpandableCards />
    </>)
}

export default Home;
import NavbarWithBanner from "./components/NavbarWithBanner"
import ExpandableCards from "./components/ExpandableCards";
import RNPImage from "./components/RNPImage";
import Footer from "./components/Footer";

function Home() {
    return (<>
    <NavbarWithBanner current={0} />
    <ExpandableCards />
    <RNPImage />
    <Footer></Footer>
    </>)
}

export default Home;
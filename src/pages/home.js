import NavbarWithBanner from "./components/pageParts/NavbarWithBanner"
import ExpandableCards from "./components/home/ExpandableCards";
import Footer from "./components/pageParts/Footer";
import Skills from "./components/home/Skills";
import Links from "./components/home/Links"

function Home() {
    return (<>
    <NavbarWithBanner current={0} />
    <ExpandableCards />
    <Skills></Skills>
    <Links></Links>
    <Footer></Footer>
    </>)
}

export default Home;
import NavbarWithBanner from "../components/pageParts/NavbarWithBanner"
import ExpandableCards from "../components/home/ExpandableCards";
import Footer from "../components/pageParts/Footer";
import Skills from "../components/home/Skills";
import Links from "../components/home/Links";
import Meta from "../components/pageParts/Meta";

function Home() {
    return (<>
    <Meta siteTitle="Homepage" description="Homepage with summary of LUke Sanger's professional summary,  skills and contact points"></Meta>
    <NavbarWithBanner current={0} />
    <ExpandableCards />
    <Skills></Skills>
    <Links></Links>
    <Footer></Footer>
    </>)
}

export default Home;
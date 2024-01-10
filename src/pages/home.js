import NavbarWithBanner from "../components/pageParts/NavbarWithBanner"
import DialogBoxProfile from "../components/home/DialogBoxProfile";
import Footer from "../components/pageParts/Footer";
import Skills from "../components/home/Skills";
import Meta from "../components/pageParts/Meta";
import { DialogBoxContextProvider } from "../components/home/DialogBoxContext";

function Home() {
    
    return (<>
    <Meta siteTitle="Homepage" description="Homepage with summary of LUke Sanger's professional summary,  skills and contact points"></Meta>
    <NavbarWithBanner current={0} />
    <DialogBoxContextProvider>
        <DialogBoxProfile />
        <Skills></Skills>
        <Footer></Footer>
    </DialogBoxContextProvider>
    </>)
}

export default Home;
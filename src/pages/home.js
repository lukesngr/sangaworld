import NavbarWithBanner from "../components/pageParts/NavbarWithBanner"
import DialogBoxProfile from "../components/home/DialogBoxProfile";
import Footer from "../components/pageParts/Footer";
import Skills from "../components/home/Skills";
import Meta from "../components/pageParts/Meta";
import { createContext, useState } from "react";

const DialogBoxContext = createContext();

function Home() {
    const [dialogBoxHidden, setDialogBoxHidden] = useState(false);
    return (<>
    <Meta siteTitle="Homepage" description="Homepage with summary of LUke Sanger's professional summary,  skills and contact points"></Meta>
    <NavbarWithBanner current={0} />
    <DialogBoxContext.Provider value={{dialogBoxHidden, setDialogBoxHidden}}>
        <DialogBoxProfile />
        <Skills></Skills>
        <Footer></Footer>
    </DialogBoxContext.Provider>
    </>)
}

export default Home;
export {DialogBoxContext};
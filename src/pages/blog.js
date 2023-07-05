import Meta from "./components/pageParts/Meta";
import NavbarWithBanner from "./components/pageParts/NavbarWithBanner";
import Footer from "./components/pageParts/Footer";
import { useQuery } from "react-query";
import axios from "axios";

function Blog(props) {

    const { isLoading, isError, data, error} = useQuery(["repo"], () =>
        axios
        .get("/api/getBlogPosts")
        .then((res) => res.data)
    );

    console.log(data)
    
    return (
    <>
        <Meta siteTitle="Blog Posts" description="List of all blog posts"></Meta>
        <NavbarWithBanner></NavbarWithBanner>
            <div className="container">
                <div className="row">

                </div>
            </div>
        <Footer></Footer>
    </>  
    )
}

export default Blog;
import Meta from "./components/pageParts/Meta";
import NavbarWithBanner from "./components/pageParts/NavbarWithBanner";
import Footer from "./components/pageParts/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import Image from 'next/image';
import '../styles/posts.scss';

function Blog(props) {

    const { isLoading, isError, data, error} = useQuery(["repo"], () =>
        axios
        .get("/api/getBlogPosts")
        .then((res) => res.data)
    );

    if(isLoading) {
        return (<h1>Loading</h1>);
    }

    const blogData = data.blogData;
    console.log(blogData);
    
    return (
    <>
        <Meta siteTitle="Blog Posts" description="List of all blog posts"></Meta>
        <NavbarWithBanner></NavbarWithBanner>
            <div className="container">
                {blogData.map(blogPost => { return (
                    <div className="postRow row">
                        <div className="col-md">
                            <Image key="thumbnail" className="thumbnailPicture" src={blogPost.thumbnailPath} width={200} height={200} alt="Thumbnail for post"></Image>
                        </div>
                        <div className="col-md">
                            <a href={blogPost.postPath}>{blogPost.metaData.title}</a>
                            <span class="badge badge-primary">{blogPost.metaData.author}</span>
                            <span class="badge badge-secondary">{blogPost.metaData.date}</span><br></br>
                            <p>{blogPost.metaData.description}</p>
                        </div>
                    </div>
                )
                })}
            </div>
        <Footer></Footer>
    </>  
    )
}

export default Blog;
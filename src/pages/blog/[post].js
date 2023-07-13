import ReactMarkdown from "react-markdown"
import NavbarWithBanner from "../../components/pageParts/NavbarWithBanner";
import Footer from "../../components/pageParts/Footer";
import Meta from "../../components/pageParts/Meta";
import '../../styles/blogpost.scss'
import { PrismaClient } from '@prisma/client'
import { useEffect } from "react";

const prisma = new PrismaClient()

function BlogPage(props) {
    let isPropsEmpty = (props == {});
    let content = JSON.parse(props.content);
    return (
    <>
        
        <NavbarWithBanner></NavbarWithBanner>
        {!isPropsEmpty && <>
        <Meta siteTitle={content.title} description={content.description}></Meta>
        <div className="postDiv">
            <h1>{content.title}</h1>
            <span class="badge badge-primary">{content.author}</span>
            <span class="badge badge-secondary">{content.date}</span>
            <ReactMarkdown>{content.content}</ReactMarkdown>
        </div>
        </>}
        {isPropsEmpty && <h1>Loading</h1>}
        <Footer></Footer>
    </>    
    )
}

export async function getStaticProps(context) {
    const { post } = context.params
    const content = await prisma.posts.findUnique({
        where: {
            postName: post
        }
    })
    const stringifiedData = JSON.stringify(content);
  
    return {
      props: {
        content: stringifiedData
      }
    }
}
  
  export async function getStaticPaths() {
    const blogPosts = await prisma.posts.findMany();
    const paths = blogPosts.map(post => { return { params: { post: post.postName } } })

    return {
        paths,
        fallback: false,
    }
}  


export default BlogPage;
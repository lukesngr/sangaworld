import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import NavbarWithBanner from "../components/pageParts/NavbarWithBanner";
import Footer from "../components/pageParts/Footer";
import Meta from "../components/pageParts/Meta";
import { glob } from "glob";
import '../../styles/blogpost.scss'

function BlogPage(props) {
    let isPropsEmpty = (props == {});
    console.log(props, isPropsEmpty);
    return (
    <>
        
        <NavbarWithBanner></NavbarWithBanner>
        {!isPropsEmpty && <>
        <Meta siteTitle={props.frontmatter.title} description={props.frontmatter.description}></Meta>
        <div className="postDiv">
            <h1>{props.frontmatter.title}</h1>
            <span class="badge badge-primary">{props.frontmatter.author}</span>
            <span class="badge badge-secondary">{props.frontmatter.date}</span>
            <p>
                {props.markdownBody.split('\r\n').map(text => {return (<>{text}<br></br></>)})}
            </p>
        </div>
        </>}
        {isPropsEmpty && <h1>Loading</h1>}
        <Footer></Footer>
    </>    
    )
}

export async function getStaticProps(context) {
    const { post } = context.params
    const content = await import(`../posts/${post}.md`)
    const data = matter(content.default)
  
    return {
      props: {
        frontmatter: data.data,
        markdownBody: data.content,
      }
    }
}
  
  export async function getStaticPaths() {

    const blogs = glob.sync(`posts/**/*.md`)

    const blogPosts = blogs.map(file =>
        file
        .split('/')[1]
        .replace(/ /g, '-')
        .slice(0, -3)
        .trim()
    )

    const paths = blogPosts.map(post => { return { params: { post: post } } })

    return {
        paths,
        fallback: false,
    }
}  


export default BlogPage;
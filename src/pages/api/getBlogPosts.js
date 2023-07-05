import { glob } from "glob";
import { readFileSync } from "fs";
import matter from "gray-matter";

export default async function handler(req, res) {
    const blogs = glob.sync(`src/pages/posts/*.md`)
    var blogData = [];

    blogs.forEach(function(currentValue) {
        let data = readFileSync(currentValue, 'utf8');
        let postPath = currentValue.replace("src\\pages\\posts\\", "/blog/");
        postPath = postPath.replace(".md", "");
        let thumbnailPath = currentValue.replace("src\\pages\\posts\\", "/posts/").replace(".md", ".jpg");
        blogData.push({postPath, thumbnailPath, metaData: matter(data).data});
        
    })

    res.status(200).json({ blogData })
  }
import { glob } from "glob";
import { readFileSync } from "fs";
import matter from "gray-matter";

export default async function handler(req, res) {
    const blogs = glob.sync(`src/pages/posts/*.md`)
    var blogData = [];

    blogs.forEach(function(currentValue) {
        let data = readFileSync(currentValue, 'utf8');
        blogData.push({path: currentValue, metaData: matter(data).data});
        
    })

    res.status(200).json({ blogData })
  }
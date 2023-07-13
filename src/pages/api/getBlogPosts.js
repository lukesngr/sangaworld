import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    const blogs = await prisma.posts.findMany();
    var blogData = [];

    blogs.forEach(function(post) {
        
        blogData.push({postPath: "/blog/"+post.postName, thumbnailPath: "/posts/"+post.postName+".JPG", 
        metaData: {author: post.author, date: post.date, title: post.title, description: post.description}});
        
    })

    res.status(200).json({ blogData })
  }
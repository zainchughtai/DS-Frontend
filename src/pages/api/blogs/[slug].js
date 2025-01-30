// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import blogs from '@/data/Blogs/index';
export default function  handler(req, res) {
  const slug = req.query.slug;
    const blog = blogs.find((blog) => blog.slug === slug);
    if(blog){
      res.status(200).json(blog);
    }
    else{
      res.status(404).json({message: 'Blog not found'});
    }
  }
  
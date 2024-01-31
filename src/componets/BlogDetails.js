import React from "react";
import { Link } from "react-router-dom";


function BlogDetails({post})
{
    return(
        <>
        <div key={post.id}>
        <Link to={`/blog/${post.id}`}>
        <h2 className="title">{post.title}</h2>
        </Link>
        <p >By <span className="author">{post.author}</span> on <Link to={`/categories/${post.category?.replaceAll(" ","-")}`}><span className="category">{post.category}</span></Link></p>
        <p className="content content">Posted On {post.date} </p>
       
        <p className="content">{post.content}</p>
        <p>
            {post.tags?.map((tag, index) => {
                return (
                <Link key={index} to={`/tags/${tag?.replaceAll(" ","-")}`}><span  className="hash content">{`#${tag} `}</span>;</Link>)
            })}
        </p>

    </div>
    </>
    )
}

export default BlogDetails
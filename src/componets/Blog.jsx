import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import { Link, NavLink } from "react-router-dom";
import BlogDetails from "./BlogDetails";

function Blog() {
    const { posts, loader } = useContext(AppContext);

    return (
        <div className="blog-container">
            {
                (loader) ? (<Spinner />) : (

                    (posts.length == 0) ? (<div>Post Not Found</div>) :
                        (
                            <div className="post-container">
                                {
                                    posts.map((post) =>
                                    (
                                        <BlogDetails post={post} key={post.id}/>
                                    )
                                    )}
                            </div>
                        )

                )
            }
        </div>
    )

}

export default Blog;
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BlogDetails from "../componets/BlogDetails";
import Spinner from "../componets/Spinner";
import { AppContext } from "../context/AppContext";
import Header from "../componets/Header";
import Pagitation from "../componets/pagitation";


function BlogPage()
{
    const[searchBlog,setSearchBlog]= useState({});
    const[relatedBlog,setRealatedBlog] = useState([]);

    const {loader,setLoder} = useContext(AppContext);

    const location = useLocation();
    const navigate = useNavigate();
    const blogid = location.pathname.split('/').at(-1);

    let url =  `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogid}`

    function fetchandSetblog()
    {
        try{
            setLoder(true);
            axios.get(url)
            .then((response)=>{
                console.log(response.data);
                setSearchBlog(response.data.blog);
                setRealatedBlog(response.data.relatedBlogs);
                setLoder(false);
            });
        }
        catch(error)
        {
            console.log("error");
            setSearchBlog({})
            setRealatedBlog([])
        }

    }

    useEffect(()=>{
        if(blogid)
        {
            fetchandSetblog();
        }

    },[location.pathname,location.search]);


    return(
        <div>
            <Header/>
            <div >
                <button className="backbtn" onClick={()=>navigate(-1)}>Back</button>
            </div>
            <div className="blog-container">
                {(loader)?(<Spinner/>):(<BlogDetails post={searchBlog}/>)}    
            </div>

            <div>
                <h1>Related Blog</h1>
                <div className="blog-container">
                    {
                        (loader)?(<Spinner/>):(
                        (relatedBlog.length > 1)?(
                            relatedBlog.map((blog,index)=>{
                                return <BlogDetails post={blog} key={index}/>
                            })
                        ):(
                            <div> related blog not found </div>
                        ))
                    }
                 
                </div>
            </div>
            <Pagitation/>
        </div>
    )
}

export default BlogPage;
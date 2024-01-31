import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Link, useLocation } from "react-router-dom";
import Header from "../componets/Header";
import { useNavigate } from "react-router-dom";
import Blog from "../componets/Blog";
import Pagitation from "../componets/pagitation";
function Tag()
{
    const location = useLocation();
    let tag = location.pathname.split('/').at(-1).replaceAll("-"," ");
    const navigate = useNavigate();
    
    return(
        <>
            <Header></Header>
            <div>
              <button className="blog-container" onClick={()=> navigate(-1)}>
                    Back
                </button>
                <h2>
                    Blog Tagged {tag}
                </h2>
            </div>
            <Blog />
            <Pagitation/>
        </>
    )
}

export default Tag;
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../componets/Header";
import { useNavigate } from "react-router-dom";
import Blog from "../componets/Blog";
import Pagitation from "../componets/pagitation";

function Category()
{
    const location =  useLocation();
    const category = location.pathname.split('/').at(-1).replaceAll("-"," ");

    const navigate = useNavigate();
    
 return(
    <>
    <Header></Header>
    <div>
              <button className="blog-container" onClick={()=> navigate(-1)}>
                    Back
                </button>
                <h2>
                    Blog Category {category}
                </h2>
            </div>
    <Blog/>
    <Pagitation/>
    </>
 )
}

export default Category;
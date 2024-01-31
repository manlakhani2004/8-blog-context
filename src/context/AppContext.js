import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

// 1 create context
export const AppContext = createContext();

// 2 context provider

export default function AppContextProvider({ children }) {
    const [loader, setLoder] = useState(false);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [TotalPage, setTotalPage] = useState(null);
    const navigate = useNavigate();

    //api path
    const apiEndpPoint = "https://codehelp-apis.vercel.app/api/get-blogs";

    function fetchandSetdata(page = 1,tag=null,category) {
        let url = `${apiEndpPoint}?page=${page}`;

        if(tag)
        {
            url += `&tag=${tag}`;
        }

        if(category)
        {
            url += `&category=${category}`;
        }

        try {
            setLoder(true)
            axios(url)
                .then((response) => {
                    // console.log(response);
                    //set the data
                    setPosts(response.data.posts);
                    setCurrentPage(response.data.page);
                    setTotalPage(response.data.totalPages);
                    setLoder(false);
                });
        }
        catch (error) {
            console.log("This error from api call");
            setLoder(false);
            setPosts([]);
            setTotalPage(null);
            setCurrentPage(1);
        }
    }

    function clickhandler(page)
    { 
        setCurrentPage(page);
        navigate({search:`?page=${page}`});
    }



    let values = {
        loader,
        setLoder,
        posts,
        setPosts,
        currentPage,
        setCurrentPage,
        TotalPage,
        setTotalPage,
        fetchandSetdata,
        clickhandler
    }


    return <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
}
import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagitation() {
    const { currentPage, TotalPage, clickhandler } = useContext(AppContext);

    return (
        <div className="pagitation">
            <div className="btns">
                { currentPage < TotalPage && 
                    <button className="btn nextbtn" onClick={()=>clickhandler(currentPage+1)}>Next</button>
                }
                { currentPage > 1 &&
                    <button className="btn previousbtn" onClick={()=>clickhandler(currentPage-1)}>Previous</button>
                }
            </div>
            <div>
                <div className="content">{`Page ${currentPage} of ${TotalPage}`}</div>
            </div>
        </div>)
}

export default Pagitation;
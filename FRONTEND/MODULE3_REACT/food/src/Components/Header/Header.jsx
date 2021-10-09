import React, { useState, useEffect } from 'react';
import "./Header.css";
const Header = () =>{
    return(
        <div className="headercontent">
            <div className="symbol">
                SYMBOL
            </div>
            <div className="headertext">
            <div className="homepage">HOME</div>
            <div className="searchheader">SEARCH</div>
            </div>
        </div>
    );
}

export default Header;


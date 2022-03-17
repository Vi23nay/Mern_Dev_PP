import React, { useState, useEffect } from 'react';
const img_path = "https://image.tmdb.org/t/p/w1280";

const Homepage = (props) => {
    let d = props.data;
    return ( 
        <div className='movie'>
           <img src={img_path + d.poster_path} alt={d.title}/>
           <div className='movie-info'>
               <h3>{d.title}</h3>
               <span>{d.vote_average}</span>
           </div>

           <div className='movie-over'>
               <h2>Overview</h2>
               <p>{d.overview}</p>
           </div>
        </div> 
     );
}
export default Homepage;
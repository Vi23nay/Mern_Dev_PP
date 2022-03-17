import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Routes,
  Switch,
} from "react-router-dom";
import Homepage from './Components/Movies_APP/Homepage.jsx';

function App() {
  // let list=[];
  // const [list1,setlist1] = useState(list);

  // const adduser = (selectlist) =>{
  //   setlist1(selectlist);
  // }

  const[movies,setmovies] = useState([
    // {
    // "adult":false,
    // "backdrop_path":"/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
    // "genre_ids":[28,12,878],
    // "id":634649,
    // "original_language":"en",
    // "original_title":"Spider-Man: No Way Home",
    // "overview":"Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.","popularity":10326.298,"poster_path":"/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg","release_date":"2021-12-15","title":"Spider-Man: No Way Home","video":false,"vote_average":8.2,"vote_count":9744},{"adult":false,"backdrop_path":"/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg","genre_ids":[16,10751,35,14],"id":508947,"original_language":"en","original_title":"Turning Red","overview":"Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.","popularity":5473.828,
    // "poster_path":"/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    // "release_date":"2022-03-10",
    // "title":"Turning Red",
    // "video":false,
    // "vote_average":7.4,
    // "vote_count":497
    // }
  ]);


  useEffect(async()=>{
    const data = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1');
    let movieData = data.data.results;
    // console.log(movieData);
    setmovies(movieData);
    let a = movies[0];
    console.log(a);
  },[]);

  return (
    // <div className='container-fluid movie-app'>
    //   <div className='row' style={{height:"40vh",width:"100vw"}}>
    //   <Homepage movies={movies}></Homepage>
    //   </div>
    // </div>
    <div className='movie-container'>
      {
        movies.length > 0 && movies.map((movie)=>{
          return <Homepage key = {movie.id} data = {movie}></Homepage>
        })
      }
    </div>
  );
}

export default App;
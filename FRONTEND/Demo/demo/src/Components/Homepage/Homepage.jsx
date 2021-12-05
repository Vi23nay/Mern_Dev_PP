import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  import'./homepage.css';

const Homepage = () => {
    const [data,setdata] = useState([]);
    const [search,setsearch] = useState("");
    const [displaysearch,setdisplaysearch] = useState([]);
    const [msg,setmsg] = useState("");
    const [toggle,settoggle] = useState(false);

    let searched = (e)=>{
        let val = e.target.value;
        setsearch(val);
        let obj1 = 0;
        obj1 = data.find(ele => ele.id == val);
        if(obj1 != 0){
            setdisplaysearch(obj1);
            settoggle(true);
        }
        else{
            setmsg("Wrong Input Entered");
            return;
        }
    }

    useEffect( async ()=>{
        let apidata = await axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json");
        setdata(apidata.data);
    },[]);

    const candidateiddata = (obj)=>{
        let id1 = obj.id;
        window.localStorage.setItem('id',id1);
    }



    return ( 
        <div className="root">
            <div className="upper">
                <div className="selected">
                <h1>Selected Candidates</h1>
                <p>User1</p>
                <p>Richard Hansons</p>
                <p>Betty Hanson</p>
                </div>
                <div className="rejected">
                <h1>Rejected Candidates</h1>
                <p>User2</p>
                <p>Dotty Feliz</p>
                </div>
            </div>

            <div className="lower">
                <h1>List Of Candidates</h1>
                <div style={{height:"5%",width:"10%"}}>
                <label htmlFor="">Search using Candidate Id</label>
                <input style={{padding:"0.2rem"}} value={search} onChange={(e) => searched(e)} type="text" />
                </div>

                {
                    (toggle == true) ?
                    (
                        <div className="lowercardsection">
                    {
                        displaysearch.map((obj)=>{
                            return <div className="onecandidate">
                            <img src={obj.Image} alt="" />
                            <h3>{obj.name}</h3>
                            <h6>{obj.id}</h6>
                            <Link to="/candidate">
                            <button
                            onClick={()=> candidateiddata(obj)}
                            >
                                View Profile
                            </button>
                            </Link>
                            </div>
                        })
                    }
                </div>
                    )
                    :
                    (
                        <></>
                    )
                }

                <div className="lowercardsection">
                    {
                        data.map((obj)=>{
                            return <div className="onecandidate">
                            <img src={obj.Image} alt="" />
                            <h3>{obj.name}</h3>
                            <h6>{obj.id}</h6>
                            <Link to="/candidate">
                            <button
                            onClick={()=> candidateiddata(obj)}
                            >
                                View Profile
                            </button>
                            </Link>
                            </div>
                        })
                    }
                </div>


            </div>
        </div>
     );
}
 
export default Homepage;
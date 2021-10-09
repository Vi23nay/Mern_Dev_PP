import React, { useState } from 'react';
let img1 = <img src="https://image.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg" alt="" />;
let img2 = <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />;
const UseState = () =>{
    const [count , setCount] = useState(1);
    const [image, setimage] = useState(img1);

    const increasecount = ()=>{
        // console.log("increase");
        setCount(prevCount => prevCount+1);
        setimage(img2);
    }

    const decreasecount = ()=>{
        // console.log("decrease");
        setCount(prevCount => prevCount-1);
        setimage(img1);
    }

    return (
        <div>
            <p>{count}</p>
            <div>{image}</div>
            <button onClick={increasecount}>+</button>
            <button onClick={decreasecount}>-</button>
        </div>
    );

};

export default UseState;




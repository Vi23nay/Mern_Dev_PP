import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import "./Contents.css";

const Content = ()=>{
    
    const opts = {
        height: '390',
        width: '640',
        border:'none',
        allow:'fullscreen',
        playerVars: {
          autoplay:1,
          autohide:1,
        },
      };

      function onReady(e){
        // access to player in all event handlers via event.target
        e.target.playVideo();
      }

    return(
        <div className="contents">
            <div className="contents1">
            <h3 id="namecar">BLACK BADGE</h3>
            <h1 id="namecar1">LANDSPEED COLLECTION</h1>
            <button className="discovermore">DISCOVER MORE</button>
            </div>

            <div className="contents2">
                <div className="c2">
                    <h1 className="c2h1">INSPIRING GREATNESS</h1>
                    <button className="discovermore">DISCOVER MORE</button>
                </div>

                <div className="ytdiv">
                <YouTube className="youtubec2style" videoId="UgaanuR1F9M" opts={opts} onReady={onReady}></YouTube>
                </div>
            </div>


            <div className="contents3">

            </div>
        </div>
    );
}

export default Content;

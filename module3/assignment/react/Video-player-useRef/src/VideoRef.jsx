import { useState } from "react";
import { useRef } from "react";

function VideoRef(){
   const [video, setVideo]=useState()
    const videoRef=useRef()
    const play=()=>{
   

    }
    const pause=()=>{

    }
return(
<div>
<video src="https://www.w3schools.com/html/mov_bbb.mp4
"></video>
<button onClick={play}>Play</button>
<button onClick={pause}> Pause</button>
<button onClick={forward}>Pause</button>
<button onClick={rewind}> Rewind</button>
 

</div>
)

}
export default VideoRef;
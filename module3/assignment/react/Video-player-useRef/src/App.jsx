import { useRef } from 'react'
import './App.css'

function App(){
const videoRef=useRef(null)
const play=()=>{

videoRef.current.play()

}
const pause=()=>{

videoRef.current.pause()
}

const forward =()=>{

videoRef.current.currentTime += 5;
}

const rewind=()=>{

videoRef.current.currentTime -= 5;
}



  return(
    <div>
      <h4>The video is controlled using useRef</h4>
<video ref={videoRef} width="500"src='https://www.w3schools.com/html/mov_bbb.mp4
'></video>




<div>
<button onClick={play}>Play</button>
<button onClick={pause}>Pause</button>
<button onClick={forward}>Forward</button>
<button onClick={rewind}>Rewind </button>
    </div>
    </div>
  )
}

export default App;
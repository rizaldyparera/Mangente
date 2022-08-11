import '../styles/globals.css';
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect(() => {  
    var Audio = document.getElementById("myAudio");
    Audio.autoplay = true;
    Audio.volume = 0.4;
});
<>
<audio id="myAudio" src="/Assets/music.mp3"></audio>
</>
  return <Component {...pageProps} />
}

export default MyApp

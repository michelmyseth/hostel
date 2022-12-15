import React from 'react';
import './HomeStyles.css';
import Video from '../../assets/ukiyo_video.mp4';
import Img_source from '../../assets/la_source.jpeg'

function Home() {
    return (
        <div className="main">
            <video autoPlay loop muted id="video">
                <source src={Video} tupe='video/mp4'/>
            </video>
            <div className='hero-banner'>
                <p>banner</p>
            </div>
            <div className='container'>
            <br/><br/><br/><br/><br/><br/>
            <div class="centered">
                Prenez part à un voyage à la frontière des eaux.<br/>
                le temps se fige, on se perd et se retrouve.<br/>
                Là, tout reprend son sens, sa source.<br/><br/><br/>                                                                                                                                                                                                                                                                                                
                _La Source<br/>
            </div>
            <img src={Img_source} id='source' alt="/"/>
    </div> 
    </div>
    );
}

export default Home;

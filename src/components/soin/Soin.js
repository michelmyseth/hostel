import React from 'react'
import icon1 from '../../assets/icon1.jpeg'
import icon2 from '../../assets/icon2.jpeg'
import icon3 from '../../assets/icon3.jpeg'
import icon4 from '../../assets/icon4.jpeg'
import {Link} from 'react-router-dom'


function Soin(){
    return (

<>
<h1 style={{textAlign: "center"}}>LES GRANDS SOIN CEREMONIALS</h1>
<h2 style={{textAlign: "center", color:"rgb(191, 142, 0)"}}>l'art traditionnel de la beaute et du bien-être</h2><br/><br/>
<div class="row row-cols-1 row-cols-md-4 g-4">
  <div class="col">
    <div class="card h-100">
      <img src={icon1} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: "center", fontStyle: "italic"}}>Hanami</h5>
        <h6 class="card-title2" style={{textAlign: "center", fontStyle: "italic"}}>l'hymne a la jeunesse</h6>
        <p class="card-text" style={{textAlign: "center", textDecoration:"underline", color:"red"}}><Link to="/la_maison" >Maîtriser les effets du temps</Link></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={icon2} className="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: "center", fontStyle: "italic"}}>Tsukimie</h5>
        <h6 class="card-title2" style={{textAlign: "center", fontStyle: "italic"}}>Le soin éclat à la feuille d'or</h6>
        <p class="card-text" style={{textAlign: "center", textDecoration:"underline"}}><Link to="/la_maison" >Découvrir l'experience</Link></p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={icon3} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: "center", fontStyle: "italic"}}>Kodama</h5>
        <h6 class="card-title2" style={{textAlign: "center", fontStyle: "italic"}}>Un voyage vers la sérènité</h6>
        <p class="card-text" style={{textAlign: "center", textDecoration:"underline"}}><Link to="/la_maison" >Trouver l'apaisement</Link></p>
      </div>
    </div>
  </div>
    <div class="col">
    <div class="card h-100">
      <img src={icon4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title" style={{textAlign: "center", fontStyle: "italic"}}>Azukie</h5>
        <h6 class="card-title2" style={{textAlign: "center", fontStyle: "italic"}}>Libération du corps et de l'esprit</h6>
        <p class="card-text" style={{textAlign: "center", textDecoration:"underline"}}><Link to="/la_maison" >Recouvrir l'équilibre</Link></p>
      </div>
    </div>
  </div>
</div>

</>
    );
}

export default Soin;
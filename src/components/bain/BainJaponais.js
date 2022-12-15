import React from 'react'
import Img1 from '../../assets/bain_japonais.jpeg'

function BainJaponais(){
    return (
<div class="container-fluid">
  <div class="row">
    <div class="col-md-6">
      <img style={{width: '100%'}} src={Img1} alt=""/>
    </div>
    <div class="col-md-6">
      <h1 style={{textAlign: "center"}}>l'experience AGILE</h1>
      <p style={{textAlign: "center"}}>plongez dans notre source chaude. <br/>
      Laissez la préoccupation derrière vous et laissez-vous aller un instant.<br/>
      Le parfum du cèdre dans l'air, le murmure de l'eau, une expiration de l'âme.<br/>
      Une envie de se reconnecter.<br/>
      </p>
    </div>
  </div>
</div>


    );
}

export default BainJaponais;
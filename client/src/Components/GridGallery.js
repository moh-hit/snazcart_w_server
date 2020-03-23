import React from "react";
import Grid from '@material-ui/core/Grid';
import SectionTitle from '../Components/SectionTitle';


export default function GridGallery() {
  return (
    <div className="container-custom d-none d-lg-block my-5" >
                <SectionTitle title="Explore The Popular Collections" />



 <div className="row" >
    <div className="row col-6">
    <img className="gallery-img1" src="https://storage.cloud.google.com/snazcartweb/grid%20promo/grid_promo_1.webp" />


    </div>
    <div className="col-6">
      <div className="row">
        <div className="col-6">
        <img className="gallery-img3" src="https://storage.cloud.google.com/snazcartweb/grid%20promo/grid_promo_2.webp" />

        </div>
        <div className="col-6">
        <img className="gallery-img4" src="https://storage.cloud.google.com/snazcartweb/grid%20promo/grid_promo_3.webp" />

        </div>

      </div>
      <div className="row">
        <div className="col-12">
        <img className="gallery-img5" src="https://storage.cloud.google.com/snazcartweb/grid%20promo/grid_promo_4.webp" />

        </div>
        

      </div>
    </div>

 </div>
      
    </div>
  );
}
